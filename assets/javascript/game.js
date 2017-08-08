    
    $(document).ready(function() {

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
                           "p","q","r","s","t","u","v","w","x","y","z"]
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9
    var guessLog = ""
    var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
     
      // Determines which key was pressed.
      
      var userLetter = event.key

      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // If user has guesses left, determine if new guess is correct. If yes, add to wins. Else, deduct from remaining guesses
      // If user has no guesses left, add to losses and reset game. 
      if (guessesLeft > 0) {
          if (userLetter === computerLetter ) {
              wins++
              guessesLeft = 9
              guessLog = "";
              computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          }
          else {
              guessesLeft--
              userLetter.toString()
              guessLog = guessLog + userLetter + ","; 
          }
      
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/stats
          var stats =
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>guesses left: " + guessesLeft + "</p>" +
            "<p>your current guesses:" + guessLog + "</p>";


        // add stats to #game div
        //document.querySelector("#game").innerHTML = html;
        $("#game").html(stats);
      }

      else {
          losses++;
          guessLog = "";
          guessesLeft = 9;    

          var stats =
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>guesses left: " + guessesLeft + "</p>" +
            "<p>your current guesses:" + guessLog + "</p>";


          // add stats to #game div
          $("#game").html(stats);
      }
    }

      
    });

    
