// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
var guess = 1
var player_name = playername;
function submit() {
var x = document.getElementById("guessField").value;

// made for correct Guess
if(x == y)
{
    alert("CONGRATULATION!!!"+player_name+"  YOU GUESSED IT RIGHT IN"+guess+"GUESS");
    guess= 1;
}
else if(x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else(x < y)
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
}
}
function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}
// function for number guessed by user     
