$(document).ready(function(){

  var servicesBackground = $('.services').css('background-image');
  var samuraiParallax = 900;
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

  $('.nav-toggle').on('click',function(){
    $('nav').toggleClass('toggle-nav');
  })
});