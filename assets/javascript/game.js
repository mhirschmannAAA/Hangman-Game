window.onload = function() {
  var word;
  var guess;
  var guesses = [];
  var lives;
  var counter;
  var gameState  = "start";

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");

  // Create geusses ul
  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
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
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }

    // OnClick Function
   check = function () {
     list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onkeyup = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }

  play = function() {
    words = ["cannondale","trek","giant","litespeed"]
    word = chosenWord[Math.floor(Math.random() * chosenWord.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttuns();

    guesses = [];
    lives = 10;
    counter = 0;
    result();
  }

  play();

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}

document.onkeyup = function(event) {
  if (userInput === "k")
    play();
  console.log(gameState)
}