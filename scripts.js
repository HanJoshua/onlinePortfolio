const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

var images = ["mee.jpg","mii.JPG", "mi.jpg", "im.JPG"]; // Array of image file names
var currentIndex = 0;
var slideshowElement = document.getElementById("slideshow");

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshowElement.src = images[currentIndex];
}

setInterval(nextImage, 1900); // Change image every 2 seconds

$("h3").each(function (index, element) {
  var animation = TweenMax.to(this, 0.2, {
    className: "+= superShadow",
    marginTop: "-10px",
    marginBottom: "10px",
    ease: Power1.easeIn,
    paused: true,
  });
  element.animation = animation;
});

$("h3").hover(
  function () {
    this.animation.play();
  },
  function () {
    this.animation.reverse();
  }
);

function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

