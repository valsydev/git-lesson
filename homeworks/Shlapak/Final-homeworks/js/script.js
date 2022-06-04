$(document).ready(function() {
    $('.burger-menu').click(function() {
        $('#nav-mobile').toggleClass('open'); 
});
});
$(document).ready(function() {
    $('.burger-menu').click(function() {
        $('.wrapper').toggleClass('wrapper-active'); 
});
});
$(document).ready(function() {
    $('.burger-menu').click(function() {
        $('.burger-menu').toggleClass('active-button'); 
});
});
$(document).ready(function() {
        $('.slider').slick({
            arrows:false,
            dots:true,
        }); 
});