const nav = document.querySelector('nav');
const link = document.querySelector('.nav-link');

// white menu when window scroll 500px

window.addEventListener('scroll', () => {
  if(window.scrollY > 500) {
    nav.classList.add('scroll');
  }
  else {
    nav.classList.remove('scroll');
  }
})



//translate effect all section's blocs

$(document).ready(function(){
  $(window).on('scroll', function () {
  
  var elmt   = $('.from-left, .from-right, .from-top');
  var topImg = $('.from-left, .from-right, .from-top').offset().top;
  var scroll = $(window).scrollTop();
  
      $(elmt).each( function () {
          
          var topImg = $(this).offset().top - 200;
          
              if ( topImg < scroll ) {
              
              $(this).css("transform", "translate(0,0)");
              $(this).css("opacity", "1");
              
              };
      });
  });
});


