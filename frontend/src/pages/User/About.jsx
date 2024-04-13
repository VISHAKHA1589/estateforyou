import React from 'react';

import { IonIcon } from '@ionic/react';
import { homeOutline, leafOutline, wineOutline, shieldCheckmarkOutline } from 'ionicons/icons';
function About() {
  return (
      <section class="about aos-init aos-animate" data-aos="zoom-in" data-aos-duration="2000" id="about">
        <div class="container">
          <figure class="about-banner shadow-2xl">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="House interior"/>
            <img src="https://plus.unsplash.com/premium_photo-1681825038820-3881edc197f7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="House interior" class="abs-img"/>
          </figure>

          <div class="about-content">
      <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-black">
            <span>About us</span>
            <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </span>

            <h2 class="h2 section-title "><strong>The Leading Real Estate Rental Marketplace In Agartala.</strong></h2>


            <p class="about-text">
              Over 100+ builders and brokers for us in Agartala,
              combined with specialist services
            </p>

            <ul class="about-list">

              <li class="about-item">
                <div class="about-item-icon">
                  <IonIcon icon={homeOutline}></IonIcon>
                </div>

                <p class="about-item-text">Modern Home Design</p>
              </li>

              <li class="about-item">
                <div class="about-item-icon">
                  <IonIcon icon={leafOutline}></IonIcon>
                </div>

                <p class="about-item-text">Beautiful Scene Around</p>
              </li>

              <li class="about-item">
                <div class="about-item-icon">
                  <IonIcon icon={wineOutline}></IonIcon>
                </div>

                <p class="about-item-text">Exceptional Lifestyle</p>
              </li>

              <li class="about-item">
                <div class="about-item-icon">
                  <IonIcon icon={shieldCheckmarkOutline}></IonIcon>
                </div>

                <p class="about-item-text">Complete 24/7 Security</p>
              </li>

            </ul>

            <p class="callout">
              Unlock Your Dream Home Today
            </p>

            <a href="#service" class="btn">Our Services</a>

          </div>

        </div>
      </section>


  );
}

export default About;