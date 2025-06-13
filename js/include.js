// js/include.js
window.addEventListener("DOMContentLoaded", () => {
  // Inject Navbar
  fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });

  // Inject Footer
  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
