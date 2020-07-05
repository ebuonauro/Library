// GLOBAL STYLES //
import './style.scss';

// COMPONENTS //
// Navigation
import { nestedDataHelper } from './components/navigation/helpers/nav.js';
import Nav from './components/navigation/config/data.json';

// PARTIALS //
// Search w/ Autocomplete
import './partials/typeahead/assets/awesomeplete.js';
import './partials/typeahead/assets/awesomeplete.scss';
import Results from './partials/typeahead/config/data.json';
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

  function partialSearchWithAutocomplete() {
    const searchInput = document.getElementById('typeahead');

    autocompleteWithKeywords(Results, searchInput)
  };

componentNavbar(); 
partialSearchWithAutocomplete()

