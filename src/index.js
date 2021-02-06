// GLOBAL DEPENDENCIES //
import './style.scss';
// import Components from './config.json';

// COMPONENTS //
// Jumbotron Hero
import Hero from './components/jumbotron-hero/config/data.json';
import './components/jumbotron-hero/helpers/logic.js';
function componentHero() {
  document.querySelector('.heading').innerHTML = Hero.hero['main-text'];
  document.querySelector('.short-desc').innerHTML = Hero.hero['lead-text'];
  document.querySelector('.cta').innerHTML = Hero.hero['button'];  
}
componentHero();

// Sticky Navigation
import './components/sticky-navigation/helpers/logic.js';
import { navHelper } from './components/sticky-navigation/helpers/source.js';
import Nav from './components/sticky-navigation/config/data.json';
function componentStickyNav() {
  const navLinks = {
    "data": Nav.navigation['nav']['links'],
    "elem": document.querySelector('.nav-links__container')
  }
  navHelper(navLinks.data, navLinks.elem);
}
componentStickyNav();