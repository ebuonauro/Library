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

// Color Memory
import colorMemory from './components/color-memory/config/data.json';
import './components/color-memory/helpers/logic.js';
function componentColorMemory() {
  // Introduction
  document.querySelector('.color-memory__intro--heading').innerHTML = colorMemory.intro.heading;
  document.querySelector('.color-memory__intro--desc').innerHTML = colorMemory.intro.desc;
  document.querySelector('.color-memory__intro--cta').innerHTML = colorMemory.intro['cta-text'];

  // Game Phase 1
  document.querySelector('.color-memory__phase1--instructions').innerHTML = colorMemory.game['phase-1'].instructions;
  document.querySelector('.color-memory__phase1--easy').innerHTML = colorMemory.game['phase-1'].difficulty.easy;
  document.querySelector('.color-memory__phase1--normal').innerHTML = colorMemory.game['phase-1'].difficulty.normal;
  document.querySelector('.color-memory__phase1--hard').innerHTML = colorMemory.game['phase-1'].difficulty.hard;

  // Game Phase 2
  document.querySelector('.color-memory__phase2--instructions').innerHTML = colorMemory.game['phase-2'].instructions;

  // Game Phase 3
  document.querySelector('.color-memory__phase3--instructions').innerHTML = colorMemory.game['phase-3'].instructions;
}
componentColorMemory();