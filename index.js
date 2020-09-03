var keys = document.querySelectorAll('.drum').length

// Add EventListeners to all the seven buttons.
// Detect the clikced button and pass it to the function.
for (var iterator = 0; iterator < keys; iterator++) {
  document.querySelectorAll('button')[iterator].addEventListener('click', function() {
    var clickedButton = this.innerHTML
    console.log('Pressed button ' + clickedButton)

    makeNoise(clickedButton)
    showAnimation(clickedButton)
  });
}

// Detect the pressed keyboard key and pass the key.
document.addEventListener('keypress', function(event) {
  var pressedKey = event.key
  console.log('Pressed Key ' + pressedKey)

  makeNoise(pressedKey)
  showAnimation(pressedKey)
});

// It creates music, no noise.
function makeNoise(key) {
  if (key === 'w') {
    var tom1 = new Audio('sounds/tom-1.mp3')
    tom1.play();
  }
  else if (key === 'a') {
    var tom2 = new Audio('sounds/tom-2.mp3')
    tom2.play();
  }
  else if (key === 's') {
    var tom3 = new Audio('sounds/tom-3.mp3')
    tom3.play();
  }
  else if (key === 'd') {
    var tom4 = new Audio('sounds/tom-4.mp3')
    tom4.play();
  }
  else if (key === 'j') {
    var crash = new Audio('sounds/crash.mp3')
    crash.play();
  }
  else if (key === 'k') {
    var snare = new Audio('sounds/snare.mp3')
    snare.play();
  }
  else if (key === 'l') {
    var kick = new Audio('sounds/kick-bass.mp3')
    kick.play();
  }
  else {
    console.log(key)
  }
}

// Add and remove animations.
function showAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey)
  activeButton.classList.add('pressed')

  setTimeout(function() {
    activeButton.classList.remove('pressed')
  },100);
}
