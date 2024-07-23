document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  navbarToggle.addEventListener("click", function () {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });
});
