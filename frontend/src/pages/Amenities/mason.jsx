// Mason.jsx

import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navigation from "../Auth/Navigation.jsx";
import Footer from './../User/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mason = () => {
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: isAuthenticated && user.email || '',
        phoneNumber: '',
        message: '',
        category: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/send-enquiry-email', formData);
            toast.success("Enquiry sent successfully");
            navigate('/');
        } catch (error) {
            console.error(error);
            toast.error('Failed to send email');
        } finally {
            setLoading(false);
        }
    };

    const openWhatsApp = () => {
        let phoneNumber = '916009396197';
        let message = encodeURIComponent('Hello! I would like to inquire about...');
        let whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappLink);
    };

    return (
        <div className="flex flex-col min-h-screen ">
            <Navigation />
            <div className="flex-grow flex justify-center items-center">
                <div className="w-full max-w-4xl px-6 py-12 bg-white shadow-lg rounded-lg">
                    <div className="flex justify-center mb-8">
                        <img src="https://via.placeholder.com/800x400" alt="Image" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Welcome to our Inquiry Page!</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
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
                                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="+1234567890"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1">Message</label>
                            <textarea
                                id="message"
                                className="w-full border-gray-300 rounded-md px-4 py-2 h-32 focus:outline-none focus:border-blue-500"
                                placeholder="Write your message here"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white rounded-md px-6 py-3 text-lg hover:bg-blue-600 focus:outline-none"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Inquiry'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default Mason;
