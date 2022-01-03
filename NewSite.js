const swiper = new Swiper('.swiper', {
    // Optional parameters,
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView: 2,
        },
        568:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 4,
        },
        
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    
});