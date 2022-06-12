$(document).ready(function () {
  const nav = $(".nav");
  const menuIcon = $(".hamburger-menu");
  menuIcon.on("click", function () {
    nav.addClass("open");
  });
  nav.find(".close").on("click", function () {
    nav.removeClass("open");
  });
  $(".team-slider").slick({
    arrows: false,
    dots: true,
  });
});
