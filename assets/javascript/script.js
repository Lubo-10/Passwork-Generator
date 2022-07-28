// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const myArrayUpper = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const myArrayLower = Array.from(Array(26)).map((e, i) => i + 97);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

const arrayNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const arraySpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

function generatePassword() {
    var results = "";
    var numberOfCharacters = window.prompt("How many characters would you like your password to contain");
    var characterQuantity = parseInt(numberOfCharacters);
    if (characterQuantity >= 8 && characterQuantity <= 128) {
        var lowerCase = window.confirm("click OK to confirm lowercase letters.");
        var upperCase = window.confirm("Click OK to confirm uppercase letters.");
        var numeric = window.confirm("Click OK to confirm numeric values");
        var specialCharacters = window.confirm("Click OK to confirm special characters");
        var okayButton = [];
        if (upperCase == true) okayButton.push(alphabetUpper);
        if (lowerCase == true) okayButton.push(alphabetLower);
        if (numeric == true) okayButton.push(arrayNumeric);
        if (specialCharacters == true) okayButton.push(arraySpecialCharacters);

        if (upperCase || lowerCase || numeric || specialCharacters) {

            for (var i = 0; i < characterQuantity; i++) {
                var storeButton = Math.floor(Math.random() * okayButton.length);
                var selectedArray = okayButton[storeButton];
                results += selectedArray[Math.floor(Math.random() * selectedArray.length)];
            }
        } else {
            window.alert('This is an invalid entry. Select at least ONE to proceed');
            return generatePassword();
        }
        return results;
    } else {
        window.alert('That is an invalid entry. Type and entry between 8 and 128')
        return generatePassword();
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);