import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import store from "./redux/features/store.js";
import App from "./App.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/register.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";

import AdminRoutes from "./pages/Admin/AdminRoutes.jsx";
import UserList from "./pages/Admin/UserList.jsx";
import CategoryList from "./pages/Admin/CategoryList.jsx";
import AllProperties from "./pages/Admin/AllProperties.jsx";
import AllUserProperty from "./pages/Auth/AllUserProperty.jsx";
import PropertyList from "./pages/Auth/PropertyList.jsx";
import PropertyUpdate from "./pages/Auth/PropertyUpdateAdmin.jsx";
import RentPage from "./pages/User/rentPage.jsx";
import SellPage from "./pages/User/sellPage.jsx";
import PropertyPage from "./pages/Auth/PropertyPage.jsx";
import Home from "./Home.jsx";
import EnquiryForm from "./pages/Auth/enquiryForm.jsx";
import "tailwindcss/tailwind.css";
import "./index.css"; // or wherever your custom CSS is located
import "react-toastify/dist/ReactToastify.css";
import LoginButton from "./pages/User/loginButton.jsx"; // Import the CSS for toast notifications
import LogoutButton from "./pages/User/logoutButton.jsx";

import Profile from "./pages/User/profileButton.jsx";
import AdminDashboard from "./pages/Admin/adminDashboard.jsx";
import { createAuth0Client } from "@auth0/auth0-spa-js";
import ProfilePage from "./pages/User/profilePage.jsx";

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-p7wvtxl7oxgknivr.us.auth0.com"
      clientId="jkTCGj55ZJcVNmQ1zQBfUyFMKPsrmKrP"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/loginAdmin" element={<Login />} />
          <Route path="/login" element={<LoginButton />} />
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/register" element={<Register />} />
          <Route path="/forRent" element={<RentPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/forSale" element={<SellPage />} />
          <Route index={true} path="/" element={<Home />} />

          {/* Define private routes with PrivateRoutes component */}
          <Route element={<PrivateRoutes />}>
            {/* Nested route for /profile */}
            <Route
              path="/propertylist/:pageNumber"
              element={<PropertyList />}
            />
            <Route path="/propertylist" element={<PropertyList />} />
            <Route path="/property/update/:_id" element={<PropertyUpdate />} />
            <Route path="/allproperties" element={<AllUserProperty />} />
            <Route path="/enquiry" element={<EnquiryForm />} />
          </Route>

          <Route path="/admin/" element={<AdminRoutes />}>
            <Route path="userlist" element={<UserList />} />
            <Route path="categorylist" element={<CategoryList />} />
            <Route path="allpropertieslist" element={<AllProperties />} />
            <Route path="admindashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer /> {/* Place ToastContainer here */}
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
