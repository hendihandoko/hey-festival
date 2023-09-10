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

document.addEventListener("DOMContentLoaded", () => {
  const openModalDivs = document.querySelectorAll(".open-modal-link"); // Update this selector
  const closeModalButtons = document.querySelectorAll(".close-modal-btn");
  const modals = document.querySelectorAll(".modal");

  openModalDivs.forEach((div) => {
    // Change variable name to openModalDivs
    div.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default link behavior
      const modalId = div.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      modal.style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

//Daily Pass and 3 Day Pass Script
const dailyPass = document.getElementById("dailyPass");
const threeDayPass = document.getElementById("threeDayPass");
const dailyPassContent = document.getElementById("dailyPassContent");
const threeDayPassContent = document.getElementById("threeDayPassContent");

dailyPass.addEventListener("click", () => {
  dailyPass.classList.add("clicked");
  threeDayPass.classList.remove("clicked");
  dailyPassContent.style.display = "flex";
  threeDayPassContent.style.display = "none";
});

threeDayPass.addEventListener("click", () => {
  threeDayPass.classList.add("clicked");
  dailyPass.classList.remove("clicked");
  dailyPassContent.style.display = "none";
  threeDayPassContent.style.display = "flex";
});
