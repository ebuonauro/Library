// GLOBAL DEPENDENCIES //
import './style.scss';
import Components from './config.json';

// COMPONENTS //
// Navigation
import { nestedDataHelper } from './components/navigation/helpers/nav.js';
import Nav from './components/navigation/config/data.json';
// Hero
import Hero from './components/hero/config/data.json';
// Cards
import { loopThroughCards } from './components/card-row/helpers/card-row.js';
import Cards from './components/card-row/config/data.json';

// PARTIALS //
// Search w/ Autocomplete
import './partials/typeahead/assets/awesomeplete.js';
import './partials/typeahead/assets/awesomeplete.scss';
import { autocompleteWithKeywords } from './partials/typeahead/helpers/typeahead.js';

function componentNavbar() {
  const navId = {
          "data": Nav.navigation['nav-id'],
          "elem": document.getElementById('nav-id')
        },
        branding = {
          "data": Nav.navigation['branding'],
          "elem": document.getElementById('branding')
        },
        navLinks = {
          "data": Nav.navigation['nav']['links'],
          "elem": document.querySelector('.navbar-nav')
        }

  navId.elem.classList.add(navId.data);
  branding.elem.innerHTML = branding.data;
  nestedDataHelper(navLinks.data, navLinks.elem);
  }

function componentHero() {
  document.querySelector('.main-text').innerHTML = Hero.hero['main-text'];
  document.querySelector('.lead-text').innerHTML = Hero.hero['lead-text'];
}

function componentCardRow() {
  loopThroughCards(Cards);
}

function partialSearchWithAutocomplete() {
  const searchInput = document.getElementById('typeahead');
  autocompleteWithKeywords(Components, searchInput)
};

componentNavbar(); 
componentHero();
componentCardRow();

partialSearchWithAutocomplete()

