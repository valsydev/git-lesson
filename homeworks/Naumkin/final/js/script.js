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

$('.cases_hillel').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('cases_hillel_active');
  $('.info_hillel').toggleClass('info_hillel_active');
});

$('.cases_wannabiz').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('cases_wannabiz_active');
  $('.info_wannabiz').toggleClass('info_wannabiz_active');
});

$('.cases_tapgerine').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('cases_tapgerine_active');
  $('.info_tapgerine').toggleClass('info_tapgerine_active');
});

$('.cases_3dlook').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('cases_3dlook_active');
  $('.info_3dlook').toggleClass('info_3dlook_active');
});

$('.cases_adtelligent').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('cases_adtelligent_active');
  $('.info_adtelligent').toggleClass('info_adtelligent_active');
});

$('.cases_clikky').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('cases_clikky_active');
  $('.info_clikky').toggleClass('info_clikky_active');
});