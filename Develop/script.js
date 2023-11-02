// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var length= prompt("How long would you like your password?")
  if (length<8||length>128) {
    alert("Length is out of bounds. Try again")
    return
  }
  var wantsUppercase = confirm("Do you want uppercase characters?")
  var wantsLowercase = confrim("Do you want lowercase characters?")
  var wantsCharacters = confirm("Do you want special characters?")
  var wantsNumbers = confirm("Do you want to add numbers?")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
