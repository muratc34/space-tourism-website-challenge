/* MENU SHOW */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Show Menu */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}

/* Hidden Menu */
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}

/* Remove Menu */
// const navLink = document.querySelectorAll('.nav_link');

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu');
    
//     navLink.classList.remove('show-menu');
// }
// navLink.forEach(n=> n.addEventListener('click', linkAction()));