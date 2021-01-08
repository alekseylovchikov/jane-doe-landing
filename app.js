const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');
const footerYear = document.getElementById('footer-year');

footerYear.innerText = new Date().getFullYear();

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  burger.classList.toggle('toggle');
  document.querySelector('body').classList.toggle('no-scroll');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
    document.querySelector('body').classList.remove('no-scroll');
  });
});
