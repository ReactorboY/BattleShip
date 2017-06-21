<<<<<<< HEAD
var random = Math.floor(Math.random() * 5);
var location1 = random;
var location2 = location1 + 1;
var location3 = location2 +1;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");
  if(guess < 0 || guess > 6){
    alert("Enter a valid Number between 0-6");
  } else {
    guesses = guesses + 1;
    if(guess == location1 || guess == location2 || guess == location3){
      alert("Hit");
      hits = hits + 1;
      if(hits == 3){
        isSunk = true;
        alert("You sank my battleship");
      }
    } else {
      alert("miss");
    }
  }
}

var stats = "You took " + guesses + " guesses to sink the battleship," + " which means you're shooting accuracy was " + ((3/guesses) * 100) + "%";
alert(stats);
=======
 // MVC is the most important thing to learn while
 // designing single page applications as well as games
>>>>>>> chnaged

var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHtml = msg;
  },
  displayHit: function () {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function () {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};
