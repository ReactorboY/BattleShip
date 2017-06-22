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


model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
