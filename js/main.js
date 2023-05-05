const search = document.querySelector(".search");
const searchBtn = document.querySelector("#search");
const navbar = document.querySelector(".navbar");
const navbarBtn = document.querySelector("#menu-bar")


searchBtn.addEventListener("click",function(e){
    search.classList.toggle("active");
})
navbarBtn.addEventListener("click",function(){
    navbar.classList.toggle("active")
})