require('../css/style.css');
import { createHomePageElements } from './home';
import { createMenuPageElements } from './menu';
import { createContactPageElements } from './contact';

console.log('hi');

const contentDiv = document.querySelector('#content');
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');

contentDiv.appendChild(createHomePageElements());

homeButton.addEventListener('click', event => {
    event.preventDefault();

    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.appendChild(createHomePageElements());
});

menuButton.addEventListener('click', event => {
    event.preventDefault();

    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.appendChild(createMenuPageElements());
});

contactButton.addEventListener('click', event => {
    event.preventDefault();

    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.appendChild(createContactPageElements());
});