document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false, // Disable looping
    navigation: {
      nextEl: ".mySwiper-button-next", // Use a unique class for next button
      prevEl: ".mySwiper-button-prev", // Use a unique class for prev button
    },
    breakpoints: {
      450: {
        slidesPerView: 3,
      }
    }
  });

  if (window.screen.width > 450) {
    var mySwiperClickCount = 0;
    var maxMySwiperClicks = 3;
  
    function updateMySwiperNextButton() {
      var nextButton = document.querySelector(".mySwiper-button-next");
  
      // Check both click count and active index
      if (mySwiperClickCount == maxMySwiperClicks) {
        nextButton.classList.add("swiper-button-disabled"); // Add disabled styling
      } else {
        nextButton.classList.remove("swiper-button-disabled"); // Remove disabled styling
      }
    }
  
    document
      .querySelector(".mySwiper-button-next")
      .addEventListener("click", function () {
        mySwiperClickCount++;
        updateMySwiperNextButton();
      });
  
    document
      .querySelector(".mySwiper-button-prev")
      .addEventListener("click", function () {
        mySwiperClickCount = mySwiperClickCount - 1;
        updateMySwiperNextButton();
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".ticketSwiper", {
    slidesPerView: 2.1,
    spaceBetween: -30,
    slidesPerGroup: 1,
    loop: false, // Disable looping
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var newsSwiper = new Swiper(".newsSwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false, // Disable looping
    navigation: {
      nextEl: ".newsSwiper-button-next", // Use a unique class for next button
      prevEl: ".newsSwiper-button-prev", // Use a unique class for prev button
    },
    breakpoints: {
      450: {
        slidesPerView: 3,
      }
    }
  });

  if (window.screen.width > 450) {
    var newsSwiperClickCount = 0;
    var maxNewsSwiperClicks = 3;
  
    function updateNewsSwiperNextButton() {
      var nextButton = document.querySelector(".newsSwiper-button-next");
  
      // Check both click count and active index
      if (newsSwiperClickCount == maxNewsSwiperClicks) {
        nextButton.classList.add("swiper-button-disabled"); // Add disabled styling
      } else {
        nextButton.classList.remove("swiper-button-disabled"); // Remove disabled styling
      }
    }
  
    document
      .querySelector(".newsSwiper-button-next")
      .addEventListener("click", function () {
        newsSwiperClickCount++;
        updateNewsSwiperNextButton();
      });
  
    document
      .querySelector(".newsSwiper-button-prev")
      .addEventListener("click", function () {
        newsSwiperClickCount = newsSwiperClickCount - 1;
        updateNewsSwiperNextButton();
      });
  }
});
