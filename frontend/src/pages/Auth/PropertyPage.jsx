import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetPropertyDetailsQuery } from '../../redux/api/propertyApiSlics';
import { useNavigate, useParams } from 'react-router';
import { FaLocationArrow } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook
import Navigation from './Navigation';
import './PropertyPage.css';
import EmailForm from './Emailform';

const PropertyPage = () => {
  const { id: propertyId } = useParams();
  const [showCard, setShowCard] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const { data: property, isLoading, isError } = useGetPropertyDetailsQuery(propertyId);
  const cardRef = useRef(null);
  const { userInfo } = useSelector(state => state.auth);

  const { user, isAuthenticated } = useAuth0(); // Use useAuth0 hook here

  useEffect(() => {
    if (!user || !userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo, user]); // Include user in the dependencies array

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowCard(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    if (user || userInfo) {
      setShowCard(!showCard);
    } else {
      navigate('/login');
    }
  };

  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  if (!property) {
    return <div>No data found for the provided ID</div>;
  }

  return (
    <div className={`${showCard ? 'blurred' : ''}`}>
      <Navigation className="nav" />
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-full mx-auto overflow-hidden rounded-lg">
                    <img
                      src={selectedImage || (property.image2 && property.image2.url) || ''}
                      className="w-full h-auto object-cover sm:h-screen"
                      alt={property.name}
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col sm:gap-2">
                    {[property.image3, property.image4, property.image1, property.image2].map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        className="flex-0 aspect-square mb-3 h-20 sm:h-auto overflow-hidden rounded-lg border-2 border-gray-900"
                        onClick={() => handleThumbnailClick(image && image.url)}
                      >
                        <img
                          src={image && image.url}
                          className="w-full h-full object-cover"
                          alt={property.name}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 lg:mt-10">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{property.name}</h1>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">₹{property.price}</h1>
                  <span className="text-base">{property.category === "6603e6c8efb63894b3663278" ? '/month' : ""}</span>
                </div>

                <button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800" onClick={handleButtonClick}>
                  &nbsp;&nbsp;Get Owner Details
                </button>

                {showCard && (
                  <div className="card-overlay">
                    <div ref={cardRef} className="card">
                      <div>
                        <EmailForm />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <FaLocationArrow className="w-6 h-6 mr-2" />
                  {property.address}
                </li>
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Verified Owner
                </li>
              </ul>

              <div className="lg:col-span-3">
                <div className="border-b border-gray-300">
                  <nav className="flex gap-4">
                    <a href="#" title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>
                  </nav>
                </div>

                <div className="mt-8 flow-root sm:mt-12">
                  <h1 className="text-3xl font-bold">DESCRIPTION</h1>
                  <p className="mt-4">{property.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyPage;
