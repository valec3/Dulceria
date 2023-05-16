const search = document.querySelector(".search");
const searchBtn = document.querySelector("#search");
const navbar = document.querySelector(".navbar");
const navbarBtn = document.querySelector("#menu-bar")


searchBtn.addEventListener("click",function(e){
    search.classList.toggle("active");
    searchBtn.classList.toggle("fa-bounce");
})
navbarBtn.addEventListener("click",function(){
    navbar.classList.toggle("active")
    navbarBtn.classList.toggle("fa-times");
})

window.addEventListener("scroll",(event)=>{
    // Remove menu scrolling
    navbar.classList.remove("active"); //Menu hamburguesa
    navbarBtn.classList.remove("fa-times");
})


const swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});