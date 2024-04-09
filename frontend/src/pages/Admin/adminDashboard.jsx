import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch } from 'react-redux';
import { useAllPropertiesQuery, useApprovePropertyMutation,useDeletePropertyMutation } from '../../redux/api/propertyApiSlics';
import Navigation from "../Auth/Navigation.jsx";
import { toast } from 'react-toastify';
import Footer from "../User/Footer.jsx";
import { useParams } from "react-router-dom";
import AdminMenu from "./AdminMenu.jsx";


const AdminDashboard = () => {
  const params = useParams();
  const { data: properties, isLoading, isError } = useAllPropertiesQuery();
  const dispatch = useDispatch();
  const [approveProperty, { error: approveError }] = useApprovePropertyMutation();
  const [deleteProperty] = useDeletePropertyMutation();

  const handleApproveProperty = async (propertyId) => {
    try {
      await approveProperty(propertyId);
      toast.success("Property is approved");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (propertyId) => {
    try {
      let answer = window.confirm('Are you sure you want to delete this property?');
      if (!answer) return;
  
      const { data } = await deleteProperty(propertyId);
      toast.success(`"${data.name}" is deleted`, {
        autoClose: 2000,
      });
      // Assuming you have access to a function navigate, you can navigate after deletion
      // You might need to import it from 'react-router-dom' if it's not already imported
      // navigate('/admin/allpropertieslist');
    } catch (err) {
      console.log(err);
      toast.error('Delete failed. Try again.', {
        autoClose: 2000,
      });
    }
  };
  
  if (isLoading) {
    return (
      <div>
        <Navigation />
        
        <p className="section-title text-2xl">Property requests</p>
        <div>Loading...</div>
        <Footer />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <Navigation />
        <p className="section-title text-2xl">Property requests</p>
        <div>Error loading properties</div>
        <Footer />
      </div>
    );
  }

  // Filter properties where approved is false
  const pendingProperties = properties.filter(property => !property.approved);

  return (
    <>
      <Navigation />
      <p className="section-title text-2xl">Property requests</p>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pendingProperties.map((property) => (
            <div key={property._id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              {property.image1 && property.image1.url && (
                <img src={property.image1.url} alt={property.name} className="w-full h-64 object-cover" />
              )}
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">{property.name}</h5>
                <p className="text-sm text-gray-600 mb-4">{moment(property.createdAt).format("MMMM Do YYYY")}</p>
                <p className="text-sm text-gray-700 mb-4">{property.description.substring(0, 160)}...</p>
                <div className="flex justify-between items-center">
                  <button>
                  <Link to={`/property/update/${property._id}`} className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300">
                    Update
                  </Link></button>
                  <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300" onClick={() => handleApproveProperty(property._id)}>
                    Approve
                  </button>
                  <button className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300" onClick={() => handleDelete(property._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
