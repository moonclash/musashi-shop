$(document).ready(function(){

  var servicesBackground = $('.services').css('background-image');
  $('.service').each(function(){
    $(this).on('mouseenter',function(){
      $('.services').css('background-image',$(this).css('background-image'));
    });
    $(this).mouseleave(function(){
       $('.services').css('background-image',servicesBackground);
    });
  });
});