//get the current year and put it in the footer
var year = new Date();
$("#year").text(year.getFullYear());


//parallax scrolling effect using the plug in stellar.js
$(window).stellar();



//dropdown Functionality
$("#dropDown").hide();

$("#ddTriger").mouseover(function(){
    $("#dropDown").slideDown(500);
});

$("#dropDown").mouseleave(function(){
    $("#dropDown").slideUp(500);
});



//accordion text
$('.ui.accordion').accordion();



//smooth scrolling credit to css-tricks.com
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
