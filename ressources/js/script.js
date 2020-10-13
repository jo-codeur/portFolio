const nav = document.querySelector('nav');


window.addEventListener('scroll', () => {
  if(window.scrollY > 500) {
    nav.classList.add('scroll');
  }
  else {
    nav.classList.remove('scroll');
  }
})