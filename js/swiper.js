document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false, // Disable looping
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var clickCount = 0;
  var maxClicks = 3;

  function updateNextButton() {
    var nextButton = document.querySelector(".swiper-button-next");

    // Check both click count and active index
    if (clickCount == maxClicks) {
      nextButton.classList.toggle("swiper-button-disabled"); // Add disabled styling
    } else {
      nextButton.classList.remove("swiper-button-disabled"); // Remove disabled styling
    }
  }

  document
    .querySelector(".swiper-button-next")
    .addEventListener("click", function () {
      clickCount++;
      updateNextButton();
    });

  document
    .querySelector(".swiper-button-prev")
    .addEventListener("click", function () {
      clickCount = clickCount - 1;
      updateNextButton();
    });
});
