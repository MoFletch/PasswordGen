// Assignment Code - provided in assignment code clone - not sure what this is
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - provided in assignment code clone - does this start the code after button is pushed in html?
generateBtn.addEventListener("click", writePassword);
//NOT SURE WHAT TO DO WITH ABOVE

//prompt for password criteria after clicking #generate html button -- options include password length and character types
// prompt to select length of password and choose 8-128 char and store length of password in passwordLength variable
function generatePassword() {
  prompt("Enter length of password. Choose between 8-128 characters.")
  var passwordLength = (charLength); {
    if (passwordLength >= 8 && passwordLength <= 128) {
      alert ("Selection is approved.")
    } else {
      prompt("You must select a password length between 8-128.  Please try again.");
      generatePassword ()
  } 
  }

  //Fix declaration where value isn't read - below
 

  //if password length verifed and true, prompt for yes/no or true/false boolean options for char types to include and select lowercase, uppercase, numeric, and/or special chars
  var confirmLower = confirm("Click OK to select lowercase characters or CANCEL to skip.");
  var confirmUpper = confirm("Click OK to select uppercase characters or CANCEL to skip.");
  var confirmNum = confirm("Click on OK to select numeric characters or CANCEL to skip.");
  var confirmSpecial = confirm("Click OK to select special characters or CANCEL to skip.");
  }

  //verify that all character selections are not false/skipped and at least one character has been selected to use in the password - continuing running until while criteria is solved/no longer happening?
function verifyChars (){
  while (confirmLower === false && confirmUpper === false && confirmNum === false && confirmSpecial === false) {
    alert("You must choose at least one character option, i.e. Lowercase, Uppercase, Number or Special Character.")
    var confirmLower = confirm("Click OK to select lowercase characters or CANCEL to skip.");
    var confirmUpper = confirm ("Click OK to select uppercase characters or CANCEL to skip.");
    var confirmNum = confirm("Click on OK to select numeric characters or CANCEL to skip.");
    var confirmSpecial = confirm("Click OK to select special characters or CANCEL to skip.");
    }
  }

// assign character sets to the parameters - what lowercase letters, uppercase letters, numbers and special characters should be used in the password?
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//generate password that matches selected criteria - generate random numbers, selecting from character sets


//Run the function
  generatePassword();
}

//display password in alert or written to page at html #password area
// Write password to the #password input - provided in assignment code clone; moved from top to bottom
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
