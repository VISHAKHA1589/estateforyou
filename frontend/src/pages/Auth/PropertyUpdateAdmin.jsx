import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdatePropertyMutation, useDeletePropertyMutation, useGetPropertyByIdQuery } from '../../redux/api/propertyApiSlics';
import { useFetchCategoriesQuery } from '../../redux/api/categoryApiSlice';
import { toast } from 'react-toastify';
import { useAuth0 } from "@auth0/auth0-react";
import AdminMenu from '../Admin/AdminMenu';
import Navigation from './Navigation';
import Footer from "../User/Footer.jsx";

const PropertyUpdate = () => {
  const params = useParams();
  const { data: propertyData } = useGetPropertyByIdQuery(params._id);

  const [image1, setImage1] = useState(propertyData?.image1 || '');
  const [name, setName] = useState(propertyData?.name || '');
  const [description, setDescription] = useState(propertyData?.description || '');
  const [price, setPrice] = useState(propertyData?.price || '');
  const [address, setAddress] = useState(propertyData?.address || '');
  const [category, setCategory] = useState(propertyData?.category || '');
  const [phoneNumber, setPhoneNumber] = useState(propertyData?.phoneNumber || '');
  const navigate = useNavigate();
  const { data: categories = [] } = useFetchCategoriesQuery();
  const [updateProperty] = useUpdatePropertyMutation();
  const [deleteProperty] = useDeletePropertyMutation();
  const { user, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (propertyData && propertyData._id) {
      setName(propertyData.name);
      setDescription(propertyData.description);
      setAddress(propertyData.address);
      setPrice(propertyData.price);
      setPhoneNumber(propertyData.phoneNumber);
      setCategory(propertyData.category);
      setImage1(propertyData.image1.url);
    }
  }, [propertyData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('address', address);
      formData.append('phoneNumber', phoneNumber);
      const data = await updateProperty({ propertyId: params._id, formData });

      if (data?.error) {
        toast.error(data.error, {
          autoClose: 1000,
        });
      } else {
        toast.success(`Property successfully updated`, {
          autoClose: 1000,
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Property update failed. Try again.", {
        autoClose: 1000,
      });
    }
  };

  const handleDelete = async () => {
    try {
      let answer = window.confirm('Are you sure you want to delete this property?');
      if (!answer) return;

      const { data } = await deleteProperty(params._id);
      toast.success(`"${data.name}" is deleted`, {
        autoClose: 1000,
      });
      navigate('/admin/allpropertieslist');
    } catch (err) {
      console.log(err);
      toast.error('Delete failed. Try again.', {
        autoClose: 1000,
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-full  mr-10 nunito-sans">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 p-3">
            <div className="h-12 section-title text-2xl">Update / Delete Property</div>

            {image1 && (
              <div className="text-center">
                <img src={image1} alt="property" className="block mx-auto w-1/5 h-[40%]" />
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name">Name</label> <br />
                  <input
                    type="text"
                    className="p-4 mb-3 w-full border rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price</label> <br />
                  <input
                    type="number"
                    className="p-4 mb-3 w-full border rounded-lg"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label> <br />
                  <input
                    type="number"
                    min="1"
                    className="p-4 mb-3 w-full border rounded-lg"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="address">Address</label> <br />
                  <input
                    type="text"
                    className="p-4 mb-3 w-full border rounded-lg"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <label htmlFor="description" className="my-5">
                Description
              </label>
              <textarea
                type="text"
                className="p-2 mb-3 border rounded-lg w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <div>
                <label htmlFor="category">Category</label> <br />
                <select
                  className="p-4 mb-3 w-full border rounded-lg"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories?.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="py-4 px-10 mt-5 rounded-lg text-lg font-bold bg-green-600 mr-6"
                >
                  Update
                </button>
                <button
                  onClick={handleDelete}
                  className="py-4 px-10 mt-5 rounded-lg text-lg font-bold bg-pink-600"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default PropertyUpdate;
