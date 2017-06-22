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

view.displayMessage("Tap Tap, can I be go here ?");
view.displayMiss("00")
view.displayHit("34")
view.displayHit("26")

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
  ] 
};
