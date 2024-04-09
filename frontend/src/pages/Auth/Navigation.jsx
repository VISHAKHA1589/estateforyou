import React, { useEffect } from 'react';
import { mailOutline, locationOutline, closeOutline, searchOutline, personOutline, cartOutline, menuOutline,logoFacebook,logoPinterest,logoInstagram,logoTwitter, bedOutline,homeOutline } from 'ionicons/icons';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import sellPage from '../User/sellPage';
import { useSelector } from 'react-redux'

import rentPage from '../User/rentPage'

function Navigation() {
  const { user, isAuthenticated } = useAuth0();
const {userInfo}=useSelector(state=>state.auth)
  const { loginWithRedirect } = useAuth0();

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
  
    for (let i = 0; i < navbarLinks.length; i++) { 
      navElemArr.push(navbarLinks[i]); 
    }
  
    const toggleNavbar = () => {
      elemToggleFunc(navbar);
      elemToggleFunc(overlay);
    };
  
    navOpenBtn.addEventListener("click", toggleNavbar);
    navCloseBtn.addEventListener("click", toggleNavbar);
  
    navbarLinks.forEach(link => {
      link.addEventListener("click", toggleNavbar);
    });
  
    console.log(userInfo)
    
  


    const handleProfileClick = () => {
      setShowProfileMenu(!showProfileMenu);
    };
  
    return () => {
     
      navOpenBtn.removeEventListener("click", toggleNavbar);
      navCloseBtn.removeEventListener("click", toggleNavbar);
      navbarLinks.forEach(link => {
        link.removeEventListener("click", toggleNavbar);
      });
    };
  }, []);
  

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
                <address>Agartala,Tripura</address>
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
            <button className="header-top-btn">Add Listing</button></Link>
            <button  className="header-top-btn" onClick={() => loginWithRedirect()}>Log In</button>;

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
            <div className="navbar-bottom">
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

          <div className="header-bottom-actions">
           
          <button className="header-bottom-actions-btn" aria-label="Profile">
    {!isAuthenticated ? (
        <>
            <ion-icon icon={personOutline}></ion-icon>
            <span>Profile</span>
        </>
    ) : (<>
        <img src={user.picture} alt={user.name} />
        <span>Profile</span>
        </>
    )}
</button>


          
            
            
            <button className="header-bottom-actions-btn" aria-label="Buy">
              <Link to="/forSale" replace>
              <ion-icon icon={homeOutline}></ion-icon>
              <span>Buy</span></Link>
            </button>
            
            <button className="header-bottom-actions-btn" aria-label="Rent">
              <Link to="/forRent" replace>
              <ion-icon icon={bedOutline}></ion-icon>
              <span>Rent</span></Link>
            </button>
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
