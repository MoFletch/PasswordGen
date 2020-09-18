// assign character sets to the password criteria - what lowercase letters, uppercase letters, numbers and special characters should be used in the password?
var arrayNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arraySpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code - provided in assignment code clone - document.querySelector goes to the html and finds the first occurance of ID "generate" which is the generate button.
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - provided in assignment code clone - after finding button, when user clicks button in html, the write password function will start
generateBtn.addEventListener("click", writePassword);

//writePassword function launches generatePassword so we need to create a password function that returns info that is stored in password variable and this code must be above writePassword function or it won't start

//prompt for password criteria after clicking #generate html button -- options include password length and character types

// prompt to select length of password and choose 8-128 char and store length of password in passwordLength variable

function generatePassword() {
  var passwordLength = (prompt("Enter length of password. Choose between 8-128 characters."));
  //loop questions if not true
  while (passwordLength <=7 || passwordLength >=129) {
      alert ("You must select a password length between 8-128.  Please try again.");
      var passwordLength = (prompt("Enter length of password. Choose between 8-128 characters."));
    } 
      var confirmLower = confirm("Click OK to select lowercase characters or CANCEL to skip.");
      var confirmUpper = confirm("Click OK to select uppercase characters or CANCEL to skip.");
      var confirmNum = confirm("Click on OK to select numeric characters or CANCEL to skip.");
      var confirmSpecial = confirm("Click OK to select special characters or CANCEL to skip.");
  //verify that all character selections are not false/skipped and at least one character has been selected to use in the password
        while (confirmLower === false && confirmUpper === false && confirmNum === false && confirmSpecial === false) {
          alert("You must choose at least one character option, i.e. Lowercase, Uppercase, Number or Special Character.");
          var confirmLower = confirm("Click OK to select lowercase characters or CANCEL to skip.");
          var confirmUpper = confirm("Click OK to select uppercase characters or CANCEL to skip.");
          var confirmNum = confirm("Click on OK to select numeric characters or CANCEL to skip.");
          var confirmSpecial = confirm("Click OK to select special characters or CANCEL to skip.");
        }
    }
  
//create password by going to character sets and select random characters.  store in finishedPassword. push this to the screen for the user to see.
var password

//stores user selected character arrays
var arrayTotal = []

  // if user selected/confirmed a number, push number
  var arrayNum = [] 
  arrayTotal.push(arrayNum)

  // if user selecgted/confirmed a special character, push special char
  var arraySpecial = []
  arrayTotal.push(arraySpecial)

  // if user selected/confirmed an upper case character, push upper char
  var arrayUpper = []
  arrayTotal.push(arrayUpper)

  //if user selected/confirmd a lowercase char, push lower char
  var arrayLower = []
  arrayTotal.push(arrayLower)

// Loop through our "arrayTotal" which holds all of the arrays that were ".push()" into our "arrayTotal" array (arrayNum, arraySpecial, arrayLower, arrayUpper)
for(var i = 0; i < arrayTotal.length; i++) {
    // this first loop will return each array = [ [arrayNum], [arraySpecial], [arrayUpper] ]
    // this loop will take all of the arrays above in "arrayTotal" and give us each index from each array; an index is the characters in the array; each array counts as 1
    for(var j = 0; j < arrayTotal[i].length; j++) {
        // this second loop will return each index in each array - all characters in one index/bucket
        var finishedArray = arrayTotal[i][j]
            // the two lines below return a random value from all the characters in the finished array
            var randomPass = Math.floor(Math.random() * finishedArray.length)
            finishedPassword = finishedArray[randomPass]
        // return the finished random password to the var at the top of the script and allow us to send it to the front end to display
        console.log(finishedPassword) // random password back
    }
}

// Write password to the #password input - provided in assignment code clone; moved from top to bottom.  Reads from top to bottom. writePassword will be launched after clicking button, which will launch generatePassword function, which will return data stored in password (labeled passwordText.value) that will be written in the password ID in html - the password box.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//.value gets/sets value of html element - in this case the password is the value set in the password ID in html.
  passwordText.value = password;

}
