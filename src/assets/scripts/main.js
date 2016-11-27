$(document).ready(function(){

  var servicesBackground = $('.services').css('background-image');
  var samuraiParallax = 900;
  var phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/gi;
  var formFlag = false;
  $('.service').each(function(){
    $(this).on('mouseenter',function(){
      $('.services').css('background-image',$(this).css('background-image'));
    });
    $(this).mouseleave(function(){
       $('.services').css('background-image',servicesBackground);
    });
  });

  $('.philosophy').on('mousemove',function(){
      samuraiParallax -= 0.3;
    $(this).css('background-position',samuraiParallax + 'px,center');
   console.log(samuraiParallax);
  });

  $('.nav-toggle').on('click',function(e){
    e.preventDefault();
    $('nav').toggleClass('toggle-nav');
  });

  $('form button').on('click',function(e) {
    e.preventDefault();
    var phoneValue = $('input[type="number"]').val(); 
    if (phoneValue.match(phoneRegex) && $('input').val().length > 0) {
      $('.contact-form h1,.contact-form h3').fadeOut(500);
      $('form').before('<h1> Thank you </h1>');
      $('form').animate({opacity: 0});
    }else {
      $('form').toggleClass('form-shake');
    }
  });
});