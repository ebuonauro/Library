function stickyNavScrollLogic() {
  let lastScroll = 0;
  const elementTarget = document.getElementById("hero");
  if (window.scrollY >= 100 ) {
    document.querySelector('.bootstrap').classList.add('active-nav');
  } else if (window.scrollY >= (elementTarget.offsetTop + elementTarget.offsetHeight) - 100) {
    document.querySelector('.bootstrap').classList.add('past-hero');
  } else if (window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight) - 100) {
    document.querySelector('.bootstrap').classList.remove('past-hero');
  } else if (window.scrollY < 100) {
    document.querySelector('.bootstrap').classList.remove('active-nav');
  }
}

function throttleScrollListener(logic, wait) {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      logic();
      time = Date.now();
    }
  }
}

window.addEventListener('scroll', stickyNavScrollLogic());

// window.addEventListener('scroll', throttleScrollListener(stickyNavScrollLogic, 20));