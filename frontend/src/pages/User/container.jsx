import './services.css'

function Container(){
  function openWhatsApp() {

    let phoneNumber = '6009396197';
    let message = encodeURIComponent('Hello! I would like to inquire about...');
    let whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink);
  }

  return(

      <section class="cta">
        <div class="container">

          <div class="cta-card">
            <div class="card-content">
              <header class="py-10  text-center">
                <div class="container mx-auto px-4">
                  <h1 class="text-5xl font-bold text-white mb-4">👋 Hey there! Are you looking for a home? </h1>
                  <p class="mt-2 text-lg text-gray-200">Come here and contact us...</p>
                </div>

              </header>
              <button class="btn cta-btn" onClick={openWhatsApp}>
                <span>CONTACT US</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>

            </div>


          </div>


        </div>

      </section>





  );
}

export default Container;