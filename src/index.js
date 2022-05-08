import home from './home';
import menu from './menu.js';
import about from './about.js';

//Cache Dom
const navHome = document.getElementById('home')
const navMenu = document.getElementById('menu');
const navAbout = document.getElementById('about');
const content = document.getElementById('content')

navHome.addEventListener('click',() => {
    clearContent();
    home();
})

navMenu.addEventListener('click', () => {
    clearContent();
    menu();
   
})

navAbout.addEventListener('click', () => {
    clearContent();
    about();
})


function clearContent(){
    content.textContent = ''
}