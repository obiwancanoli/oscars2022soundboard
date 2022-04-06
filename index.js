// Detecting Button Press

// The buttons in Array form.
var soundButtons = $(".btn");

for (i = 0; i < (soundButtons.length); i++){
  soundButtons[i].addEventListener("click", function(){

    var clickedButton = this.innerHTML;

    playSound(clickedButton);



  });
}


function playSound(button){
  switch (button) {

    case "UhOh":
      var uhoh = new Audio("sounds/uhoh.mp3");
      uhoh.play();
    break;

    case "Jada":
      var jada = new Audio("sounds/jada.mp3");
      jada.play();
    break;

    case "Keep My Wife's":
      var keepMyWife = new Audio("sounds/willsmith.mp3");
      keepMyWife.play();
    break;

    case "Smacked":
      var smacked = new Audio("sounds/willshit.mp3");
      smacked.play();
    break;

    case "Nice One":
      var niceOne = new Audio("sounds/niceone.mp3");
      niceOne.play();
    break;

    case "Javier Bardem":
      var javier = new Audio("sounds/javierbardem.mp3");
      javier.play();
    break;

    case "I'm Going To":
      var imGoingTo = new Audio("sounds/imgoingto.mp3");
      imGoingTo.play();
    break;

    case "Greatest Night":
      var greatestNight = new Audio("sounds/greatestnight.mp3");
      greatestNight.play();
    break;

    case "Gi Jane 2":
      var giJane2 = new Audio("sounds/gijane2.mp3");
      giJane2.play();
    break;

    case "Gi Jane Joke":
      var giJaneJoke = new Audio("sounds/gijanejoke.mp3");
      giJaneJoke.play();
    break;

    default:

  }
}
