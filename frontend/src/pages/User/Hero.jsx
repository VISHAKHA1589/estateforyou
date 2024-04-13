import React from 'react';

import './hero.css';

import { IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import EnquiryForm from '../Auth/enquiryForm';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Hero() {
  return (
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content aos-init aos-animate " data-aos="zoom-in" data-aos-duration="2000">
            <p className="hero-subtitle">
              <IonIcon icon={homeOutline} />
              <span>Real Estate Agency</span>
            </p>
            <h1 class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900">
              Get your dream<span
                class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">house</span>
              by us.
            </h1>
            <p className="hero-text mt-4">
              Find the home that reflects your unique lifestyle and aspirations.
            </p>
            <Link to="/enquiry"><button className="btn">Make An Enquiry</button></Link>
          </div>
          <figure className="hero-banner size-bottom-8 size--translate-x-5 aos-init aos-animate shadow-2xl" data-aos="zoom-in" data-aos-duration="1000">
            <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern house model" className="w-100" />
          </figure>
        </div>
      </section>
  );
}

export default Hero;