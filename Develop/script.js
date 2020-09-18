// assign character sets to the password criteria - what lowercase letters, uppercase letters, numbers and special characters should be used in the password?
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code - provided in assignment code clone - document.querySelector goes to the html and finds the first occurance of ID "generate" which is the generate button.
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - provided in assignment code clone - after finding button, when user clicks button in html, the write password function will start
generateBtn.addEventListener("click", writePassword);

//writePassword function launches generatePassword so we need to create a password function that returns info that is stored in password variable and this code must be above writePassword function or it won't start

//prompt for password criteria after clicking #generate html button -- options include password length and character types

// prompt to select length of password and choose 8-128 char and store length of password in passwordLength variable

function generatePassword() {
  var passwordLength = (prompt("Enter length of password. Choose between 8-128 characters."));
  if (passwordLength === true) {
    var confirmLower = confirm("Click OK to select lowercase characters or CANCEL to skip.");
    var confirmUpper = confirm("Click OK to select uppercase characters or CANCEL to skip.");
    var confirmNum = confirm("Click on OK to select numeric characters or CANCEL to skip.");
    var confirmSpecial = confirm("Click OK to select special characters or CANCEL to skip.");
  //loop questions if not true
  while (passwordLength <=7 && passwordLength >=129) {
      alert ("You must select a password length between 8-128.  Please try again.");
      var passwordLength = (prompt("Enter length of password. Choose between 8-128 characters."));
  } 
  //verify that all character selections are not false/skipped and at least one character has been selected to use in the password
  while (confirmLower === false && confirmUpper === false && confirmNum === false && confirmSpecial === false) {
    alert("You must choose at least one character option, i.e. Lowercase, Uppercase, Number or Special Character.");
  }
    }
  }

//where is user data being stored based on user selections above using charcter sets at top?  if user confirmed they wanted to include character, then go to character sets above and select random and store in passwordData returning a random generated password.
var passwordData = []

confirmLower = lower
confirmUpper = upper
confirmNum = num
confirmSpecial = special

//Where is password length finalized?


// Write password to the #password input - provided in assignment code clone; moved from top to bottom.  Reads from top to bottom. writePassword will be launched after clicking button, which will launch generatePassword function, which will return data stored in password (labeled passwordText.value) that will be written in the password ID in html - the password box.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//.value gets/sets value of html element - in this case the password is the value set in the password ID in html.
  passwordText.value = password;

}
