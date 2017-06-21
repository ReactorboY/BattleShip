 // MVC is the most important thing to learn while
 // designing single page applications as well as games

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
