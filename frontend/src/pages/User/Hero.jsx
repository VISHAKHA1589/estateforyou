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
        <div className="hero-content">
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
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <Link to="/enquiry"><button className="btn">Make An Enquiry</button></Link>
        </div>
        <figure className="hero-banner shadow-lg shadow-indigo-500/40 ">
          <img src="../src/assets/images/hero-banner.png" alt="Modern house model" className="w-100" />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
