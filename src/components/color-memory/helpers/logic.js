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
  const validChars = '0123456789ABCDEF';
  let randomColor = '#';
  for (i = 0; i < 6; i++) {
    randomColor += validChars[Math.floor(Math.random() * 16)];
  }
  document.querySelector('.color-memory__phase2--swatch').style.background = randomColor;
  setProgressBar('.color-memory__phase2--countdown', '5s', randomColor);

  for (i = 0; i < 5; i++) {
    let relativeColor = createMoreRelativeColors(randomColor);
    colorChoicesElem.innerHTML += '<input type="radio" id="color-' + i + '" name="color-choice" class="color-choice" data-color="' + relativeColor + '"><label for="color-' + i + '" style="background-color: ' + relativeColor + ';"></label>';
  }
  colorChoicesElem.innerHTML += '<input type="radio" id="color-' + i + '" name="color-choice" class="color-choice" data-color="' + randomColor + '"><label for="color-' + i + '" style="background-color:' + randomColor + ';"></label>';

  correctColor = randomColor;
  shuffleChoices();
}

function resetGameState() {
  gameContainer.className = 'color-memory';
}

function setProgressBar(elem, duration, color) {
  var progressBarElem = document.querySelector(elem);
  var progressBarInner = document.querySelector('.progress')
  progressBarInner.style.background = color;

  progressBarInner.style.animationDuration = duration;
  progressBarElem.appendChild(progressBarInner);
  progressBarInner.style.animationPlayState = 'running';

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
  let randColorSplit = color.substring(1,color.length).split('');
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
  var choices = document.querySelectorAll('.color-choice');
  var choice = null;
  for (i = 0; i < choices.length; i++) {
    choices[i].onclick = function() {
      choice = this.dataset.color;
      if (choice == correctColor) {
        document.querySelector('.color-memory__results--condition').innerHTML = 'You chose the correct color, congratulations!'
      } else {
        document.querySelector('.color-memory__results--condition').innerHTML = 'Sorry that was incorrect.'
      }
      resetGameState();
      gameContainer.classList.add(gameStates[4]);
      document.querySelector('.color-memory__results--cta').addEventListener('click', startGame);
      console.log(choice, correctColor);
      document.querySelector('.color-memory__phase3--choices').innerHTML = '';
    }
  }
}