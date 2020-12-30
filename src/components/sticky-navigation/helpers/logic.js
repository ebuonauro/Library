const  stickyMenu = document.querySelector('#sticky');

function stickyNavScrollLogic(heightFromTop) {
  let currentScrollPos = document.documentElement.scrollTop;
  if (currentScrollPos > heightFromTop) {
    stickyMenu.classList.add('stuck');
  } else {
    stickyMenu.classList.remove('stuck');
  }
}

function scrollController() {
  // Find the sticky nav menu then calculate height
  let stickyTriggerPos = stickyMenu.offsetHeight;

  // Find component above sticky nav calculate height
  if (stickyMenu.previousElementSibling != null) {
    const prevEl = stickyMenu.previousElementSibling;
    stickyTriggerPos = stickyTriggerPos += (prevEl.offsetHeight - 20);
  }

  // Sticky trigger position is when the menu should become 'sticky'
  stickyNavScrollLogic(stickyTriggerPos);
}

setTimeout(function(){
  window.addEventListener('scroll', function(){
    scrollController();
  });
  window.addEventListener('resize', function(){
    scrollController();
  });
}, 100);





