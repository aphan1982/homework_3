var lengthSelect;
var lengthSelectIsValid = false;
var majCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var majSelect;
var minCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var minSelect;
var numCharArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var numSelect;
var possibleChars = [];
var specialCharArr = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "\\", ";", ":", "'", "\"", "<", ",", ".", ">", "/", "?"];
var specialCharSelect;
var usedChars = [];

lengthSelect = prompt("Your password must be at least 8 characters long and no longer than 128. Using the numeric keypad, how long would you like your password to be?");

lengthSelect = parseInt(lengthSelect);
console.log(lengthSelect);

if (isNaN(lengthSelect)) {
  alert("That is not a number! Please try again.");
} else if (lengthSelect < 8) {
  alert("Your password is too short. Please select a number between 8 and 128.");
} else if (lengthSelect > 128) {
  alert ("Your password is too long. Please select a number between 8 and 128.");
} else {
  lengthSelectIsValid = true;
  var minSelect = confirm("Would you like your password to contain lowercase letters?");
  console.log(minSelect);

  var majSelect = confirm("Would you like your password to contain uppercase letters?");
  console.log(majSelect);

  var numSelect = confirm("Would you like your password to contain numbers?");
  console.log(numSelect);

  var specialCharSelect = confirm("\"Special characters\" are things such as \"&\", \"$\", \"!\", or \"@.\" Would you like your password to contain those?");
  console.log(specialCharSelect);
}

if (minSelect) {
  possibleChars = possibleChars.concat(minCharArr);
  console.log(possibleChars);
}
if (majSelect) {
    possibleChars = possibleChars.concat(majCharArr);
    console.log(possibleChars);
}
if (numSelect) {
  possibleChars = possibleChars.concat(numCharArr);
  console.log(possibleChars);
}
if (specialCharSelect) {
  possibleChars = possibleChars.concat(specialCharArr);
  console.log(possibleChars);
}

if (lengthSelectIsValid) {
var numArray = new Array(lengthSelect);
console.log(numArray);
}

var i;
for (i = 0; i < numArray.length; i++) {
  numArray[i] = possibleChars[Math.floor(Math.random() * possibleChars.length)];
  console.log(numArray);
}
var finalPassword = numArray.join('');
console.log(finalPassword);