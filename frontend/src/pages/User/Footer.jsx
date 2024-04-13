import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Footer() {
  const { loginWithRedirect } = useAuth0();
  function openWhatsApp() {
    let phoneNumber = '916009396197'; // Enter your WhatsApp phone number here
    let message = encodeURIComponent('Hello! I would like to inquire about...');
    let whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink);
  }


  return (
      <div>
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="footer-brand">
                <a href="#" className="logo bg-white">
                  <img src="../src/assets/images/logo.png" alt="Estate4U logo" />
                </a>
                <p className="section-text">Estate4U aims to simplify the real estate experience for both buyers and sellers.</p>
                <ul className="contact-list">
                  <li>
                    <a href="#" className="contact-link">
                      <ion-icon name="location-outline"></ion-icon>
                      <address>Agartala, Tripura, India</address>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Estate4Usupport@gmail.com" className="contact-link">
                      <ion-icon name="mail-outline"></ion-icon>
                      <span>Estate4Usupport@gmail.com</span>
                    </a>
                  </li>
                </ul>
                <ul className="social-list">
                  <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                  <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                  <li><a href="#" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                  <li><a href="#" className="social-link"><ion-icon name="logo-youtube"></ion-icon></a></li>
                </ul>
              </div>
              <div className="footer-link-box">
                <ul className="footer-list">
                  <li><p className="footer-list-title">Company</p></li>
                  <li><a href="#" className="footer-link">About</a></li>
                  <li><a href="#" className="footer-link">Blog</a></li>
                  <li><button onClick={openWhatsApp} className="footer-link">Contact us</button></li>
                </ul>
                <ul className="footer-list">
                  <li><p className="footer-list-title">Services</p></li>
                  <li><button className="footer-link" onClick={() => loginWithRedirect()}>Login</button></li>
                  <li><a href="#" className="footer-link">Register</a></li>
                </ul>
                <ul className="footer-list">
                  <li><p className="footer-list-title">Customer Care</p></li>
                  <li><button className="footer-link" onClick={() => loginWithRedirect()}>Login</button></li>
                  <li><a href="#" className="footer-link">FAQ</a></li>
                  <li><button onClick={openWhatsApp} className="footer-link">Contact us</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <p className="copyright">&copy; 2024 <a href="#">Estate4u</a>. All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default Footer;
