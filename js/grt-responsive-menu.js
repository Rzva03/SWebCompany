// Create a function for mobile version
(function ($) {
  $.fn.grtmobile = function () {
    $(".grt-mobile-button").on("click", function () {
      $(this).toggleClass("grt-mobile-button-open");
      $("ul.grt-menu").toggleClass("open-grt-menu");
      // $("html, body").toggleClass("body-overflow");
    });
    $("li.grt-dropdown").on("click", function (e) {
      $(this).toggleClass("active-dropdown");
    });
  };
})(jQuery);

let liMenuMobile = document.querySelectorAll(".gtr-menu__li");
let mobileButton = document.querySelector(".grt-mobile-button");
let ulMenu = document.getElementsByClassName("ul.grt-menu");
liMenuMobile.forEach((element) => {
  element.addEventListener("click", function () {
    $(".grt-mobile-button").removeClass("grt-mobile-button-open");
    $("ul.grt-menu").removeClass("open-grt-menu");
  });
});

// Initialize and check for mobile
$.fn.grtmobile();

// Add fixed class on scroll after 60px
$(window).scroll(function (e) {
  if ($(this).scrollTop() > 60) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});
