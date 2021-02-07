const gameContainer = document.querySelector('.color-memory');
const gameStates    = ['intro', 'phase1', 'phase2', 'phase3', 'results'];
const beginButton = document.querySelector('.color-memory__intro--cta');
const colorChoicesElem = document.querySelector('.color-memory__phase3--choices');
beginButton.addEventListener('click', startGame);

function startGame() {
  resetGameState();
  gameContainer.classList.add(gameStates[1]);
  selectDifficulty();
}

function selectDifficulty() {
  const easyButton = document.querySelector('.color-memory__phase1--easy');
  const normalButton = document.querySelector('.color-memory__phase1--normal');
  const hardButton = document.querySelector('.color-memory__phase1--hard');
  easyButton.addEventListener('click', selectEasyGame);
  normalButton.addEventListener('click', selectNormalGame);
  hardButton.addEventListener('click', selectHardGame);
}

function selectEasyGame() {
  resetGameState();
  gameContainer.classList.add(gameStates[2]);
  createRandomColor();
}

function selectNormalGame() {
  console.log('normal');
}

function selectHardGame() {
  console.log('hard');
}

function createRandomColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.querySelector('.color-memory__phase2--swatch').style.background = '#' + randomColor;
  setProgressBar('.color-memory__phase2--countdown', '10s', randomColor);

  for (i = 0; i < 5; i++) {
    let relativeColor = createMoreRelativeColors(randomColor);
    colorChoicesElem.innerHTML += '<li style="background-color: ' + relativeColor + ';">' + relativeColor + '</li>';
  }
  colorChoicesElem.innerHTML += '<li style="background-color: #' + randomColor + ';">#' + randomColor + '</li>';

  console.log(randomColor);
  shuffleChoices();
}

function resetGameState() {
  gameContainer.className = 'color-memory';
}

function setProgressBar(elem, duration, color) {
  // Grab current progress bar, add inner elem and give it the random color
  var progressBarElem = document.querySelector(elem);
  var progressBarInner = document.createElement('div');
  progressBarInner.className = 'progress';
  progressBarInner.style.background = '#' + color;

  // Set the animation duration, append the inner elem to parent, set animation state
  progressBarInner.style.animationDuration = duration;
  progressBarElem.appendChild(progressBarInner);
  progressBarInner.style.animationPlayState = 'running';

  // Once done, set a callback function to animate in the color choices
  progressBarInner.addEventListener('animationend', showColorChoices);
}

function showColorChoices() {
  resetGameState();
  gameContainer.classList.add(gameStates[3]);
  determineResults();
}

function shuffleChoices() {
  var ul = colorChoicesElem;
  for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}

function createMoreRelativeColors(color) {
  let randColorSplit = color.split('');
  let newColor = '';
  randColorSplit.forEach(function(i){
    if ([i].toString().match(/[a-z]/i)) {
      newColor += nextLetter([i].toString());
    } else if ([i].toString().match(/[0-8]/i)) {
      newColor += Math.random().toString().substring(5,6);
    } else {
      newColor += [i];
    }
  });
  return '#' + newColor;
}

function nextLetter(s){
  return s.replace(/([a-fA-F])[^a-fA-F]*$/, function(a){
    var c= a.charCodeAt(0);
    switch(c){
      case 70: return 'A';
      case 102: return 'a';
      default: return String.fromCharCode(++c);
    }
  });
}

function determineResults() {
  var choices = document.querySelector('.color-memory__phase3--choices li');
  var choice = null;
  choices.addEventListener('click', function() {
    console.log(this.innerHTML);
    resetGameState();
    gameContainer.classList.add(gameStates[4]);
  })
}





// function colorMemoryIntroState() {
//   document.querySelector('#cm-step1').addEventListener('click', nextStep);
//   document.querySelector('#cm-step2').addEventListener('click', nextStep);
// }

// function nextStep() {
//   if (this.id == 'cm-step1') {
//     document.querySelector('.state-1').classList.add('d-none');
//     document.querySelector('.state-2').classList.remove('d-none');
//   } else if (this.id == 'cm-step2') {
//     document.querySelector('.game').classList.remove('d-none');
//     createRandomColor();
//     setTimeout(function(){
//       document.querySelector('.game').classList.add('d-none');
//       document.querySelector('.state-3').classList.remove('d-none');
//     }, 10000)
//   }
// }

// function createRandomColor() {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   document.querySelector('.color-memory__game--swatch').style.background = '#' + randomColor;

//   for (i = 0; i < 5; i++) {
//     let relativeColor = createMoreRelativeColors(randomColor);
//     document.getElementById('color-choices').innerHTML += '<li style="background-color: ' + relativeColor + ';">' + relativeColor + '</li>';
//   }
//   document.getElementById('color-choices').innerHTML += '<li style="background-color: #' + randomColor + ';">#' + randomColor + '</li>';

//   console.log(randomColor);
//   shuffleChoices();
// }

// function shuffleChoices() {
//   var ul = document.querySelector('#color-choices');
//   for (var i = ul.children.length; i >= 0; i--) {
//       ul.appendChild(ul.children[Math.random() * i | 0]);
//   }
// }

// function createMoreRelativeColors(color) {
//   let randColorSplit = color.split('');
//   let newColor = '';
//   randColorSplit.forEach(function(i){
//     if ([i].toString().match(/[a-z]/i)) {
//       newColor += nextLetter([i].toString());
//     } else if ([i].toString().match(/[0-8]/i)) {
//       newColor += Math.random().toString().substring(5,6);
//     } else {
//       newColor += [i];
//     }
//   });
//   return '#' + newColor;
// }


// function nextLetter(s){
//   return s.replace(/([a-fA-F])[^a-fA-F]*$/, function(a){
//     var c= a.charCodeAt(0);
//     switch(c){
//       case 70: return 'A';
//       case 102: return 'a';
//       default: return String.fromCharCode(++c);
//     }
//   });
// }

// colorMemoryIntroState();