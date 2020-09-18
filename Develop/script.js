// Assignment Code - provided in assignment code clone - not sure what this is
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - provided in assignment code clone - does this start the code after button is pushed in html?
generateBtn.addEventListener("click", writePassword);
//NOT SURE WHAT TO DO WITH ABOVE

//prompt for password criteria after clicking #generate html button -- options include password length and character types
// prompt to select length of password and choose 8-128 char and store length of password in passwordLength variable
function (generatePassword) {
window.prompt("Enter length of password. Choose between 8-128 characters.")
var passwordLength = (charLength); {
  if (passwordLength >= 8 && passwordLength <= 128) {
    return true;
  }else {
    window.prompt("You must select a password length between 8-128.  Please try again.");
    var x = "";
    Boolean(x);       // returns false
} 
}

//if password length verifed and true, prompt for char lowercase option
window.prompt("Would you like to select a lowercase letter?")
function confirmLower() {
  if (confirmLower === true) {
    return true;
  } else {
    return false;
  }
}

//if true, prompt for uppercase option
if (passwordLowerLetter = " "

//if true, prompt for uppercase option
var passwordLowerLetter = (charLowerLetter);
if (passwordLength >= 8 && passwordLength <= 128) {
charType ();

//if false, prompt again to enter password length
} else {
passwordLength ();
}
  
 


  
}

//prompt for char types to include and select lowercase, uppercase, numeric, and/or special chars

//store char types 

//check to see if at least one char type is selected
//if at least one char type is selected, generate password
//if one char type is NOT selected, alert user and prompt to select char types
if (charType === 0) {
  var promptCharTypeMissing("You must select at least one character type.  Would you like to ENTER or QUIT password generator?");
    if (promptCharTypeMissing === QUIT)
} 
else {
  generatePassword();
}

//generate password that matches selected criteria - generate random numbers, selecting from arrays

//display password in alert or written to page at html #password area
// Write password to the #password input - provided in assignment code clone; moved from top to bottom
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
