const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav_icon-two');
mobileMenu.addEventListener('scroll', () => {
  mobileMenu.toggle('active');
  navList.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((nav) => nav.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  navList.classList.remove('active');
}));