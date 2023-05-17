const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const themeBtn = document.querySelector('.theme-btn');

function pageTransitions(){
  // Nav button click - active class
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        this.className += ' active-btn';
    })
  }
  
  // Assigning the active section
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
      // Remove "active" selection from other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      // Hide other sections 
      sections.forEach((section) => {
        section.classList.remove('active')
      })
      // Assign active section to target
      e.target.classList.add('active');
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  // Theme Toggle
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}

pageTransitions();