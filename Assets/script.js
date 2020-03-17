// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  function generatePassword() {
    
    // To establish acceptable parameters for generatePassword():
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
    
    // First user prompt:
    lengthSelect = prompt("Your password must be at least 8 characters long and no longer than 128. Using the numeric keypad, how long would you like your password to be?");
    // To convert user input from string to useable number:
    lengthSelect = parseInt(lengthSelect);
    
    // To determine if the user input meets length/input criteria:
    if (isNaN(lengthSelect)) {
      alert("That is not a number! Please try again.");
    } else if (lengthSelect < 8) {
      alert("Your password is too short. Please select a number between 8 and 128.");
    } else if (lengthSelect > 128) {
      alert ("Your password is too long. Please select a number between 8 and 128.");
    } else {
      lengthSelectIsValid = true;
      // To confirm lowercase:
      var minSelect = confirm("Would you like your password to contain lowercase letters?");
      // To confirm uppercase:
      var majSelect = confirm("Would you like your password to contain uppercase letters?");
      // To confirm numbers:
      var numSelect = confirm("Would you like your password to contain numbers?");
      // To confirm special characters:
      var specialCharSelect = confirm("\"Special characters\" are things such as \"&\", \"$\", \"!\", or \"@.\" Would you like your password to contain those?");
    }
    
    // Creates an ever-expanding array of possible characters, based on user preferences, from which password will be drawn:
    if (minSelect) {
      possibleChars = possibleChars.concat(minCharArr);
    }
    if (majSelect) {
        possibleChars = possibleChars.concat(majCharArr);
    }
    if (numSelect) {
      possibleChars = possibleChars.concat(numCharArr);
    }
    if (specialCharSelect) {
      possibleChars = possibleChars.concat(specialCharArr);
    }
    
    // If user selection fails to conform to acceptable password criteria, this will not run:
    if (lengthSelectIsValid) {
    var numArray = new Array(lengthSelect);
    }
    // Runs incrementally down each character position and randomly assigns value from the total array of possible characters:
    var i;
    for (i = 0; i < numArray.length; i++) {
      numArray[i] = possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }
    // Converts resultant array to string that can be passed back to DOM:
    password = numArray.join('');
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);