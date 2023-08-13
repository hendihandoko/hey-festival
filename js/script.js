// Toggle class active
const navbarNav = document.querySelector(".navbar-nav"); //untuk mencari elemen yang nama classnya navbar-nav
const links = navbarNav.querySelectorAll("a");

//ketika hamburger menu di klik
document.querySelector("#check").onclick = () => {
  navbarNav.classList.toggle("active");
  links.forEach((link, index) => {
    link.style.opacity = "0";
    link.style.transform = "translateY(-20px)"; // Start from above
    link.style.transition = "none";
    setTimeout(() => {
      link.style.transition =
        "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
      link.style.opacity = "1";
      link.style.transform = "none";
    }, index * 100); // Apply a delay based on the index to stagger the effect
  });
};

//Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
