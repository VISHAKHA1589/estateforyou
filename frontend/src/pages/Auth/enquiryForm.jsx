import React, { useState, useEffect } from 'react';
import { useGetPropertyDetailsQuery } from '../../redux/api/propertyApiSlics';
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { useFetchCategoriesQuery } from '../../redux/api/categoryApiSlice';
import Footer from './../User/Footer'
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function EnquiryForm() {

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate(); // Initialize useNavigate
  const [loading, setLoading] = useState(true);
    function openWhatsApp() {

      let phoneNumber = '916009396197';
      let message = encodeURIComponent('Hello! I would like to inquire about...');
      let whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappLink);}


  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        navigate('/enquiry');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, loginWithRedirect, navigate]);


  const { userInfo } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: '',
    email: userInfo&& userInfo.email || isAuthenticated && user.email,
    phoneNumber: '',
    message: '',
    category: ''
  });
  const { data: categories } = useFetchCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category

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
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/send-enquiry-email', formData);
      toast.success("enquiry sent successfully")
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navigation />
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-xl">
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
                onChange={handleCategoryChange}
                value={selectedCategory}
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
            <div className="flex justify-center items-center gap-8">
              <button
                  onClick={handleSubmit}
                  className="w-50 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 text-center"
                  disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Enquiry'}
              </button>
              <button
                  onClick={openWhatsApp}
                  className="w-50 bg-green-600 text-white rounded-md px-4 py-2 hover:bg-blue-600 text-center"
                  disabled={loading}
              >
                contact on whatsapp
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default EnquiryForm;
