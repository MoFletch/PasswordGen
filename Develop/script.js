// Assignment Code - provided in assignment code clone - document.querySelector goes to the html and finds the first occurance of ID "generate" which is the generate button.
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button - provided in assignment code clone - after finding button, when user clicks button in html, the write password function will start
generateBtn.addEventListener("click", writePassword);

var passwordLength
var confirmNum
var confirmLower
var confirmUpper
var confirmSpecial
var randomNum



//writePassword function launches generatePassword so we need to create a password function that returns info that is stored in password variable and this code must be above writePassword function or it won't start

//prompt for password criteria after clicking #generate html button -- options include password length and character types

// prompt to select length of password and choose 8-128 char and store length of password in passwordLength variable

function generatePassword() {

  var passwordLength = (prompt("Enter length of password. Choose between 8-128 characters."));
  //loop questions if not true
  while (passwordLength <=7 || passwordLength >=129) {
      alert ("You must select a password length between 8-128.  Please try again.");
      passwordLength = (prompt("Enter length of password. Choose between 8-128 characters."));
    } 
      confirmLower = confirm("Click OK to select lowercase characters or CANCEL to skip.");
      confirmUpper = confirm("Click OK to select uppercase characters or CANCEL to skip.");
      confirmNum = confirm("Click on OK to select numeric characters or CANCEL to skip.");
      confirmSpecial = confirm("Click OK to select special characters or CANCEL to skip.");
    //verify that all character selections are not false/skipped and at least one character has been selected to use in the password
        while (confirmLower === false && confirmUpper === false && confirmNum === false && confirmSpecial === false) {
          alert("You must choose at least one character option, i.e. Lowercase, Uppercase, Number or Special Character.");
          confirmLower = confirm("Click OK to select lowercase characters or CANCEL to skip.");
          confirmUpper = confirm("Click OK to select uppercase characters or CANCEL to skip.");
          confirmNum = confirm("Click on OK to select numeric characters or CANCEL to skip.");
          confirmSpecial = confirm("Click OK to select special characters or CANCEL to skip.");
        }
     //stores user selected character arrays
      var selectedArrayNum = [];
      console.log(selectedArrayNum);
      var selectedArraySpecial = [];
      console.log(selectedArraySpecial);
      var selectedArrayUpper = [];
      console.log(selectedArrayUpper);
      var selectedArrayLower = [];
      console.log(selectedArrayLower);

      // if user selected/confirmed a number, push number into storage
      if (confirmNum === true) {
      var arrayNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
      selectedArrayNum.push(arrayNum)
    }
      
      // if user selected/confirmed a special character, push special char
      if (confirmSpecial === true) {
      var arraySpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
      selectedArraySpecial.push(arraySpecial)
      }
      
      // if user selected/confirmed an upper case character, push upper char
      if (confirmUpper === true) {
      var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      selectedArrayUpper.push(arrayUpper)
      }
    
      //if user selected/confirmed a lowercase char, push lower char
      if (confirmLower === true) {
      var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      selectedArrayLower.push(arrayLower)
      }   
    // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
      var passwordOptions = selectedArrayNum.concat(selectedArraySpecial, selectedArrayLower, selectedArrayUpper);
      console.log(passwordOptions)

      // Loop through "passwordOptions" which holds all of the characters selected and choose random password based on length of password user chose.
        
      // Empty string to be filled based on for loop selecting random characters from the array

      var randomPassword = ""
      
      for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
        console.log(randomPassword)
      }
      return randomPassword;
    }
      // Write password to the #password input - provided in assignment code clone; moved from top to bottom.  Reads from top to bottom. writePassword will be launched after clicking button, which will launch generatePassword function, which will return data stored in password (labeled passwordText.value) that will be written in the password ID in html - the password box.
      
      //.value gets/sets value of html element - in this case the password is the value set in the password ID in html.  
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




