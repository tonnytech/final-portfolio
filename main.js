let logo = document.querySelector('#logo-icon')
    logo.addEventListener('click',function() {
        alert("this is me")
    });

  document.querySelectorAll('.nav-link').forEach((nav) => nav.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      navList.classList.remove('active');
    }));

    const projects = [
      {
        id: 'first',
        title:'Tonic',
        tags: ['Canopy', 'Back End dev', '2015'],
        img: {
          src: './images/project1.png',
          alt: 'Facebook 360 project preview',
        },
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        technologies: ['HTML', 'CSS', 'Ruby on Rails'],
      
        links: ['https://github.com', 'https://heroku.com'],
      },
    
      {
        id: 'second',
        title:'Tonic',
        tags: ['Canopy', 'Back End dev', '2015'],
        img: {
          src: './images/project2.png',
          alt: 'Facebook 360 project preview',
        },
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        technologies: ['HTML', 'CSS', 'Ruby on Rails'],
      
        links: ['https://github.com', 'https://heroku.com'],
      },
    
      {
        id: 'third',
        title:'Tonic',
        tags: ['Canopy', 'Back End dev', '2015'],
        img: {
          src: './images/project3.png',
          alt: 'Facebook 360 project preview',
        },
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        technologies: ['HTML', 'CSS', 'Ruby on Rails'],
      
        links: ['https://github.com', 'https://heroku.com'],
      },
    
      {
        id: 'fourth',
        title:'Tonic',
        tags: ['Canopy', 'Back End dev', '2015'],
        img: {
          src: './images/project4.png',
          alt: 'Facebook 360 project preview',
        },
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        technologies: ['HTML', 'CSS', 'Ruby on Rails'],
      
        links: ['https://github.com', 'https://heroku.com'],
      },
    ]
    
    const popWindow = document.querySelector('.pop-up-window');
    
    function windowPop(){
      projects.forEach((popArray) => {
        popWindow.innerHTML += `
    
          <div class="pop-window" data-target="${popArray.id}">
            <i class="fa fa-close" style="font-size:24px"> </i>
            <h2>${popArray.title}</h2>
    
            <ul class="pop-tags">
              <li class="canopy">${popArray.tags[0]}</li>
              <li>${popArray.tags[1]}</li>
              <li>${popArray.tags[2]}</li>
            </ul>
    
            <div class="pop-body">
              <img class="pop-photo" src="${popArray.img.src}" alt="${popArray.img.alt}" />
              <div class="pop-description">
              <p>
                ${popArray.description}
              </p>
              <div class="pop-tech-container">
                <ul class="pop-tech">
                  <li>${popArray.technologies[0]}</li>
                  <li>${popArray.technologies[1]}</li>
                  <li>${popArray.technologies[2]}</li>
                  <li>${popArray.technologies[3]}</li>
                  <li>${popArray.technologies[4]}</li>
                  <li>${popArray.technologies[5]}</li>
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
    