let mobileMenu= document.querySelector('.mobile-menu')
let navList = document.querySelector('.nav_icon-two')
    mobileMenu.addEventListener('click',()=> {
        mobileMenu.classList.toggle('active');
        navList.classList. toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach((nav) => nav.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navList.classList.remove('active');
      }));
      