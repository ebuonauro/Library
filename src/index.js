import './style.scss';
import { nestedNavLinksLoop } from './navigation/helpers/nav.js';
import Data from './navigation/config/data.json';

function navbar() {
  const navId = {
          "data": Data.navigation['nav-id'],
          "elem": document.getElementById('nav-id')
          },
        branding = {
          "data": Data.navigation['branding'],
          "elem": document.getElementById('branding')
        },
        navLinks = {
          "data": Data.navigation['nav-links'],
          "elem": document.getElementById('nav-link-container')
        }

  navId.elem.classList.add(navId.data);
  branding.elem.innerHTML = branding.data;
  nestedNavLinksLoop(navLinks.data, navLinks.elem);




  }
  
  navbar();

