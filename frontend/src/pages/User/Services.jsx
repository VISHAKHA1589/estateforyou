import {Link} from 'react-router-dom';
function Services(){
  return(
      <section class="service" id="service">
        <div class="container">

          <p class="section-subtitle">Our Services</p>

          <h2 class="h2 section-title text-gray-100 font-extrabold text-4xl xs:text-4xl md:text-4xl"><span class="text-black">
Right Place To
</span>
            <span class="text-black">
Start Your House Hunting Journey
</span></h2>


          <ul class="service-list">

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src="../src/assets/images/service-3.png" className="h-[12rem]" alt="Service icon"/>
                </div>

                <h3 class="h3 card-title">
                  <Link to={'/forSale'}> Buy a home</Link>
                </h3>

                <p class="card-text">
                  Find Your Dream Home: Explore Our Wide Selection of Properties
                </p>

                <Link to={'/forSale'} class="card-link">
                  <span>Buy A Home</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src="../src/assets/images/service-2.png" className="h-[12rem]" alt="Service icon"/>
                </div>

                <h3 class="h3 card-title">
                  <Link to={'/forRent'} >Rent a home</Link>
                </h3>

                <p class="card-text">
                  Find the Perfect Rental Property: Tailored to Your Budget and Preferences
                </p>

                <Link to={'/forRent'} class="card-link">
                  <span>Rent A Home</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src="../src/assets/images/service-1.png" className="h-[12rem]"alt="Service icon"/>
                </div>

                <h3 class="h3 card-title">
                  <Link to={'/propertylist'}>Sell a home</Link>
                </h3>

                <p class="card-text">
                  Sell Your Home Stress-Free: From Listing to Closing, We've Got You Covered
                </p>

                <Link to={'/propertylist'} class="card-link">
                  <span>Sell A Home</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>

              </div>
            </li>

          </ul>

        </div>
      </section>

  );
}

export default Services;