$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("nav").addClass("scroll-down");
    } else {
        $("nav").removeClass("scroll-down");
    }
});
        
        
$(document).ready(function() {

  $('.set-1').addClass('chip')
  $('.set-2').addClass('chip')
  $('.set-3').addClass('chip')
  $('.set-4').addClass('chip')
  $('.set-5').addClass('chip')
  $('a[rel=tag]').addClass('chip')
  $('.post-tags').html().replace(/, /g , '')
});


