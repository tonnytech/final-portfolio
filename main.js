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

// email-validation

const contactForm = document.querySelector('.contact-me');
const warning = document.querySelector('.email-validation');
const projectSection = document.querySelector('#mid');
const popUp = document.querySelector('.pop-up-window');

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

const myProjects = [
  {
    imageSmall: './images/project1.png',
    imageBig: './images/Snapshoot Portfolio.png',
    title: 'Tonic',
    client: 'CANOPY',
    position: 'Back End Dev',
    year: '2015',
    description: 'Daily selection of privately personalised reads" no accounts or signups required.',
    skills: ['html', 'css', 'javascript'],
    divOneId: 'second-page',
    divTowId: 'grid-one',
    divThreeId: 'grid-two',
    direction: 'left',
  },
  {
    imageSmall: './images/project2.png',
    imageBig: './images/Snapshoot Portfolio two.png',
    title: 'Multi-post Stories',
    client: 'CANOPY',
    position: 'Back End Dev',
    year: '2015',
    description: ' Daily selection of privately personalised reads" no accounts or signups required.',
    skills: ['html', 'css', 'javascript'],
    divOneId: 'third-page',
    divTowId: 'grid-three',
    divThreeId: 'grid-four',
    direction: 'right',
  },
  {
    imageSmall: './images/project3.png',
    imageBig: './images/Snapshoot Portfolio-three.png',
    title: 'Facebook 360',
    client: 'CANOPY',
    position: 'Back End Dev',
    year: '2015',
    description: ' Daily selection of privately personalised reads" no accounts or signups required.',
    skills: ['html', 'css', 'javascript'],
    divOneId: 'fourth-page',
    divTowId: 'grid-five',
    divThreeId: 'grid-six',
    direction: 'left',
  },
  {
    imageSmall: './images/project4.png',
    imageBig: './images/Snapshoot Portfolio-four.png',
    title: 'Uber Navigation',
    client: 'CANOPY',
    position: 'Back End Dev',
    year: '2015',
    description: 'Daily selection of privately personalised reads" no accounts or signups required.',
    skills: ['html', 'css', 'javascript'],
    divOneId: 'page-five',
    divTowId: 'grid-seven',
    divThreeId: 'grid-eight',
    direction: 'right',
  },
];

const displayProjects = ({
  imageSmall, imageBig, title, client, position, year, description, skills,
  divOneId, divTowId, divThreeId, direction,
}, index) => {
  const div = document.createElement('div');
  div.className = 'left-block';
  div.id = `${divOneId}`;
  div.innerHTML = `
<div class="primary-image" id="${divTowId}">
                <img src="${imageSmall}" alt="photo_of_my_projects" class="for-small-size">
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
                        <li>>${year}</li>
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
  imageSmall, title, client, position, year, description, skills,
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
            <img class="pop-photo" src=${imageSmall} alt=" " />
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
                        <button href="">See Live</button>
                        <button href="">See Source</button>
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
