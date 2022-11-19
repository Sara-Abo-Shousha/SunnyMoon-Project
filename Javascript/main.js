var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch:3,
    depth:100,
    modifier: 6,
  },
  pagination: {
    el: ".swiper-pagination",
  },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      },
    }
    
    
  });
  
  function next() {

        document.getElementById("img").classList.remove("normal");
        document.getElementById("img").classList.add("img");
        document.getElementById("img2").classList.remove("normal2");
        document.getElementById("img2").classList.add("img2");
       
      }
      
      
      
    
    const hamburger= document.querySelector(".hamburger");
    const navMenu= document.querySelector(".nav-menu");
    const ham1= document.getElementById("hamburger-icon")
    hamburger.addEventListener("click", ()=>{
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
      ham1.classList.toggle("open");

    });
    function tab(){
      navMenu.classList.toggle("active");
      ham1.classList.toggle("open");
    }
   

    function submt(){
      //  document.getElementById("frm").classList.add("onsbmt");
        document.getElementById("frm").classList.add("disapper");

        document.getElementById("tnku").classList.remove("tnku");
    }
    function submt1(){
      document.getElementById("frm1").classList.add("onsbmt");
      document.getElementById("crt2").classList.add("onsbmt");

      document.getElementById("tnku2").classList.remove("tnku");
     

  }
    