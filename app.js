// var header = document.getElementById("header");
// var navbar = document.getElementById("navbar");
// var menuBtn = document.getElementById("menu-btn");
// var closeNavbar = document.getElementById("close-navbar");

// function menuBtn() {
//     navbar.classList.add("active");
// }

// function closeBtn() {
//     navbar.classList.add("active");
// }

var navbar = document.querySelector(".header .navbar");
var menuBtn = document.querySelector("#menu-btn");
var closeBtn = document.querySelector("#close-navbar");

menuBtn.onclick = () => {
  navbar.classList.add("active");
};

closeBtn.onclick = () => {
  navbar.classList.remove("active");
};

window.onclick = () => {
  navbar.classList.remove("active");
};
