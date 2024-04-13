import React from 'react';
import Navigation from "../Auth/Navigation.jsx";
import Footer from "../User/Footer.jsx";
function interior() {
    function sendWhatsAppMessage() {

        const message = encodeURIComponent("Hi, I am interested in your Interior services. Can you provide more information?");


        window.open(`https://wa.me/916009396197?text=${message}`, '_blank');
    }

    return (
      <div>
          <Navigation/>
      <section >

<div class="overflow-hidden bg-white py-24 sm:py-32">
<div class="mx-auto max-w-7xl px-6 lg:px-8">
<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
 <div class="lg:pr-8 lg:pt-4">
   <div class="lg:max-w-lg">
     <h2 class="text-base font-semibold leading-7 text-green-600">Join Us</h2>
     <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your vision, our passion</p>
     <p class="mt-6 text-lg leading-8 text-gray-600">
"Design is not just what it looks like, it's how it feels. Let us craft spaces that resonate with your soul and tell your unique story."</p>
     <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
       <div class="relative pl-9">
         <dt class="inline font-semibold text-gray-900 underline decoration-sky-500">
           <svg class="absolute left-1 top-1 h-5 w-5 text-red-600 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
           </svg>
           Best interior design:
         </dt>
         <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
       </div>
       <div class="relative pl-9">
         <dt class="inline font-semibold text-gray-900 underline decoration-sky-500">
           <svg class="absolute left-1 top-1 h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
           </svg>
           Best facilities:
         </dt>
         <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
       </div>
       <div class="relative pl-9">
         <dt class="inline font-semibold text-gray-900 underline decoration-sky-500">
           <svg class="absolute left-1 top-1 h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
             <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
           </svg>
           Better opportunities:
         </dt>
         <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
       </div>
       <div class="relative pl-9">
         <dt class="inline font-semibold text-gray-900 ">
           <svg class="absolute left-1 top-1 h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
             <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
           </svg>
           Enquire US on....<section>
             

<button class="bg-green-700 mx-20 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg" onClick={sendWhatsAppMessage}>
contact us on whatsapp
</button>
           </section>
         </dt>
        
       </div>
     </dl>
   </div>
 </div>
 <img class="h-56 lg:h-60 w-full object-cover bg-gray shadow-xl shadow-gray-500/50" src="https://renopedia.sg/wp-content/uploads/2017/03/5-tips-to-design-the-best-interior-wall-designs2.jpg" alt="" />
</div>
</div>
</div>


      </section>


<section class="h-screen w-screen bg-gray-50 p-8 ">
<h1 class="text-center font-bold text-5xl text-black"><strong>our offers</strong> </h1>

<div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">

   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class=" h-56 lg:h-60 w-full object-cover" src="https://th.bing.com/th/id/OIP.0a2TAV6PkgM9yISqbBLEgAHaE8?rs=1&pid=ImgDetMain" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           Creating exceptional interiors that resonate with your lifestyle
           </h3>
           <p class="paragraph-normal text-gray-600">
          
           </p>
           <a class="mt-3 block" href="#"></a>
       </div>
   </div>

   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://i0.wp.com/www.lifestylefancy.com/wp-content/uploads/2014/07/Acerbis-NC-Case-324.jpg?resize=640%2C640" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           Creating exceptional interiors that resonate with your lifestyle
           </h3>
           <p class="paragraph-normal text-gray-600">
           Happy Women's Day 2022: Read on to know all about the history and significance...
           </p>
           <a class="mt-3 block" href="#"></a>
       </div>
   </div>


   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://th.bing.com/th/id/OIP.RNN63IrqJPfhuQGrpaFBMAHaFS?rs=1&pid=ImgDetMain" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           "Transforming houses into homes, one design at a time."

           </h3>
           <p class="paragraph-normal text-gray-600">
           
           </p>
           <a class="mt-3 block" href="#"></a>
       </div>
   </div>


   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://th.bing.com/th/id/OIP.-R33qKpt1c1WvT6F6juFKgHaFj?w=560&h=420&rs=1&pid=ImgDetMain" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           "Experience the harmony of aesthetics and comfort in every corner."

           </h3>
           <p class="paragraph-normal text-gray-600">
           "Creating exceptional interiors that resonate with your lifestyle."

           </p>
           <a class="mt-3 block" href="#"></a>
       </div>
   </div>

   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://cdn.shopify.com/s/files/1/1254/0125/products/jangeorge-interior-design-b_b-italia-pab-wall-system-216.jpg?v=1569286035" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           "Your vision, our passion - let's design spaces that reflect your personality."

           </h3>
           <p class="paragraph-normal text-gray-600">
           
           </p>
           <a class="mt-3 block" href="#"></a>
       </div>
   </div>


   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://th.bing.com/th/id/OIP.3-VXwhNgz1B5fxsPhWz0UAHaFj?w=733&h=550&rs=1&pid=ImgDetMain" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           "Elevate your living experience with our exquisite designs."

           </h3>
           <p class="paragraph-normal text-gray-600">
          
           </p>
           <a class="mt-3 block" href="#"></a>
       </div>
   </div>
</div>

</section>



   </div>
    );
}

export default interior;
