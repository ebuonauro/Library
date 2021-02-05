function colorMemoryIntroState() {
  document.querySelector('#cm-step1').addEventListener('click', nextStep);
  document.querySelector('#cm-step2').addEventListener('click', nextStep);
}

function nextStep() {
  if (this.id == 'cm-step1') {
    document.querySelector('.state-1').classList.add('d-none');
    document.querySelector('.state-2').classList.remove('d-none');
  } else if (this.id == 'cm-step2') {
    document.querySelector('.game').classList.remove('d-none');
    createRandomColor();
    setTimeout(function(){
      document.querySelector('.game').classList.add('d-none');
      document.querySelector('.state-3').classList.remove('d-none');
    }, 10000)
  }
}

function createRandomColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.querySelector('.color-memory__game--swatch').style.background = '#' + randomColor;

  for (i = 0; i < 5; i++) {
    let relativeColor = createMoreRelativeColors(randomColor);
    document.getElementById('color-choices').innerHTML += '<li style="background-color: ' + relativeColor + ';">' + relativeColor + '</li>';
  }
  document.getElementById('color-choices').innerHTML += '<li style="background-color: #' + randomColor + ';">#' + randomColor + '</li>';

  console.log(randomColor);
  shuffleChoices();
}

function shuffleChoices() {
  var ul = document.querySelector('#color-choices');
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

colorMemoryIntroState();