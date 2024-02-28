const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  on: {
    slideChange: function () {
      var activeSlide = this.slides[this.activeIndex];

      if (activeSlide && activeSlide.hasAttribute("data-color")) {
        var color = activeSlide.getAttribute("data-color");

        var swiperContainer = document.querySelector(".section-slider");

        if (swiperContainer) {
          swiperContainer.style.backgroundColor = color;
        }
      }
    },
  },
});

var accordions = document.querySelectorAll(".section-shipping__accordion");

accordions.forEach(function (accordion) {
  var header = accordion.querySelector(".section-shipping__accordion-header");
  var content = accordion.querySelector(".section-shipping__accordion-content");
  var arrowIcon = accordion.querySelector(".section-shipping__arrow");

  header.addEventListener("click", function () {
    content.classList.toggle("show");

    arrowIcon.classList.toggle("rotated");

    if (content.classList.contains("show")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

function toggleMenu() {
  var menu = document.getElementById("header__menu");
  menu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

function toggleMenuAndScroll(targetId) {
  toggleMenu();
  var targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
