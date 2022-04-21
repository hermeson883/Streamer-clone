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

var movie = document.getElementsByClassName('paralax');
var menu = document.getElementsByClassName("menu");
const toggle = document.querySelectorAll("login")
new simpleParallax(movie, {
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
    overflow: false,
    scale: "1.2",
})


function reveal(){
    ScrollReveal().reveal('.movies1, .home, .swiper, #plans, #footer', {reset: true}, {delay: 500});
}


reveal()
