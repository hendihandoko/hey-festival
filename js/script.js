// Toggle class active
const navbarNav = document.querySelector(".navbar-nav"); //untuk mencari elemen yang nama classnya navbar-nav
const links = navbarNav.querySelectorAll("a");

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

dailyPass.addEventListener("click", () => {
  dailyPass.classList.toggle("clicked");
  threeDayPass.classList.toggle("clicked");
});

threeDayPass.addEventListener("click", () => {
  threeDayPass.classList.toggle("clicked");
  dailyPass.classList.toggle("clicked");
});
