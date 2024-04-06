import React, { useState } from 'react';
import { useGetPropertyDetailsQuery } from '../../redux/api/propertyApiSlics';
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import Navigation from './Navigation';
import { useFetchCategoriesQuery } from '../../redux/api/categoryApiSlice';
import Footer from './../User/Footer'

export function EnquiryForm() {
  
  const { userInfo } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: '',
    email: userInfo.email,
    phoneNumber: '',
    message: '',
    category: ''
  });
  const { data: categories } = useFetchCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category

  const [loading, setLoading] = useState(false); // Introduce loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    setSelectedCategory(selectedCategoryId);
    setFormData({ ...formData, category: selectedCategoryId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true during form submission
    try {
      await axios.post('http://localhost:5000/send-enquiry-email', formData);
      // Redirect to home page after successful submission
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error(error);
      alert('Failed to send email');
    } finally {
      setLoading(false); // Reset loading state after form submission
    }
  };  

  return (
    <div className="flex flex-col h-screen w-screen"> 
      <Navigation />
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-md p-8 bg-white  shadow-2xl rounded-xl">
          <h2 className="text-xl font-semibold mb-4 section-title">Enquiry Form</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-md px-4 py-2"
                placeholder="John Doe"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-md px-4 py-2"
                placeholder="john@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full border-gray-300 rounded-md px-4 py-2"
                placeholder="+1234567890"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-1">Category</label>
              <select
                placeholder='Select category'
                className='p-4 w-full border rounded-lg bg-white text-black'
                onChange={handleCategoryChange} // Update selected category on change
                value={selectedCategory} // Set selected category
              >
                {categories && categories.map((c) => (
                  <option key={c._id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                className="w-full border-gray-300 rounded-md px-4 py-2"
                placeholder="Write your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button 
                onClick={handleSubmit} 
                className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 text-center"
                disabled={loading} // Disable button when loading
              >
                {loading ? 'Sending...' : 'Send Enquiry'}
              </button>
            </div>
            <div>
              <button 
                onClick={() => {
                  const phoneNumber = '9774573178'; // Replace with the actual phone number
                  const message = encodeURIComponent(`Hello, I am ${formData.name}, i am enquiring abour ${formData.category} and my message is: ${formData.message}`); // Encode the message
                  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
                  window.open(whatsappUrl, '_blank');
                }} 
                className="w-full bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 text-center"
                disabled={loading} // Disable button when loading
              >
                Contact Us on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default EnquiryForm;
