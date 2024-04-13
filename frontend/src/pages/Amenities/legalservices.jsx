import React from 'react';
import Navigation from "../Auth/Navigation.jsx";
import Footer from "../User/Footer.jsx";

function legalservices() {
    function sendWhatsAppMessage() {

        const message = encodeURIComponent("Hi, I am interested in your legal services. Can you provide more information?");


        window.open(`https://wa.me/916009396197?text=${message}`, '_blank');
    }

    return (
      <div>
          <Navigation/>
      <section>
      
<div class="overflow-hidden bg-white py-24 sm:py-32">
<div class="mx-auto max-w-7xl px-6 lg:px-8">
<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
 <div class="lg:pr-8 lg:pt-4">
   <div class="lg:max-w-lg">
     <h2 class="text-base font-semibold leading-7 text-green-600">Join Us</h2>
     <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></p>
     <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Striving for justice, one case at a time</p>

    
     <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
       <div class="relative pl-9">
         <dt class="inline font-semibold text-gray-900  underline decoration-sky-500">
           <svg class="absolute left-1 top-1 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
           </svg>
           Better legal services:
         </dt>
         <dd class="inline">"In the complex maze of laws, we are your guiding light. Trust in our expertise to navigate legal challenges and safeguard your rights."</dd>
       </div>
       <div class="relative pl-9">
         <dt class="inline font-semibold text-gray-900  underline decoration-sky-500">
           <svg class="absolute left-1 top-1 h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
           </svg>
          Best legal advisors:
         </dt>
         <dd class="inline">"Expert legal counsel tailored to your unique needs and circumstances."</dd>
       </div>
       <div class="relative pl-9">
         <dt class="inline font-semibold text-gray-900  underline decoration-sky-500">
           <svg class="absolute left-1 top-1 h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
             <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
           </svg>
           Best lawyers:
         </dt>
         <dd class="inline">"Navigating legal challenges with clarity, compassion, and expertise."
</dd>
       </div>
       <div class="relative pl-9">
         <dt class="inline font-semibold text-gray-900">
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
 <img class="h-56 lg:h-60 w-full object-cover bg-gray shadow-xl shadow-gray-500/50" src="https://th.bing.com/th/id/OIP.GxkSKNz1bRGNgFPvvON9VgHaE7?rs=1&pid=ImgDetMain" alt="" />
</div>
</div>
</div>


      </section>


<section class="h-screen w-screen bg-gray-50 p-8 ">
<h1 class="text-center font-bold text-5xl text-black"><strong>our offers</strong> </h1>

<div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">

   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class=" h-56 lg:h-60 w-full object-cover" src="https://th.bing.com/th/id/OIP.EaAUuLomRsV58LORrafxHgHaET?rs=1&pid=ImgDetMain" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           Navigating legal complexities with expertise and empathy
           </h3>
           <p class="paragraph-normal text-gray-600">
          
           </p>
           <a class="mt-3 block" href="#">Read More </a>
       </div>
   </div>

   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://img77.uenicdn.com/image/upload/v1580884050/category/shutterstock_1592084062.jpg" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           Your trusted ally in legal matters, every step of the way.
           </h3>
           <p class="paragraph-normal text-gray-600">
           
           </p>
           <a class="mt-3 block" href="#">Read More </a>
       </div>
   </div>


   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://th.bing.com/th/id/OIP.7b932l6_Gf0sZj5VaTxKxAHaE8?w=768&h=512&rs=1&pid=ImgDetMain" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           Empowering you with knowledge and advocacy in the legal arena
           </h3>
           <p class="paragraph-normal text-gray-600">
           
           </p>
           <a class="mt-3 block" href="#">Read More </a>
       </div>
   </div>


   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://th.bing.com/th/id/OIP.pnmtlQF-UshX3POZBUf1SgHaE8?w=1024&h=683&rs=1&pid=ImgDetMain" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           Securing your peace of mind through sound legal advice
           </h3>
           <p class="paragraph-normal text-gray-600">

           </p>
           <a class="mt-3 block" href="#">Read More </a>
       </div>
   </div>

   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://hirejared.com/wp-content/uploads/2023/09/personal-injury-cases-with-in-depth-examination-of-costs-1.png" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           Securing your peace of mind through sound legal advice
           </h3>
           <p class="paragraph-normal text-gray-600">
          
           </p>
           <a class="mt-3 block" href="#">Read More </a>
       </div>
   </div>


   <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
       <img class="h-56 lg:h-60 w-full object-cover" src="https://foodsafetyhelpline.com/wp-content/uploads/2023/03/Food-Safety-and-Standards-Second-Amendment-Regulations-2023.jpg" alt="" />
       <div class="p-3">
           <span class="text-sm text-primary"></span>
           <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
           Your legal journey begins here, with integrity and professionalism
           </h3>
           <p class="paragraph-normal text-gray-600">
           
           </p>
           <a class="mt-3 block" href="#">Read More </a>
       </div>
   </div>
</div>

</section>



   </div>
    );
}

export default legalservices;
