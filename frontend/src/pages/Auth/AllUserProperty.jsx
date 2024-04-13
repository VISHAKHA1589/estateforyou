import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import { useAllPropertiesQuery } from "../../redux/api/propertyApiSlics";
import Navigation from "./Navigation";
import Footer from "../User/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import Loading from "../../Loading.jsx";

const AllUserProperties = () => {
  const { data: properties, isLoading, isError } = useAllPropertiesQuery();
  const { userInfo } = useSelector((state) => state.auth);
  const { user, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {return <Loading/>
  }

  if (isLoading) {
    return {
    Loading
  };
  }

  if (isError) {
    return <div>Error loading properties</div>;
  }

  let userProperties = properties;

  if (isAuthenticated && (userInfo || user)) {
    // Filter properties created by the logged-in user
    userProperties = properties.filter((property) => {
      return (
        (user && property.owner === user.email) || // Check userInfo email
        (userInfo && property.owner === userInfo._id) || // Check userInfo _id
        (userInfo && property.owner === userInfo.email) // Check Auth0 user email
      );
    });
  }

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="p-3">
            <div className="ml-2 text-3xl font-bold mb-6">
              All Your Properties ({userProperties.length})
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {userProperties.map((property) => (
                <Link
                  key={property._id}
                  to={`/property/update/${property._id}`}
                  className="flex flex-col rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    {property.image1 && property.image1.url && (
                      <img
                        src={property.image1.url}
                        alt={property.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex justify-center items-center"></div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-2">
                      {property.name}
                    </p>
                    <p className="text-gray-700 text-sm mb-4">
                      {property?.description?.substring(0, 160)}...
                    </p>
                    <div className="flex justify-between items-center">
                      <Link
                        to={`/property/update/${property._id}`}
                        className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                      >
                        Update
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>

                      <p className="text-gray-800 font-semibold">
                        ${property?.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:w-1/4 p-3 mt-2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllUserProperties;
