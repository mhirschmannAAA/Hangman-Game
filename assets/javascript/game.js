window.onload = function() {
  var word;
  var guess;
  var guesses = [];
  var lives;
  var counter;

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