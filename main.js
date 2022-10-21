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

const projects = [
  {
    id: 'first',
    title:{
      big: 'Tonic',
      small: 'Tonic'
    },
    tags:{
      big: ['Canopy', 'Back End dev', '2015'],
      small: ['Canopy', 'Back End dev', '2015'],
    }, 
    img: {
      big: ['./images/project1.png', 'Facebook 360 project preview'],
      small: ['./images/project1.png', 'Facebook 360 project preview'],
    },
    description:{
      big: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      small: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    },
    technologies:{
      big: ['HTML', 'CSS', 'Ruby on Rails'],
      small: ['HTML', 'CSS', 'Ruby on Rails'],
    },      
    links: {
      big: ['https://github.com', 'https://heroku.com'],
      small: ['https://github.com', 'https://heroku.com'],
    },
  },

  {
    id: 'first',
    title:{
      big: 'Tonic',
      small: 'Tonic'
    },
    tags:{
      big: ['Canopy', 'Back End dev', '2015'],
      small: ['Canopy', 'Back End dev', '2015'],
    }, 
    img: {
      big: ['./images/project1.png', 'Facebook 360 project preview'],
      small: ['./images/project1.png', 'Facebook 360 project preview'],
    },
    description:{
      big: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      small: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    },
    technologies:{
      big: ['HTML', 'CSS', 'Ruby on Rails'],
      small: ['HTML', 'CSS', 'Ruby on Rails'],
    },      
    links: {
      big: ['https://github.com', 'https://heroku.com'],
      small: ['https://github.com', 'https://heroku.com'],
    },
  },

  {
    id: 'first',
    title:{
      big: 'Tonic',
      small: 'Tonic'
    },
    tags:{
      big: ['Canopy', 'Back End dev', '2015'],
      small: ['Canopy', 'Back End dev', '2015'],
    }, 
    img: {
      big: ['./images/project1.png', 'Facebook 360 project preview'],
      small: ['./images/project1.png', 'Facebook 360 project preview'],
    },
    description:{
      big: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      small: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    },
    technologies:{
      big: ['HTML', 'CSS', 'Ruby on Rails'],
      small: ['HTML', 'CSS', 'Ruby on Rails'],
    },      
    links: {
      big: ['https://github.com', 'https://heroku.com'],
      small: ['https://github.com', 'https://heroku.com'],
    },
  },

  {
    id: 'first',
    title:{
      big: 'Tonic',
      small: 'Tonic'
    },
    tags:{
      big: ['Canopy', 'Back End dev', '2015'],
      small: ['Canopy', 'Back End dev', '2015'],
    }, 
    img: {
      big: ['./images/project1.png', 'Facebook 360 project preview'],
      small: ['./images/project1.png', 'Facebook 360 project preview'],
    },
    description:{
      big: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      small: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    },
    technologies:{
      big: ['HTML', 'CSS', 'Ruby on Rails'],
      small: ['HTML', 'CSS', 'Ruby on Rails'],
    },      
    links: {
      big: ['https://github.com', 'https://heroku.com'],
      small: ['https://github.com', 'https://heroku.com'],
    },
  },
]

const popWindow = document.querySelector('.pop-up-window');

function windowPop(){
  projects.forEach((popArray) => {
    popWindow.innerHTML += `

      <div class="pop-window" data-target="${popArray.id}">
        <i class="fa fa-close" style="font-size:24px"> </i>
        <h2>${popArray.title.small}</h2>

        <ul class="pop-tags">
          <li class="canopy">${popArray.tags.small[0]}</li>
          <li>${popArray.tags.small[1]}</li>
          <li>${popArray.tags.small[2]}</li>
        </ul>

        <div class="pop-body">
          <img class="pop-photo" src="${popArray.img.small[0]}" alt="${popArray.img.small[1]}" />
          <div class="pop-description">
          <p>
            ${popArray.description.small}
          </p>
          <div class="pop-tech-container">
            <ul class="pop-tech">
              <li>${popArray.technologies.small[0]}</li>
              <li>${popArray.technologies.small[1]}</li>
              <li>${popArray.technologies.small[2]}</li>
              <li>${popArray.technologies.small[3]}</li>
              <li>${popArray.technologies.small[4]}</li>
              <li>${popArray.technologies.small[5]}</li>
            </ul>
            <hr>
            <div class="pop-button">
              <button href="">See Live</button>
              <button href="">See Source</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


       `;
  });
  
}

windowPop();

const popMainWindow = document.querySelector('.pop-up-window');
const mainWindow = document.querySelectorAll('.pop-window');

document.querySelectorAll('.action').forEach((action) => {
  action.onclick = () => {
    popMainWindow.style.display = 'flex';

    const name = action.getAttribute('data-name');

    mainWindow.forEach((main)=> {
      const target = main.getAttribute('data-target');
      
      if (name === target) {
        main.classList.add('active');
      }
    });
  };
});

mainWindow.forEach((close) => {
  close.querySelector('fa-close').onclick = () => {
  close.classList.remove('active')
  popMainWindow.style.display = 'none';
  };
});
