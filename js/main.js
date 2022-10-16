//owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  autoWidth: true,
  slideBy: 2,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
// ------------------------------------
// type writer effect
var typed = new Typed(".typeWriter", {
  strings: ["Ahmed Fathi", "Student Engineer", "Front-end Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
// -------------------------------------
// wow js
new WOW().init();
// --------------------------------------
// select
let bullets = document.querySelector(".bullets");
let bullet = document.querySelectorAll(".bullet");
let skillSec=document.getElementById("skills")
let project = document.getElementById("projects");
let contact = document.getElementById("contact");
// -------------------------------------------
for (let i = 0; i < bullet.length; i++){
  bullet[i].addEventListener("click", () => {
    for (let i = 0; i < bullet.length; i++){
      bullet[i].classList.remove("active");
    }
    bullet[i].classList.add("active")
  })
}
// -------------------------------------
function toggle () {
  document.body.classList.toggle("dark")
}
// -----------------------------
window.onscroll = () => {
  if (scrollY > 50) {
    bullets.setAttribute("style", "transform: translate(0%,50%);");
  } else {
    bullets.setAttribute("style", "transform: translate(-100%,50%);");
     for (let i = 0; i < bullet.length; i++) {
      //  bullet[i].classList.remove("active");
     }
  }
  if (window.scrollY < skillSec.offsetTop) {
    for (let i = 0; i < bullet.length; i++) {
      bullet[i].classList.remove("active");
    }
    bullet[0].classList.add("active");
  } else if (
    window.scrollY >= skillSec.offsetTop &&
    window.scrollY < project.offsetTop
  ) {
    for (let i = 0; i < bullet.length; i++) {
      bullet[i].classList.remove("active");
    }
    bullet[1].classList.add("active");
  } else if (
    window.scrollY >= project.offsetTop &&
    window.scrollY < contact.offsetTop
  ) {
    for (let i = 0; i < bullet.length; i++) {
      bullet[i].classList.remove("active");
    }
    bullet[2].classList.add("active");
  } else if (
    window.scrollY >= contact.offsetTop
  ) {
    for (let i = 0; i < bullet.length; i++) {
      bullet[i].classList.remove("active");
    }
    bullet[3].classList.add("active");
  }
}