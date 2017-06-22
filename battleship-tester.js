// view is going to update display message and other display things
var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  //  display hit function to show ship is bengin hitted
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },

  //  displayMiss method to show ship is missed
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

// view.displayMessage("Tap Tap, can I be go here ?");
// view.displayMiss("00")
// view.displayHit("34")
// view.displayHit("26")

//  Now Work on Model is starting
//  Model is where we keep the state of the game,
//  and hold some logic here

var model = {

  // size of the grid
  boardSize: 7,

  //  num of ships we include in the game
  numShips: 3,

  //  length of the ship
  shipLength: 3,

  // how many ships is sunk
  shipsSunk: 0,

  //  our ships location and wether hitted
  ships: [
    {
      locations: ["06","16","26"],
      hits: ["","",""]
    },
    {
      locations: ["24","34","44"],
      hits: ["","",""]
    },
    {
      locations: ["10","11","12"],
      hits: ["","",""]
    }
  ],

  //  fire method used to determine whther ship is hit or miss
  //  by  calculating from guess of input provided
  fire: function (guess) {
    for(var i = 0; i < this.numShips; i++){
      //  to see whether guess matches any ship location
      var ship = this.ships[i];

      //  location sof the ship
      //  to find whether guess present in location or not
      var index = ship.locations.indexOf(guess);
      if(index >= 0){
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if(this.isSunk(ship)){
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You Missed!");
    return false;
  },

  isSunk: function (ship) {
    for(var i = 0; i < this.shipLength; i++){
      if(ship.hits[i] !== "hit"){
        return false;
      }
    }
    return true;
  }
};

// Controller starts from here
var controller = {
  //  no of guesses
  guesses: 0,

  // functionto process guess
  processGuess: function (guess) {
    var location = parseGuess(guess);
    if(location){
      this.guesses++;
      var hit = model.fire(location);
      if(hit && model.shipsSunk === model.numShips){
        view.displayMessage("You sank all my battleship, in " + this.guesses + " guesses");
      }
    }
  }
}
//  to convert adn check whther player guess is valid or not
function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D","E","F","G"];

  if(guess === null || guess.length !== 2 ){
    alert("Oops, ENter a letter and a number on the board");
  } else {
    //  ectract first charcter and check it present in alphabet
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);

    //  check column
    var column = guess.charAt(1);

    //  check if row or column is NAN
    if(isNaN(row) || isNaN(column)) {
      alert("Oops, that's isn't on the board");
    } else if(row < 0 || row >= model.boardSize ||
                column < 0 || column >= model.boardSize){
                  alert("Oops, thats off the boad");
                } else {
                  return row + column;
                }
  }
  return null;
}

// console.log(parseGuess("B0"));
// console.log(parseGuess("B6"));
// console.log(parseGuess("G3"));

controller.processGuess("A0");
controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");
controller.processGuess("C4");
controller.processGuess("D4");
controller.processGuess("E4");
controller.processGuess("B0");
controller.processGuess("B1");
controller.processGuess("B2");

//  358
