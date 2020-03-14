// Assignment Code
// var generateBtn = document.querySelector("#generate");

// if (confirm("You will be asked a series of questions to determine what kind of password you would like to create, okay?")) {

// }

var lengthSelection = prompt("Your password must be at least 8 characters long and no longer than 128. How many characters would you like your password to have?", "");

console.log(typeof(lengthSelection));
var lengthSelectionConv = parseInt(lengthSelection);
console.log(typeof(lengthSelectionConv));

if (lengthSelectionConv < 8 || lengthSelectionConv > 128 || lengthSelectionConv != Number) {
  // lengthSelection = Number(prompt("Your selection must be a number between 8 and 128. Please re-enter."));
  // console.log(lengthSelection);
  alert("shut up");
} else {
  alert("bye");
}
// while  {
  
// }

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);