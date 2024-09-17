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

// email-validation

const contactForm = document.querySelector('.contact-me');
const warning = document.querySelector('.email-validation');
const projectSection = document.querySelector('#mid');
const popUp = document.querySelector('.pop-up-window');

contactForm.addEventListener('submit', (e) => {
  const enteredEmail = document.querySelector('#e-mail').value;
  if (enteredEmail.toLowerCase() !== enteredEmail) {
    e.preventDefault();
    warning.classList.add('active');
    warning.innerHTML = 'kindly write your email in lower case letters';
  } else {
    contactForm.submit();
  }
});

const myProjects = [
  {
    Live: 'https://tonnytech.github.io/Music-concert-landing-page/src/',
    Repo: 'https://github.com/tonnytech/Music-concert-landing-page',
    imageBig: './images/Snapshoot-Portfolio.png',
    title: 'Music concert landing page',
    client: 'FREELANCE',
    position: 'Front End Dev',
    year: '2023',
    description: 'This is a landing page for a music festival website build using tailwind css. The focus is on design.',
    skills: ['html', 'Tailwind Css', 'javascript'],
    divOneId: 'second-page',
    divTowId: 'grid-one',
    divThreeId: 'grid-two',
    direction: 'left',
  },
  {
    Live: 'https://6423846ac26b5b1f0ecbe550--glistening-biscuit-1940a3.netlify.app/',
    Repo: 'https://github.com/tonnytech/BookStore',
    imageSmall: './images/project2.png',
    imageBig: './images/Snapshoot-Portfolio-two.png',
    title: 'BookStore CMS',
    client: 'Microverse',
    position: 'Front End Dev',
    year: '2023',
    description: ' Book Store is a React application developed using React and Redux. I used create-react-app and redux-toolkit tools for development.A user can add a book to the App and update their reading progress, which will be persisted in an API.',
    skills: ['html', 'css', 'javascript'],
    divOneId: 'third-page',
    divTowId: 'grid-three',
    divThreeId: 'grid-four',
    direction: 'right',
  },
  {
    Live: 'https://web-metrics.netlify.app/',
    Repo: 'https://github.com/tonnytech/Metrics-webapp',
    imageSmall: './images/project3.png',
    imageBig: './images/Snapshoot-Portfolio-three.png',
    title: 'Countries Mobile website',
    client: 'Microverse',
    position: 'Front End Dev',
    year: '2023',
    description: 'A mobile website that gets countries data from an API and displays them in a page.',
    skills: ['React', 'Redux', 'Javascript'],
    divOneId: 'fourth-page',
    divTowId: 'grid-five',
    divThreeId: 'grid-six',
    direction: 'left',
  },
  {
    Live: 'https://tonnytech.github.io/To-do-list-with-webpack/dist/',
    Repo: 'https://github.com/tonnytech/To-do-list-with-webpack',
    imageSmall: './images/project4.png',
    imageBig: './images/Snapshoot-Portfolio-four.png',
    title: 'To Do List',
    client: 'Microverse',
    position: 'Front End Dev',
    year: '2023',
    description: 'This is a To-Do list website that enables the user to list the tasks. It is possible to add, edit, and delete each task.',
    skills: ['html', 'css', 'javascript'],
    divOneId: 'page-five',
    divTowId: 'grid-seven',
    divThreeId: 'grid-eight',
    direction: 'right',
  },
];

const displayProjects = ({
  imageBig, title, client, position, year, description, skills,
  divOneId, divTowId, divThreeId, direction,
}, index) => {
  const div = document.createElement('div');

  div.className = 'left-block';
  div.id = `${divOneId}`;
  div.innerHTML = `
<div class="primary-image" id="${divTowId}">
                <img src="${imageBig}" alt="photo_of_my_projects" class="for-small-size">
                <img src="${imageBig}" alt="Snapshoot_portfolio" class="for-big-size">
            </div>

            <div id="${divThreeId}" class="${direction}">
                <div class="title">
                    <h1>${title}</h1>
                </div>
                <div class="frame-2">
                    <ul>
                        <li>${client}</li>
                        <li>${position}</li>
                        <li>${year}</li>
                    </ul>
                </div>
                <p class="primary-text"> ${description} </p>
                <div class="tags"> 
                    <ul>
                        <li>${skills[0]}</li>
                        <li>${skills[1]}</li>
                        <li>${skills[2]}</li>
                    </ul>
                </div>
               <button class="action" id='${index}'>See project</button>
            </div>
`;
  return (div);
};

const displayProjectItems = ({
  title, imageBig, client, position, year, description, Live, Repo, skills,
}) => {
  const div = document.createElement('div');
  div.className = 'pop-window';
  div.innerHTML = `
  <div class="pop-head">
            <h2>${title}</h2>
            <button class="fa fa-close" id="closeBtn" style="font-size:24px">&times;</button>
        </div>
        <ul class="pop-tags">
            <li class="canopy">${client}</li>
            <li>${position}</li>
            <li>${year}</li>
        </ul>
        <div class="pop-body">
          
          <img class="pop-photo" src=${imageBig} alt=" " />
            
            <div class="desc-and-tech">
                <div class="pop-description">
                        <p>${description}
                        </p>
                </div>
                <div class="tech-and-buttons">
                    <div class="pop-tech-container">
                        <ul class="pop-tech">
                          <li>${skills[0]}</li>
                          <li>${skills[1]}</li>
                          <li>${skills[2]}</li>
                        </ul>
                        <hr>
                        <div class="pop-button">
                        <button><a href="${Live}">See Live</a></button>
                        <button><a href="${Repo}">See Source</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `;

  return div;
};

const getProjects = () => {
  myProjects.forEach((project, index) => {
    projectSection.append(displayProjects(project, index));
  });
};

const addClosebtnEvent = () => {
  document.querySelector('#closeBtn').addEventListener('click', () => {
    popUp.classList.remove('showPopup');
    popUp.innerHTML = '';
  });
};

window.onload = () => {
  document.querySelectorAll('.action').forEach((button) => button.addEventListener('click', () => {
    const item = myProjects[button.id];
    popUp.append(displayProjectItems(item));
    popUp.classList.add('showPopup');
    addClosebtnEvent();
  }));
};
getProjects();
