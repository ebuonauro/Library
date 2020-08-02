function stickyNavScrollLogic() {
  let lastScroll = 0;
  const elementTarget = document.getElementById("hero");
  if (window.scrollY >= (elementTarget.offsetTop + elementTarget.offsetHeight) - 100) {
    document.querySelector('.bootstrap').classList.add('sticky');
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

window.addEventListener('scroll', throttleScrollListener(stickyNavScrollLogic, 200));