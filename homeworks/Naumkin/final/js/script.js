$('.hamburger-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('hamburger-btn_active');
  $('.hamburger-nav').toggleClass('hamburger-nav_active');
});

$(document).ready(function(){
  $('.slider').slick({
    arrows:false, 
    dots:true,
    slidesToShow:1,
    slideToScroll:1,
    speed:700   
  });
});