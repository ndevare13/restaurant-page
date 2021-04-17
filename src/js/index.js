require('../css/style.css');
import { createNavigationBarElements } from './navigationBar';
import { createHomePageElements } from './home';
import { createMenuPageElements } from './menu';
import { createContactPageElements } from './contact';

const contentDiv = document.querySelector('#content');

contentDiv.appendChild(createNavigationBarElements());

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