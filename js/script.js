let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");
let scrollTop = document.querySelector(".scrollTop");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  scrollTop.classList.toggle("active", window.scrollY);
};
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};