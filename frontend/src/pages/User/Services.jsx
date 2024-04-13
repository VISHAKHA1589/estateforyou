import {Link} from 'react-router-dom';
function Services(){
  return(
      <section class="service" id="service">
        <div class="container">

          <p class="section-subtitle">Our Services</p>

          <h2 class="h2 section-title text-gray-100 font-extrabold text-4xl xs:text-4xl md:text-4xl underline decoration-sky-500"><span class="text-black">
Right Place To
</span>
            <span class="text-black">
Get a Better and Professionals Design
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
                  over 1 million+ homes for sale available on the website, we can match you with a house you will want
                  to call home.
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
                  over 1 million+ homes for sale available on the website, we can match you with a house you will want
                  to call home.
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
                  over 1 million+ homes for sale available on the website, we can match you with a house you will want
                  to call home.
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