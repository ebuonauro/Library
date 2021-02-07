// let carouselNav = document.getElementById('carousel-nav');

// function slideNavigationController(direction) {
//   const carousel = document.querySelector('.jumbotron-hero__container-carousel'),
//         prevBtnHTML = '<button id="prev" class="prev nav" aria-label="Go to previous slide"></button>',
//         nextBtnHTML = '<button id="next" class="next nav" aria-label="Go to next slide"></button>';
//   if (direction == 'next') {
//     if (carousel.classList.contains('slide1')) {
//       carousel.classList.remove('slide1');
//       carousel.classList.add('slide2');
//     } else if (carousel.classList.contains('slide2')) {
//       carousel.classList.remove('slide2');
//       carousel.classList.add('slide3');

//       navBtn.classList.remove('next');
//       navBtn.classList.add('prev');

//       // To-Do: Add Aria label support here
//     }
//   } else if (direction == 'prev') {

//     if (carousel.classList.contains('slide2')) {
//       carousel.classList.remove('slide2');
//       carousel.classList.add('slide1');

//       navBtn.parentNode.removeChild(navBtn);
//       carousel.insertAdjacentHTML('beforeend', nextBtnHTML);

//     } else if (carousel.classList.contains('slide3')) {
//       carousel.classList.remove('slide3');
//       carousel.classList.add('slide2');
//       carouselNav.addEventListener('click', function(){
//         slideNavigationController(this.id);
//       });
//     }
//   }
// }

// carouselNav.addEventListener('click', function(){
//   slideNavigationController(this.id);
// });