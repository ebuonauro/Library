import './style.scss';
import { nestedDataHelper } from './navigation/helpers/nav.js';
import Nav from './navigation/config/data.json';

function navbar() {
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
  
  navbar();

