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
    content.style.gridTemplateAreas = '"home-image home-head""home-image quote"';
})

navMenu.addEventListener('click', () => {
    clearContent();
    menu();
    content.style.gridTemplateAreas = '". menu-head menu-head ."". img img1 ."". p p1 ."". img2 img3 ."". p2 p3 ."'; 
   
})

navAbout.addEventListener('click', () => {
    clearContent();
    about();
})


function clearContent(){
    content.textContent = ''
}