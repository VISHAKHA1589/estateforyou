import React, { useEffect, useState } from 'react';
import { mailOutline, locationOutline, closeOutline, searchOutline, personOutline, cartOutline, menuOutline, logoFacebook, logoPinterest, logoInstagram, logoTwitter, bedOutline, homeOutline } from 'ionicons/icons';
import { useAuth0 } from "@auth0/auth0-react";
import {useLogoutMutation} from "../../redux/api/UsersApiSlice.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { logout } from "../../redux/features/auth/authSlice";

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useSelector} from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navigation() {
  const { user,loginWithRedirect, isAuthenticated,logout: customLogout } = useAuth0();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const {userInfo}=useSelector(state=>state.auth)
    const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const elemToggleFunc = (elem) => {
      elem.classList.toggle("active");
    };

    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const navElemArr = [overlay, navCloseBtn, navOpenBtn];
    const profileButton = document.querySelector("[data-profile-button]");
    const profileSidebar = document.querySelector("[data-profile]");
    const profileSidebarOpen = document.querySelector("[data-profile-open-btn]");
    const profileSidebarClose = document.querySelector("[data-profile-sidebar-close-btn]");

    for (let i = 0; i < navbarLinks.length; i++) {
      navElemArr.push(navbarLinks[i]);
    }

    const toggleNavbar = () => {
      elemToggleFunc(navbar);
      elemToggleFunc(overlay);
    };

    // toggle profile sidebar
    const toggleProfileSidebar = () => {
      elemToggleFunc(profileSidebar);
      elemToggleFunc(overlay);
    }; 
    const toggleProfileMenu = () => {
      setShowProfileMenu(!showProfileMenu);
    };

    navOpenBtn.addEventListener("click", toggleNavbar);
    navCloseBtn.addEventListener("click", toggleNavbar);
    profileButton.addEventListener("click", toggleProfileMenu);
    profileSidebarOpen.addEventListener("click", toggleProfileSidebar);
    profileSidebarClose.addEventListener("click", toggleProfileSidebar);

    navbarLinks.forEach(link => {
      link.addEventListener("click", toggleNavbar);
    });

    return () => {
      navOpenBtn.removeEventListener("click", toggleNavbar);
      navCloseBtn.removeEventListener("click", toggleNavbar);
      profileButton.removeEventListener("click", toggleProfileMenu);
      navbarLinks.forEach(link => {
        link.removeEventListener("click", toggleNavbar);
      });
    };
  }, []);

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate("/loginAdmin");
        } catch (error) {
            console.error(error);
        }
    };


    return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>

      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="mailto:info@homeverse.com" className="header-top-link">
                <ion-icon icon={mailOutline}></ion-icon>
                <span>Estate4Usupport@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                <ion-icon icon={locationOutline}></ion-icon>
                <address>Agartala, Tripura</address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon icon={logoFacebook}></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon icon={logoTwitter}></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon icon={logoInstagram}></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon icon={logoPinterest}></ion-icon>
                </a>
              </li>
            </ul>
            <Link to="/propertylist">
              <button className="header-top-btn">Add Listing</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="header-bottom ">
        <div className="container">
          <Link to="/" className="logo">
            <img src="../src/assets/images/logo.png" className='w-[12rem]' alt="Homeverse logo" />
          </Link>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo ">
                <img src="../src/assets/images/logo.png" alt="Homeverse logo" />
              </a>
              <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
                <ion-icon icon={closeOutline}></ion-icon>
              </button>
            </div>
            <div className="navbar-bottom ml-[20%]">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>Home</a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>About</a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>Service</a>
                </li>
                <li>
                  <a href="#property" className="navbar-link" data-nav-link>Property</a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Profile Menu */}
          <nav className="navbar" data-profile>
            <div className="navbar-top">
              <a href="#" className="logo ">
                <img src="../src/assets/images/logo.png" alt="Homeverse logo"/>
              </a>
              <button className="profile-sidebar-close-btn" data-profile-sidebar-close-btn aria-label="Close Menu">
                <ion-icon icon={closeOutline}></ion-icon>
              </button>
            </div>
            <div className="navbar-bottom sm:hidden">
              {userInfo ? (
                  <ul className="navbar-list">
                    {/* Show links for authenticated user with userInfo */}
                    <li><h1 >Welcome, Admin </h1>

                    </li>
                    <li><Link to={"/admin/admindashboard"} className="navbar-link" data-nav-link>Admin
                      Dashboard</Link>

                    </li>
                    <li><Link to={"/admin/allpropertieslist"} className="navbar-link" data-nav-link>all
                      properties</Link>

                    </li>
                    <li>
                      <Link to={"/admin/categorylist"} className="navbar-link" data-nav-link>Add a category</Link>
                    </li>
                    <li>
                      <button onClick={logoutHandler} className="navbar-link" data-nav-link>Admin Logout</button>
                    </li>
                  </ul>
              ) : isAuthenticated ? (
                  <div>
                      <div className="flex items-center justify-center mt-8">
                        {isAuthenticated && (
                            <img src={user.picture} alt="user image" className="w-16 h-16 rounded-full"/>
                        )}
                      </div>
                  {isAuthenticated && (
                      <div className="text-center mt-4">
                        <p className="text-lg font-semibold">{user.name}</p>
                        <p className="text-sm">{user.email}</p>
                      </div>
                  )}
                <ul className="mt-8">
                <li>
                <Link to={"/allproperties"} className="block py-2 px-4 hover:bg-gray-800">All your properties</Link>
          </li>
          <li>
            <Link to={"/propertylist"} className="block py-2 px-4 hover:bg-gray-800">Add a listing</Link>
          </li>
          <li>
            <Link to={"/enquiry"} className="block py-2 px-4 hover:bg-gray-800">Make an enquiry</Link>
          </li>
        </ul>
                    {isAuthenticated && (
                        <button className="py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 mt-4 ml-[30%]" onClick={() =>customLogout({ returnTo: window.location.origin })}>Logout</button>
                    )}
      </div>
              ) : (
                  <ul className="navbar-list">
                  {/* Show content for non-authenticated users */}
                    <li>
                      <button className="navbar-link" onClick={() => loginWithRedirect()}>Login</button></li>
                    <li>
                      <button className="navbar-link"
                              onClick={() => loginWithRedirect({screen_hint: "signup"})}>Register
                      </button>
                    </li>
                  </ul>
              )}
            </div>

          </nav>

          <div className="header-bottom-actions ">
            <button className="header-bottom-actions-btn" aria-label="Buy">
              <Link to="/forSale" replace>
                <ion-icon icon={homeOutline}></ion-icon>
                <span>Buy</span>
              </Link>
            </button>

            <button className="header-bottom-actions-btn" aria-label="Rent">
              <Link to="/forRent" replace>
                <ion-icon icon={bedOutline}></ion-icon>
                <span>Rent</span>
              </Link>
            </button>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="header-bottom-actions-btn bg-gray-100 profilebutton hidden sm:block" data-profile-button>
                  {!isAuthenticated ? (
                      <>
                        <ion-icon icon={personOutline} className="w-10 h-10"></ion-icon>
                        <span>Profile</span>
                      </>
                  ) : (
                      <>
                        <img src={user.picture} alt={user.name} className="w-10 h-10 p-2 rounded-full ml-1"/>
                        <span>Profile</span>
                      </>
                  )}
                </Menu.Button>
                <button className="header-bottom-actions-btn profile-sidebar sm:hidden" data-profile-open-btn aria-label="Open Menu">
                  <ion-icon icon={personOutline}></ion-icon>
                  <span>Profile</span>
                </button>
              </div>
              <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
              >
                {userInfo ? (
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none profilemenu">
                      <Menu.Item>
                        {({ active }) => (
                            <Link to={"/admin/admindashboard"} className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )} data-nav-link>Admin Dashboard</Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                            <Link to={"/admin/allpropertieslist"} className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )} data-nav-link>All Properties</Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                            <Link to={"/admin/categorylist"} className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )} data-nav-link>Add a Category</Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                            <button onClick={logoutHandler} className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )} data-nav-link>Logout</button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                ) : isAuthenticated ? (
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none profilemenu">
                      <Menu.Item>
                        <div className="m-4">
                          <div className="flex items-center justify-center mt-8">
                            {isAuthenticated && (
                                <img src={user.picture} alt="user image" className="w-16 h-16 rounded-full"/>
                            )}
                          </div>
                          {isAuthenticated && (
                              <div className="text-center mt-4 p-4">
                                <p className="text-lg font-semibold">{user.name}</p>
                                <p className="text-sm">{user.email}</p>
                              </div>
                          )}
                          <ul className="mt-8">
                            <li>
                              <Link to={"/allproperties"} className="block py-2 px-4 hover:bg-gray-200">All your properties</Link>
                            </li>
                            <li>
                              <Link to={"/propertylist"} className="block py-2 px-4 hover:bg-gray-200">Add a listing</Link>
                            </li>
                            <li>
                              <Link to={"/enquiry"} className="block py-2 px-4 hover:bg-gray-200">Make an enquiry</Link>
                            </li>
                          </ul>
                          {isAuthenticated && (
                              <button className="py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 mt-4 ml-[30%]" onClick={() => customLogout({returnTo: window.location.origin})}>Logout</button>
                          )}
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                ) : (
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none profilemenu">
                      <Menu.Item>
                        {({ active }) => (
                            <button
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900 ml-10px' : 'text-gray-700',
                                    'block w-full text-left py-2 px-4 hover:bg-gray-200 ml-10px'
                                )}
                                onClick={() => loginWithRedirect()}
                            >
                              Login
                            </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                            <button
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900 ml-10px' : 'text-gray-700',
                                    'block w-full text-left py-2 px-4 hover:bg-gray-200 ml-10px'
                                )}
                                onClick={() => loginWithRedirect({screen_hint: "signup"})}
                            >
                              Register
                            </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>

                )}
              </Transition>
            </Menu>



            <button className="header-bottom-actions-btn" data-nav-open-btn aria-label="Open Menu">
              <ion-icon icon={menuOutline}></ion-icon>
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Navigation;
