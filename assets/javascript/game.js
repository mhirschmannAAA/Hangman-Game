window.onload = function () {
  words = ["cannondale", "trek", "giant", "litespeed"]
  var word;
  var guess;
  var guesses = [];
  var lives;
  var counter;
  var gameState = "start";

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");

  // Create guesses ul
  var result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');
    correct.setAttribute('id', 'my-word');

    for (var i = 0; i < word.length; i++) {

      guess = document.createElement('li');
      guess.setAttribute('class', i);
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_  ";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  // OnClick Function
  var check = function (value) {
    console.log(value)
    for (var i = 0; i < word.length; i++) {
      if (value === word[i]) {
        document.getElementsByClassName(i)[0].innerHTML = value;
      }

    }
      // var guess = (this.innerHTML);
      // this.setAttribute("class", "active");
      // this.onkeyup = null;
      // for (var i = 0; i < word.length; i++) {
      //   if (word[i] === guess) {
      //     guesses[i].innerHTML = guess;
      //     counter += 1;
      //   }
      // }
      // var j = (word.indexOf(guess));
      // if (j === -1) {
      //   lives -= 1;
      //   comments();
      //   animate();
      // } else {
      //   comments();
      // }
    
  }

  var play = function () {

    word = words[Math.floor(Math.random() * words.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    // buttons();

    guesses = [];
    lives = 10;
    counter = 0;
    result();
  }

  document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }

  document.onkeyup = function (event) {
    
    if (event.key === " ") {
      play();
    }

    if (/[a-z]/gi.test(event.key)) {
      
      check(event.key);
    }

    console.log(gameState)
  }
}