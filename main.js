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
   divOneId:'second-page',
   divTowId: 'grid-one',
   divThreeId: 'grid-two',
   direction: 'left'
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
    divOneId:'third-page',
    divTowId: 'grid-three',
    divThreeId: 'grid-four',
    direction: 'right'
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
    divOneId:'fourth-page',
    divTowId: 'grid-five',
    divThreeId: 'grid-six',
    direction: 'left'
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
    divOneId:'page-five',
    divTowId: 'grid-seven',
    divThreeId: 'grid-eight',
    direction: 'right'
   }
]

const displayProjects= ({imageSmall, imageBig, title, client, position, year, description, skills, divOneId, divTwoId, divThreeId, direction}) => {
let div = document.createElement('div');
div.className = "left-block";
div.id=`${divOneId}`;
div.innerHTML = `
<div class="primary-image" id="${divTwoId}">
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
               <button class="action">See project</button>
            </div>
`
return(div);
}

const getProjects = () => {
myProjects.forEach((project) => {
  projectSection.append(displayProjects(project))
} )
}
getProjects();