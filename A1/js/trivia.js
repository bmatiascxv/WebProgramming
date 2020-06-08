// Benjamin Matias | 991591184 | Trafalgar //

var questionCounter = 0; // counts the amount of questions
var scoreCounter = 1; // Score counter

// Function called nextQuestion that goes up increments when the Next Question button is clicked //
function nextQuestion(){
  if(questionCounter === 0){
    document.getElementById("Question").innerHTML = "<h3> Question 2 | Who is the writer of the famous Dragon Ball series </h3>";
    document.getElementById("optionA").innerHTML = "Akira Toriyama",  scoreCounter++;
    document.getElementById("optionB").innerHTML = "Osamu Tezuka" ;
    document.getElementById("optionC").innerHTML = "Go Nagai";
    document.getElementById("optionD").innerHTML = "Eiichiro Oda" ;
    questionCounter++;
  }
  else if(questionCounter === 1){
    document.getElementById("Question").innerHTML = "<h3> Question 3 | What anime is known for the Acronym FMA </h3>";
    document.getElementById("optionA").innerHTML = "Fin's Mad Adventure";
    document.getElementById("optionB").innerHTML = "Full Metal Alchemist",  scoreCounter++;
    document.getElementById("optionC").innerHTML = "Full Metal Adventure";
    document.getElementById("optionD").innerHTML = "Fairy Memory Advent";
    questionCounter++;
  }
  else if(questionCounter === 2){
    document.getElementById("Question").innerHTML = "<h3> Question 4 | What was Ash's starter pokemon </h3>";
    document.getElementById("optionA").innerHTML = "Turtwig";
    document.getElementById("optionB").innerHTML = "Charmander";
    document.getElementById("optionC").innerHTML = "Piplup";
    document.getElementById("optionD").innerHTML = "Pikachu",  scoreCounter++;
    questionCounter++;
  }
  // User Clicks play again then page reloads
  else if(questionCounter === 3){
    document.getElementById("Question").innerHTML = "<h2>Score: " + scoreCounter + "</h2>";
    document.getElementById("submit").innerHTML = "Play Again"; 
    questionCounter++;
    document.getElementById("choices").style.visibility = "hidden";
    document.getElementById("choiceTable").style.visibility = "none";
  }    
  else if(questionCounter === 4){
      location.reload(); // Reloads the page
  }
}
