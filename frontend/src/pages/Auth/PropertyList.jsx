import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePropertyMutation } from '../../../src/redux/api/propertyApiSlics.js';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useFetchCategoriesQuery } from '../../redux/api/categoryApiSlice.js';
import Navigation from './Navigation.jsx';
import Footer from "../User/Footer.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const PropertyList = () => {
  const [images, setImages] = useState(['', '', '', '']);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageUrls, setImageUrls] = useState(['', '', '', '']);
  const navigate = useNavigate();
  const { user,isAuthenticated } = useAuth0();

  const { data: categories } = useFetchCategoriesQuery();
  const { userInfo } = useSelector((state) => state.auth);

  const [createProperty] = useCreatePropertyMutation();

  if (!user || !isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleImage = (index, e) => {
    const file = e.target.files[0];
    setFileToBase(index, file);
  }

  const setFileToBase = (index, file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const newImages = [...images];
      newImages[index] = reader.result;
      setImages(newImages);
    }
  }

  const uploadFileHandler = (index, e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
  
    try {
      setFileToBase(index, file);
      const imageUrl = URL.createObjectURL(file);
      const newImageUrls = [...imageUrls];
      newImageUrls[index] = imageUrl;
      setImageUrls(newImageUrls);
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const propertyData = new FormData();
      propertyData.append("owner", userInfo.email);
      propertyData.append("ownerName", userInfo.name);
      images.forEach((image, index) => {
        propertyData.append(`image${index + 1}`, image);
      });
      propertyData.append("name", name);
      propertyData.append("description", description);
      propertyData.append("price", price);
      propertyData.append("category", category);
      propertyData.append("address", address);
      propertyData.append("phoneNumber", phoneNumber);
  
      const { data } = await createProperty(propertyData);
      if (data && data.error) {
        toast.error("Property create failed. Try Again.");
      } else {
        toast.success(`${data.name} is created`);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Property create failed. Try Again.");
    }
  };
  
  return (
    <div>
      <Navigation />
      <div className="flex justify-center items-center h-full lg:ml-60">
        <div className="container xl:mx-[9rem] sm:mx-[0]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/4 p-3">
              <div className="h-12 section-title text-2xl">Post a Property</div>

              <div className="text-center border border-black-200 p-4 rounded-lg">
                {images.map((image, index) => (
                  <div key={index} className="inline-block mx-2 h-[10rem] w-[10rem] relative">
                    {image && (
                      <img
                        src={image}
                        alt={`property-${index}`}
                        className="block object-cover h-[10rem] w-[10rem] rounded-lg"
                      />
                    )}
                    <div className="absolute inset-0 flex justify-center items-center">
                      <label className="border text-black px-4 py-2 block w-full text-center rounded-lg cursor-pointer font-bold">
                        {image ? "Change Image" : "Upload Image"}
                        <input
                          type="file"
                          name={`image${index + 1}`}
                          accept="image/*"
                          onChange={(e) => uploadFileHandler(index, e)}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 mt-4 rounded-lg border border-black-200">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 md:pr-3 mb-3">
                    <label htmlFor="name block" className="text-black">Name</label><br />
                    <input type="text" className='p-2 w-full border rounded-lg bg-white text-black' value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-3 mb-3">
                    <label htmlFor="price" className="text-black lg:pl-5">Price</label><br />
                    <input type="text" className='p-2 w-full border rounded-lg bg-white text-black' value={price} onChange={e => setPrice(e.target.value)} />
                  </div>

                  <div className="w-full md:w-1/2 pr-3 mb-3">
                    <label htmlFor="number block" className="text-black">Phone Number</label><br />
                    <input type="number" className='p-2 w-full border rounded-lg bg-white text-black' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                  </div>

                  <div className="w-full md:w-1/2 md:pl-3 mb-3">
                    <label htmlFor="address block" className="text-black lg:pl-5">Address</label><br />
                    <input type="text" className='p-2 w-full border rounded-lg bg-white text-black' value={address} onChange={e => setAddress(e.target.value)} />
                  </div>
                </div>
                <label htmlFor="" className="my-5 text-black">Description</label>
                <textarea
                  type="text"
                  className="p-2 mb-3 border rounded-lg w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                {categories && (
                  <div>
                    <label htmlFor="" className="text-black">Category</label><br />
                    <select placeholder='Select category' className='p-2 w-full border rounded-lg bg-white text-black' onChange={e => setCategory(e.target.value)}>
                      {categories.map((c) => (
                        <option key={c._id} value={c._id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-4 cursor-pointer text-center'>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PropertyList;
