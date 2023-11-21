// Assignment code here

// generatePassword function
function generatePassword() {
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
  const passwordLength = parseInt(
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

  //number - A | uppercase - B | lowercase - C | sspecial character - D

  //User select all the choices ABCD
  if (
    confirmNumber &&
    confirmUpperCase &&
    confirmLowerCase &&
    confirmSpecialCharacters
  ) {
    includeInPassword = concat(
      numbers,
      upperCase,
      lowerCase,
      specialCharacters
    );
  }
  //User select number, uppercase, and lowercase ABC
  else if (confirmNumber && confirmUpperCase && confirmLowerCase) {
    includeInPassword = concat(numbers, upperCase, lowerCase);
  }
  //User select number, upppercase, and special characters ABD
  else if (confirmNumber && confirmUpperCase && confirmSpecialCharacters) {
    includeInPassword = concat(numbers, upperCase, specialCharacters);
  }
  //User select number, lowercase, and special characters ACD
  else if ((confirmNumber, confirmLowerCase, confirmSpecialCharacters)) {
    includeInPassword = concat(numbers, lowerCase, specialCharacters);
  }
  //User select uppercase, lowercase, and special characters BCD
  else if ((confirmUpperCase, confirmLowerCase, confirmSpecialCharacters)) {
    includeInPassword = concat(upperCase, lowerCase, specialCharacters);
  }
  //User select number, and uppercase AB
  else if (confirmNumber && confirmUpperCase) {
    includeInPassword = concat(numbers, upperCase);
  }
  //User select number and lowercase AC
  else if (confirmNumber && confirmLowerCase) {
    includeInPassword = concat(numbers, lowerCase);
  }
  //User select number and special characters AD
  else if (numbers && specialCharacters) {
    includeInPassword = concat(numbers, specialCharacters);
  }
  //User slect uppercase and lowercase BC
  else if (confirmLowerCase && confirmUpperCase) {
    includeInPassword = concat(upperCase, lowerCase);
  }
  //User select uppercase and special characters BD
  else if (confirmUpperCase && confirmSpecialCharacters) {
    includeInPassword = concat(upperCase, specialCharacters);
  }
  //User select lowercase and special character CD
  else if (confirmLowerCase && confirmSpecialCharacters) {
    includeInPassword = concat(lowerCase, specialCharacters);
  }
  //User select number only A
  else if (confirmNumber) {
    includeInPassword = concat(numbers);
  }
  //User select uppercase only B
  else if (confirmUpperCase) {
    includeInPassword = concat(upperCase);
  }
  //User select lowercase C
  else if (confirmLowerCase) {
    includeInPassword = concat(lowerCase);
  }
  //User select special character only D
  else {
    includeInPassword = concat(specialCharacters);
  }

  var buildPW = [];
  for(var i = 0; i < passwordLength; i++){
    var randomBuild = Math.floor(Math.random() * includeInPassword.length);
    buildPW.push(randomBuild);
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
