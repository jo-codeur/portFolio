const nav = document.querySelector('nav');
const link = document.querySelector('.nav-link');


window.addEventListener('scroll', () => {
  if(window.scrollY > 500) {
    nav.classList.add('scroll');
  }
  else {
    nav.classList.remove('scroll');
  }
})



//translate effect

$(document).ready(function(){
  $(window).on('scroll', function () {
  
  var elmt   = $('.from-left, .from-right');
  var topImg = $('.from-left, .from-right').offset().top;
  var scroll = $(window).scrollTop();
  
      $(elmt).each(function() {
          
          var topImg = $(this).offset().top - 300;
          
              if ( topImg < scroll ) {
              
              $(this).css("transform", "translate(0,0)");
              $(this).css("opacity", "1");
              
              };
      });
  });
});