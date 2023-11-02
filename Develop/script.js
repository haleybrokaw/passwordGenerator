// Assignment Code
var enter;
var numbers= [1,2,3]
var characters= ["!", "@", "#"]
var uppercase= ["A", "B", "C"]
var lowercase= ["a", "b", "c"]
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var options= []
  var length= prompt("How long would you like your password?")
  if (length<8||length>128) {
    alert("Length is out of bounds. Try again")
    return
  }
  var wantsUppercase = confirm("Do you want uppercase characters?")
  var wantsLowercase = confirm("Do you want lowercase characters?")
  var wantsCharacters = confirm("Do you want special characters?")
  var wantsNumbers = confirm("Do you want to add numbers?")
  if (wantsUppercase === true){
    options= options.concat(uppercase)
  }
  if (wantsLowercase === true){
    options= options.concat(lowercase)
  }
  if (wantsCharacters === true){
    options=options.concat(characters)
  }
  if (wantsNumbers === true){
    options=options.concat(numbers)
  }
  var password=""
  for (var i=0;i<length;i++){
    var randomChar= options[Math.floor(Math.random()*options.length)]
    password=password+randomChar
  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
