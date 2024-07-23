//to toggle the navbar menu on mobile
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  navbarToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });
});
