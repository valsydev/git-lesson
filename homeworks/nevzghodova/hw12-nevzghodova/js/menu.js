$(document).ready(function() {
    $('.burger-menu').click(function() {
        $('.burger-menu').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.burger-menu').click(function() {
        $('.nav__burger').toggleClass('nav-active');
    });
});

$(document).ready(function(){
    $('.hillel').click(function(){
      $('.onclick-block-hillel').toggle();
        $(".onclick-block-wannabiz,.onclick-block-tapgerine,.onclick-block-look,.onclick-block-adtelligent,.onclick-block-clikky").hide();
      });
});
$(document).ready(function(){
    $('.wannabiz').click(function(){
      $('.onclick-block-wannabiz').toggle();
        $(".onclick-block-hillel,.onclick-block-tapgerine,.onclick-block-look,.onclick-block-adtelligent,.onclick-block-clikky").hide();
      });
});

$(document).ready(function(){
    $('.tapgerine').click(function(){
      $('.onclick-block-tapgerine').toggle();
        $(".onclick-block-hillel,.onclick-block-wannabiz,.onclick-block-look,.onclick-block-adtelligent,.onclick-block-clikky").hide();
      });
});

$(document).ready(function(){
    $('.look').click(function(){
      $('.onclick-block-look').toggle();
        $(".onclick-block-hillel,.onclick-block-wannabiz,.onclick-block-tapgerine,.onclick-block-adtelligent,.onclick-block-clikky").hide();
      });
});

$(document).ready(function(){
    $('.adtelligent').click(function(){
      $('.onclick-block-adtelligent').toggle();
        $(".onclick-block-hillel,.onclick-block-wannabiz,.onclick-block-tapgerine,.onclick-block-look,.onclick-block-clikky").hide();
      });
});

$(document).ready(function(){
    $('.clikky').click(function(){
      $('.onclick-block-clikky').toggle();
        $(".onclick-block-hillel,.onclick-block-wannabiz,.onclick-block-tapgerine,.onclick-block-look,.onclick-block-adtelligent").hide();
      });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1
  });
});