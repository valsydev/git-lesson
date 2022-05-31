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

$('.hillel_open').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('hillel_open_active');
  $('.info_hillel').toggleClass('info_hillel_active');
});

$('.wannabiz_open').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('wannabiz_open_active');
  $('.info_wannabiz').toggleClass('info_wannabiz_active');
});

$('.tapgerine_open').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('tapgerine_open_active');
  $('.info_tapgerine').toggleClass('info_tapgerine_active');
});

$('.3dlook_open').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('3dlook_open_active');
  $('.info_3dlook').toggleClass('info_3dlook_active');
});

$('.adtelligent_open').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('adtelligent_open_active');
  $('.info_adtelligent').toggleClass('info_adtelligent_active');
});

$('.clikky_open').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('clikky_open_active');
  $('.info_clikky').toggleClass('info_clikky_active');
});