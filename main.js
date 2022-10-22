
//Hamburger menu
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav_icon-two');
mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navList.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((nav) => nav.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  navList.classList.remove('active');
}));

// Form-validation using JS

const contactForm = document.querySelector('.contact-me');
const warning = document.querySelector('.email-validation');

contactForm.addEventListener('submit', (e) => {
  const enterdEmail = document.querySelector('#e-mail').value;
  if (enterdEmail.toLowerCase() !== enterdEmail) {
    e.preventDefault();
    warning.classList.add('active');
    warning.innerHTML = 'kindly write your email in lower case letters';
  } else {
    contactForm.submit();
  }
});