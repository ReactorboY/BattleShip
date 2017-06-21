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
