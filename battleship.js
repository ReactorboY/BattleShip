 // MVC is the most important thing to learn while
 // designing single page applications as well as games

//  model object
//  this initiize everytnig for game
var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: ["06","16","26"], hits: ["","",""] },
    { locations: ["24","34","44"], hits: ["","",""] },
    { locations: ["10","11","12"], hits: ["","",""] }
  ],

  fire: function (guess) {
    for(var i = 0;i < this.numShips; i++){
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if(index >= 0){
        ships.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT")
        if(this.isSunk(ship)){
          view.displayMessage("You sank my ship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed")
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

model.fire("53");
