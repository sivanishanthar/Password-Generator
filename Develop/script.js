// Assignment code here

// generatePassword function
function generatePassword() {
  //Declaration of variables
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var specialCharacters = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "_",
    "+",
    "=",
    "|",
    "<",
    ">",
    "[",
    "]",
    "(",
    ")",
  ];

  // Get the password length from the user
  passwordLength = parseInt(
    window.prompt(
      "How many characters do you want the password to contain? | This require a number beween 8 and 128"
    )
  );

  //Get the lenght from the user's password and loopin till get the right length
  while (passwordLength > 128 || passwordLength < 8) {
    alert(
      "Password lenght must greater than or equal to 8 and leass than or equal to 128"
    );
    passwordLength = parseInt(
      window.prompt(
        "How many characters do you want the password to contain? | This require a number beween 8 and 128"
      )
    );
  }

  //Get the user choices
  confirmNumber = confirm("Click OK to include numbers in your password:");
  confirmUpperCase = confirm("Click OK to include uppercase in your password:");
  confirmLowerCase = confirm("Click OK to include lowercase in your password:");
  confirmSpecialCharacters = confirm(
    "Click OK to include special characters in your password:"
  );

  //If the user click cancel for all the choices
  if (
    !confirmNumber &&
    !confirmUpperCase &&
    !confirmLowerCase &&
    !confirmSpecialCharacters
  ) {
    alert("You must select or click OK to at least one choice..!");
  }

  // initialize an array for password
  var includeInPassword = [];

  //Getting user choices
  if (confirmNumber) {
    includeInPassword = includeInPassword.concat(numbers);
  }
  if (confirmUpperCase) {
    includeInPassword = includeInPassword.concat(upperCase);
  }
  if (confirmLowerCase) {
    includeInPassword = includeInPassword.concat(lowerCase);
  }
  if (confirmSpecialCharacters) {
    includeInPassword = includeInPassword.concat(specialCharacters);
  }

  //Building password
  var buildPW = [];
  for (var i = 0; i < passwordLength; i++) {
    var randomBuild = Math.floor(Math.random() * includeInPassword.length);
    buildPW.push(includeInPassword[randomBuild]);
  }

  buildPW.toString();
  return buildPW.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Siva Ramachandran | Challenge - 03
