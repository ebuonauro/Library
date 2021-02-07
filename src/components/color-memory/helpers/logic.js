const gameContainer = document.querySelector('.color-memory');
const gameStates    = ['intro', 'phase1', 'phase2', 'phase3', 'results'];
const beginButton = document.querySelector('.color-memory__intro--cta');
const colorChoicesElem = document.querySelector('.color-memory__phase3--choices');
let correctColor = null;
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
  setProgressBar('.color-memory__phase2--countdown', '5s', randomColor);

  for (i = 0; i < 5; i++) {
    let relativeColor = createMoreRelativeColors(randomColor);
    colorChoicesElem.innerHTML += '<li style="background-color: ' + relativeColor + ';">' + relativeColor + '</li>';
  }
  colorChoicesElem.innerHTML += '<li style="background-color: #' + randomColor + ';">#' + randomColor + '</li>';

  correctColor = randomColor;
  shuffleChoices();
}

function resetGameState() {
  gameContainer.className = 'color-memory';
}

function setProgressBar(elem, duration, color) {
  // Grab current progress bar, add inner elem and give it the random color
  var progressBarElem = document.querySelector(elem);
  var progressBarInner = document.querySelector('.progress')
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
    console.log('bar');
    choice = this.innerHTML;
    if (choice == '#' + correctColor) {
      document.querySelector('.color-memory__results--condition').innerHTML = 'You chose the correct color, congratulations!'
    } else {
      document.querySelector('.color-memory__results--condition').innerHTML = 'Sorry that was incorrect.'
    }
    resetGameState();
    gameContainer.classList.add(gameStates[4]);
    document.querySelector('.color-memory__results--cta').addEventListener('click', startGame);
  })
}