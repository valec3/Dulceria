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