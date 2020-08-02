// GLOBAL DEPENDENCIES //
import './style.scss';
// import Components from './config.json';

// COMPONENTS //
// Jumbotron Hero
import Hero from './components/jumbotron-hero/config/data.json';
function componentHero() {
  document.querySelector('.heading').innerHTML = Hero.hero['main-text'];
  document.querySelector('.short-desc').innerHTML = Hero.hero['lead-text'];
  document.querySelector('.cta').innerHTML = Hero.hero['button'];
}
componentHero();

// Sticky Navigation
import { navHelper } from './components/sticky-navigation/helpers/default.js';
import Nav from './components/sticky-navigation/config/data.json';
function componentStickyNav() {
  const user = {
    "data": Nav.navigation['user-name'],
    "elem": document.querySelector('.user__avatar')
  },
  navLinks = {
    "data": Nav.navigation['nav']['links'],
    "elem": document.querySelector('.nav-links__container')
  }
  user.elem.innerHTML = user.data;
  navHelper(navLinks.data, navLinks.elem);

  if (Nav.navigation['user-rank'] === 'admin') {
    document.querySelector('.cp-links').innerHTML = '              <li class="cp-links__admin admin"><a href="http://lintskins.jcink.net/admin.php" target="_blank">Admin CP</a></li>\
    <li class="cp-links__mod mod"><a href="http://lintskins.jcink.net/mod.php" target="_blank">Mod CP</a></li>'
  } else if (Nav.navigation.user-rank === 'mod') {
    document.querySelector('.cp-links').innerHTML = '<li class="cp-links__mod mod"><a href="http://lintskins.jcink.net/mod.php" target="_blank">Mod CP</a></li>'
  }
}
componentStickyNav();