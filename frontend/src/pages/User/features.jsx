import { Link } from "react-router-dom";


function Features(){

  return(


      <section class="features">
        <div class="container">

          <p class="section-subtitle">Our Aminities</p>

          <h2 class="h2 section-title"><strong>Building Aminities</strong></h2>

          <ul class="features-list">

            <li>
              <Link to={'/interior'}  class="features-card">

                <div class="card-icon">
                  <img src="https://static.vecteezy.com/system/resources/previews/008/963/105/original/furniture-gallery-interior-logo-design-vector.jpg" alt="iconimg "></img>
                </div>

                <h3 class="card-title">Interior</h3>

                <div class="card-btn">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

              </Link>
            </li>

            <li>
              <Link to={'/planning'}  class="features-card">

                <div class="card-icon">
                  <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-real-estate-logo-design-template-building-logo-png-image_5137696.jpg" alt="iconimg"></img>
                </div>

                <h3 class="card-title">Building planning</h3>

                <div class="card-btn">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

              </Link>
            </li>

            <li>
              <Link to={'/materials'} class="features-card">

                <div class="card-icon">
                  <img src="https://static.vecteezy.com/system/resources/previews/007/794/715/large_2x/construction-logo-template-suitable-for-construction-company-brand-format-and-easy-to-edit-free-vector.jpg" alt="iconimg"></img>
                </div>

                <h3 class="card-title">Constrction materials</h3>

                <div class="card-btn">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

              </Link>
            </li>

            <li>
              <Link to={'/homesanitary'} class="features-card">

                <div class="card-icon">
                  <img src="https://th.bing.com/th/id/OIP.gpJUZFWu1DerQmrq51a--gAAAA?w=238&h=250&rs=1&pid=ImgDetMain" alt="iconimg"></img>
                </div>

                <h3 class="card-title">Home sanitary</h3>

                <div class="card-btn">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

              </Link>
            </li>

            <li>
              <Link to={'/electricals'}  class="features-card">

                <div class="card-icon">
                  <img src="https://thumbs.dreamstime.com/b/electricity-logo-vector-art-logo-template-your-business-electricity-logo-vector-art-logo-template-your-business-abstract-111220452.jpg" alt="iconimg"></img>
                </div>

                <h3 class="card-title">Electricals</h3>

                <div class="card-btn">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

              </Link>
            </li>

            <li>
              <Link to={'/engineerconsultation'} class="features-card">

                <div class="card-icon">
                  <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094634/blue-chart-consulting.png" alt="iconimg"></img>
                </div>

                <h3 class="card-title">Engineer Consulation</h3>

                <div class="card-btn">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

              </Link>
            </li>

            <li>
              <Link to={'/mason'}  class="features-card">

                <div class="card-icon">
                  <img src="https://th.bing.com/th/id/OIP.Fo_zBrbMI0XWAhaOXqsg1QHaHa?rs=1&pid=ImgDetMain" alt="iconimg"></img>
                </div>

                <h3 class="card-title">Mason consultation</h3>

                <div class="card-btn">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

              </Link>
            </li>

            <li>
              <Link to={'/legalservices'} class="features-card">

                <div class="card-icon">
                  <img src="https://th.bing.com/th/id/OIP.vDf41ubAq7i62OjVknJapwHaHa?rs=1&pid=ImgDetMain" alt="iconimg"></img>
                </div>

                <h3 class="card-title">Legal Services</h3>

                <div class="card-btn">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

              </Link>
            </li>

          </ul>

        </div>
      </section>);}

export default Features;