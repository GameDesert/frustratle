var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let wordlist = JSON.parse(this.responseText);
            writeToWordlist(wordlist);
            startGame();
        }
    }
xmlhttp.open("GET", "wordlist.json", true);
xmlhttp.send();


const colour_YELLOW = "fccf05";
const colour_GREEN = "05fc57";
let wordlist = {}
let word = ""
let shareout = []

function genShareout() {
    console.log(document.getElementById("r1c1td").style.backgroundColor)
    if (document.getElementById("r1c1td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r1c1td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r1c1td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r1c2td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r1c2td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r1c2td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r1c3td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r1c3td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r1c3td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r1c4td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r1c4td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r1c4td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r1c5td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r1c5td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r1c5td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    shareout.push('<br>');
    if (document.getElementById("r2c1td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r2c1td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r2c1td").style.backgroundColor == "") {
        shareout.push('⬛');
    }

    if (document.getElementById("r2c2td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r2c2td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r2c2td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r2c3td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r2c3td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r2c3td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r2c4td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r2c4td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r2c4td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r2c5td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r2c5td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r2c5td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    shareout.push('<br>');
    if (document.getElementById("r3c1td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
     } else if (document.getElementById("r3c1td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r3c1td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r3c2td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r3c2td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r3c2td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r3c3td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r3c3td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r3c3td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r3c4td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r3c4td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r3c4td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r3c5td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r3c5td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r3c5td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    shareout.push('<br>');
    if (document.getElementById("r4c1td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r4c1td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r4c1td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r4c2td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r4c2td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r4c2td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r4c3td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r4c3td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r4c3td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r4c4td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r4c4td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r4c4td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r4c5td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r4c5td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r4c5td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    shareout.push('<br>');
    if (document.getElementById("r5c1td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r5c1td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r5c1td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r5c2td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r5c2td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r5c2td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r5c3td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r5c3td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r5c3td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r5c4td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r5c4td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r5c4td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r5c5td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r5c5td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r5c5td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    shareout.push('<br>');
    if (document.getElementById("r6c1td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r6c1td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r6c1td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r6c2td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r6c2td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r6c2td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r6c3td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r6c3td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r6c3td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r6c4td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r6c4td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r6c4td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    if (document.getElementById("r6c5td").style.backgroundColor == "rgb(5, 252, 87)") {
        shareout.push('🟩');
    } else if (document.getElementById("r6c5td").style.backgroundColor == "rgb(252, 207, 5)") {
        shareout.push('🟨');
    } else if (document.getElementById("r6c5td").style.backgroundColor == "") {
        shareout.push('⬛');
    }
    shareout.push('<br>');
    
    unhideElement("shareSheet");
    document.getElementById("shareoutput").innerHTML = shareout.join("");
}

function writeToWordlist(wordlistinput) {
    wordlist = wordlistinput
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let passwordSubmissions = 0

function hideElement(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById(id).setAttribute("aria-hidden","true");
    document.getElementById(id).setAttribute("hidden","true");
}

function unhideElement(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.visibility = "visible";
    document.getElementById(id).setAttribute("aria-hidden","false");
    document.getElementById(id).removeAttribute("hidden");
}

/* GAME CONTROLS */

function chooseInput() {
    inputMethod = inputMethods[Math.floor(Math.random()*inputMethods.length)];
    if (inputMethod == "rotaryPhoneDIV") {
        unhideElement("rotaryPhoneDIV")
        hideElement("randomLetter")
        hideElement("binaryInput")
        hideElement("passwordKeyboard")
        hideElement("slider")
        hideElement("scramble")
        hideElement("higherlower")
        hideElement("keyboardContainer")
        hideElement("passwordInput")
    } else if (inputMethod == "randomLetter") {
        hideElement("rotaryPhoneDIV")
        unhideElement("randomLetter")
        hideElement("binaryInput")
        hideElement("passwordKeyboard")
        hideElement("slider")
        hideElement("scramble")
        hideElement("higherlower")
        hideElement("keyboardContainer")
        hideElement("passwordInput")
    } else if (inputMethod == "binaryInput") {
        hideElement("rotaryPhoneDIV")
        hideElement("randomLetter")
        unhideElement("binaryInput")
        hideElement("passwordKeyboard")
        hideElement("slider")
        hideElement("scramble")
        hideElement("higherlower")
        hideElement("keyboardContainer")
        hideElement("passwordInput")
    } else if (inputMethod == "passwordKeyboard") {
        hideElement("rotaryPhoneDIV")
        hideElement("randomLetter")
        hideElement("binaryInput")
        unhideElement("passwordKeyboard")
        hideElement("slider")
        hideElement("scramble")
        hideElement("higherlower")
        hideElement("keyboardContainer")
        unhideElement("passwordInput")
    } else if (inputMethod == "slider") {
        hideElement("rotaryPhoneDIV")
        hideElement("randomLetter")
        hideElement("binaryInput")
        hideElement("passwordKeyboard")
        unhideElement("slider")
        hideElement("scramble")
        hideElement("higherlower")
        hideElement("keyboardContainer")
        hideElement("passwordInput")
    } else if (inputMethod == "scramble") {
        hideElement("rotaryPhoneDIV")
        hideElement("randomLetter")
        hideElement("binaryInput")
        hideElement("passwordKeyboard")
        hideElement("slider")
        unhideElement("scramble")
        hideElement("higherlower")
        hideElement("keyboardContainer")
        hideElement("passwordInput")
        scrambleKeyboard()
    } else if (inputMethod == "higherlower") {
        hideElement("rotaryPhoneDIV")
        hideElement("randomLetter")
        hideElement("binaryInput")
        hideElement("passwordKeyboard")
        hideElement("slider")
        hideElement("scramble")
        unhideElement("higherlower")
        hideElement("keyboardContainer")
        hideElement("passwordInput")
    }
}

let currentLevel = 1
let enteredLetters = []
const inputMethods = ["rotaryPhoneDIV","randomLetter","binaryInput","passwordKeyboard","slider","scramble","higherlower"]
let inputMethod = ""

/*function debug() {
    console.log("DEBUG PRINTOUT:")
    console.log(`Current word: ${word}`)
    console.log(`Current letters: ${enteredLetters}`)
    console.log(`Current level: ${currentLevel}`)
    console.log(`Current input method: ${inputMethod}`)
}*/

function endGame() {
    document.getElementById("keyboardContainer").remove();
    document.getElementById("rotaryPhoneDIV").remove();
    document.getElementById("randomLetter").remove();
    document.getElementById("binaryInput").remove();
    document.getElementById("passwordKeyboard").remove();
    document.getElementById("slider").remove();
    document.getElementById("scramble").remove();
    document.getElementById("higherlower").remove();

    document.getElementById(`r${currentLevel}c1td`).style.backgroundColor = `#${colour_GREEN}`;
    document.getElementById(`r${currentLevel}c2td`).style.backgroundColor = `#${colour_GREEN}`;
    document.getElementById(`r${currentLevel}c3td`).style.backgroundColor = `#${colour_GREEN}`;
    document.getElementById(`r${currentLevel}c4td`).style.backgroundColor = `#${colour_GREEN}`;
    document.getElementById(`r${currentLevel}c5td`).style.backgroundColor = `#${colour_GREEN}`;

    genShareout();
}

function backspace() {
    enteredLetters.pop();
    updateOutput();
}

function checkLetters(enteredLetters_cL) {
    if (enteredLetters_cL.join("") == word) {
        endGame();
        /*console.log("FULL WORD");*/
    } else {
        /*console.log("NOT FULL WORD");*/
        let wordToCheck = word.split("");
        /*console.log(wordToCheck);*/
        for (let currentChar = 0; currentChar < enteredLetters.length;) {
            if (enteredLetters_cL[currentChar] == wordToCheck[currentChar]) {
                wordToCheck[currentChar] = "*";
                enteredLetters_cL[currentChar] = "*";
                document.getElementById(`r${currentLevel}c${currentChar+1}td`).style.backgroundColor = `#${colour_GREEN}`;
                /*console.log(wordToCheck);*/
                /*console.log(enteredLetters);*/
            }
            currentChar += 1;
        }

        for (let currentChar = 0; currentChar < enteredLetters.length;) {
            if (enteredLetters_cL[currentChar] !== "*") {
                if (wordToCheck.indexOf(enteredLetters_cL[currentChar]) !== -1) {
                    wordToCheck[wordToCheck.indexOf(enteredLetters_cL[currentChar])] = "*";
                    enteredLetters_cL[currentChar] = "*";
                    /*console.log(wordToCheck);*/
                    /*console.log(enteredLetters);*/

                    document.getElementById(`r${currentLevel}c${currentChar+1}td`).style.backgroundColor = `#${colour_YELLOW}`;
                }
            }
            currentChar += 1;
        }
    }
}

function enter() {
    if (enteredLetters.length == 5 && currentLevel < 6) {
        checkLetters(enteredLetters);
        enteredLetters = [];
        currentLevel += 1;
        chooseInput();
    } else if (enteredLetters.length == 5 && currentLevel == 5) {
        checkLetters();
    }
}

function updateOutput() {
    for (let uo_column = 0; uo_column < 5;) {
        if (uo_column < enteredLetters.length) {
            letterToChange = enteredLetters[uo_column]
        } else {
            letterToChange = "";
        }

        document.getElementById(`r${currentLevel}c${uo_column+1}`).innerHTML = letterToChange.toUpperCase();
        uo_column = uo_column + 1
    }
}

function submitLetter(letter) {
    if (enteredLetters.length < 5) {
        enteredLetters.push(letter);
        updateOutput();
    } else {
        /*console.log(`Error, cannot push ${letter} to array, array already has ${enteredLetters.length} letters.`);*/
        updateOutput();
    }
}

function refresh() {
    if (confirm("Are you sure you would like to refresh and generate a new puzzle?") == true) {
        window.location.reload(true)
    }
}

function startGame() {
    currentLevel = 1;
    enteredLetters = [];
    word = wordlist[Math.floor(Math.random()*Object.keys(wordlist).length)];
    chooseInput();
}




/*Rotary Phone*/

const rotaryletters = document.getElementById("rotaryletters");
function rotarySubmitLetters(id) {
    if (document.getElementById("rotaryletters").style.transform == "rotate(-41.25deg)") {
        var letterAngles = {"home":-41.25,"a":19,"b":30.25,"c":41.5,"d":52.75,"e":64,"f":75.25,"g":86.5,"h":97.75,"i":109,"j":120.25,"k":131.5,"l":142.75,"m":154,"n":165.25,"o":176.5,"p":187.75,"q":199,"r":210.25,"s":221.5,"t":232.75,"u":244,"v":255.25,"w":266.5,"x":277.75,"y":289,"z":300.25,"enter":311.5}
        var rotaryletters = document.getElementById("rotaryletters");
        var rotletter = id;
        rotaryletters.style.transition = `5s`;
        rotaryletters.style.transform = `rotate(${letterAngles[id]}deg)`;
        sleep(5000).then(() => {
            /*console.log(rotletter);*/
            submitLetter(rotletter);
            rotaryletters.style.transition = "1s";
            rotaryletters.style.transform = "rotate(-41.25deg)";
        })
    }
}

/*Random Letter*/

const randomLetter = document.getElementById("randomLetter");
function pickRandomLetter() {
    const randomLetterOutput = document.getElementById("randomLetterOutput");
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    randomLetterOutput.innerHTML = randomLetter;
    randomLetterOutput.setAttribute("data-letter",randomLetter);
}
function submitRandomLetter() {
    const randomLetterOutput = document.getElementById("randomLetterOutput");
    submitLetter(randomLetterOutput.dataset.letter)
}

/*Binary Input*/
function convertFromBinary() {
    const binToAlphabet = {
        "01100001": "a",
        "01100010": "b",
        "01100011": "c",
        "01100100": "d",
        "01100101": "e",
        "01100110": "f",
        "01100111": "g",
        "01101000": "h",
        "01101001": "i",
        "01101010": "j",
        "01101011": "k",
        "01101100": "l",
        "01101101": "m",
        "01101110": "n",
        "01101111": "o",
        "01110000": "p",
        "01110001": "q",
        "01110010": "r",
        "01110011": "s",
        "01110100": "t",
        "01110101": "u",
        "01110110": "v",
        "01110111": "w",
        "01111000": "x",
        "01111001": "y",
        "01111010": "z"
    }
    const bin1 = document.getElementById("bin1");
    const bin2 = document.getElementById("bin2");
    const bin4 = document.getElementById("bin4");
    const bin8 = document.getElementById("bin8");
    const bin16 = document.getElementById("bin16");
    const bin32 = document.getElementById("bin32");
    const bin64 = document.getElementById("bin64");
    const bin128 = document.getElementById("bin128");
    var selectedBinary = bin128.value.toString() + bin64.value.toString() + bin32.value.toString() + bin16.value.toString() + bin8.value.toString() + bin4.value.toString() + bin2.value.toString() + bin1.value.toString()
    if (selectedBinary == "01100001" || selectedBinary == "01100010" || selectedBinary == "01100011" || selectedBinary == "01100100" || selectedBinary == "01100101" || selectedBinary == "01100110" || selectedBinary == "01100111" || selectedBinary == "01101000" || selectedBinary == "01101001" || selectedBinary == "01101010" || selectedBinary == "01101011" || selectedBinary == "01101100" || selectedBinary == "01101101" || selectedBinary == "01101110" || selectedBinary == "01101111" || selectedBinary == "01110000" || selectedBinary == "01110001" || selectedBinary == "01110010" || selectedBinary == "01110011" || selectedBinary == "01110100" || selectedBinary == "01110101" || selectedBinary == "01110110" || selectedBinary == "01110111" || selectedBinary == "01111000" || selectedBinary == "01111001" || selectedBinary == "01111010") {
        var selectedLetter = binToAlphabet[selectedBinary]
        submitLetter(selectedLetter);
    } else {
        document.getElementById("randomErrorMessage").innerHTML = "Out of range. Value must be between 01100001 and 01111010 (inclusive).";
        sleep(3000).then(() => {
            document.getElementById("randomErrorMessage").innerHTML = "";
        })
    }
}

/*Password Requirements*/
function typeLetter(letter) {
    submitLetter(letter);
}
function resetPasswordRequirement() {
    passwordSubmissions = 0
}
function checkCapital(stringToCheck) {
    const capitalAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for (let char = 0; char < capitalAlphabet.length; char++) {
        if (stringToCheck.includes(capitalAlphabet[char])) {
            return true
        }
    }
    return false
}
function checkNumber(stringToCheck) {
    const numbers = ["1","2","3","4","5","6","7","8","9","0"]
    for (let char = 0; char < numbers.length; char++) {
        if (stringToCheck.includes(numbers[char])) {
            return true
        }
    }
    return false
}
function checkSymbol(stringToCheck) {
    const symbols = ["!","£","$","%","^","&","*","_","-","+","="]
    for (let char = 0; char < symbols.length; char++) {
        if (stringToCheck.includes(symbols[char])) {
            return true
        }
    }
    return false
}
function checkLower(stringToCheck) {
    const lowerAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for (let char = 0; char < lowerAlphabet.length; char++) {
        if (stringToCheck.includes(lowerAlphabet[char])) {
            return true
        }
    }
    return false
}

function passwordUnlockKeyboard() {
    hideElement("passwordInput");
    unhideElement("keyboardContainer");
}

function submitPassword() {
    passwordSubmissions += 1
    const passwordRequirementField = document.getElementById("passwordRequirementMessage")
    const passwordInputField = document.getElementById("password")
    var requirementMessages = ""
    if (checkSymbol(passwordInputField.value) == false) {
        requirementMessages += "<li>Must contain at least 1 symbol from the following list:<br>! £ $ % ^ & * _ - + =</li>"
    } else if (checkCapital(passwordInputField.value) == false) {
        requirementMessages += "<li>Must contain at least 1 capital letter from the <a href='https://en.wikipedia.org/wiki/Latin_script' target='_blank'>Latin alphabet</a> (A,B,C...).</li>"
    } else if (checkNumber(passwordInputField.value) == false) {
        requirementMessages += "<li>Must contain at least 1 <a href='https://en.wikipedia.org/wiki/Arabic_numerals' target='_blank'>Arabic numeral</a> (1,2,3...).</li>"
    } else if (passwordInputField.value.length < 98) {
        requirementMessages += "<li>Must be 98 characters or more.</li>"
    } else if (passwordInputField.value.length > 100) {
        requirementMessages += "<li>Cannot exceed 100 characters.</li>"
    } else if (checkLower(passwordInputField.value) != false) {
        requirementMessages += "<li>Must not contain any lower case letters from the <a href='https://en.wikipedia.org/wiki/Latin_script' target='_blank'>Latin alphabet</a> (a,b,c...).</li>"
    } else {
        passwordUnlockKeyboard();
    }
    passwordRequirementField.innerHTML = "<ul>" + requirementMessages + "</ul>";
}

/*Scramble*/
const buttonsScramble = {
"a":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='a' class='keyboardGridButton'>a</button>",
"b":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='b' class='keyboardGridButton'>b</button>",
"c":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='c' class='keyboardGridButton'>c</button>",
"d":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='d' class='keyboardGridButton'>d</button>",
"e":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='e' class='keyboardGridButton'>e</button>",
"f":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='f' class='keyboardGridButton'>f</button>",
"g":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='g' class='keyboardGridButton'>g</button>",
"h":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='h' class='keyboardGridButton'>h</button>",
"i":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='i' class='keyboardGridButton'>i</button>",
"j":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='j' class='keyboardGridButton'>j</button>",
"k":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='k' class='keyboardGridButton'>k</button>",
"l":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='l' class='keyboardGridButton'>l</button>",
"m":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='m' class='keyboardGridButton'>m</button>",
"n":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='n' class='keyboardGridButton'>n</button>",
"o":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='o' class='keyboardGridButton'>o</button>",
"p":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='p' class='keyboardGridButton'>p</button>",
"q":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='q' class='keyboardGridButton'>q</button>",
"r":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='r' class='keyboardGridButton'>r</button>",
"s":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='s' class='keyboardGridButton'>s</button>",
"t":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='t' class='keyboardGridButton'>t</button>",
"u":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='u' class='keyboardGridButton'>u</button>",
"v":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='v' class='keyboardGridButton'>v</button>",
"w":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='w' class='keyboardGridButton'>w</button>",
"x":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='x' class='keyboardGridButton'>x</button>",
"y":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='y' class='keyboardGridButton'>y</button>",
"z":"<button onclick='typeLetter(this.id); scrambleKeyboard();' id='z' class='keyboardGridButton'>z</button>"}

function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }

function scrambleKeyboard() {
    let scrambleKeyboardAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    scrambleKeyboardAlphabet = shuffleArray(scrambleKeyboardAlphabet);
    document.getElementById("ScrambleKey1").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[0]]
    document.getElementById("ScrambleKey2").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[1]]
    document.getElementById("ScrambleKey3").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[2]]
    document.getElementById("ScrambleKey4").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[3]]
    document.getElementById("ScrambleKey5").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[4]]
    document.getElementById("ScrambleKey6").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[5]]
    document.getElementById("ScrambleKey7").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[6]]
    document.getElementById("ScrambleKey8").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[7]]
    document.getElementById("ScrambleKey9").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[8]]
    document.getElementById("ScrambleKey10").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[9]]
    document.getElementById("ScrambleKey11").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[10]]
    document.getElementById("ScrambleKey12").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[11]]
    document.getElementById("ScrambleKey13").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[12]]
    document.getElementById("ScrambleKey14").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[13]]
    document.getElementById("ScrambleKey15").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[14]]
    document.getElementById("ScrambleKey16").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[15]]
    document.getElementById("ScrambleKey17").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[16]]
    document.getElementById("ScrambleKey18").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[17]]
    document.getElementById("ScrambleKey19").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[18]]
    document.getElementById("ScrambleKey20").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[19]]
    document.getElementById("ScrambleKey21").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[20]]
    document.getElementById("ScrambleKey22").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[21]]
    document.getElementById("ScrambleKey23").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[22]]
    document.getElementById("ScrambleKey24").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[23]]
    document.getElementById("ScrambleKey25").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[24]]
    document.getElementById("ScrambleKey26").innerHTML = buttonsScramble[scrambleKeyboardAlphabet[25]]
}

/*Slider*/
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const scrambledAlphabet = shuffleArray(alphabet);
function sliderUpdate() {
    const sliderOutput = document.getElementById("sliderOutput")
    const slider = document.getElementById("letterSlider")
    letter = scrambledAlphabet[slider.value]
    sliderOutput.innerHTML = letter;
    sliderOutput.dataset.letter = letter;
}
function submitSlider() {
    const sliderOutput = document.getElementById("sliderOutput")
    submitLetter(sliderOutput.dataset.letter)
}

/*Play Your Letters Right*/
let pylrHighestLetter = 26
let pylrLowestLetter = 0
const alphabetValues = {"a":0,"b":1,"c":2,"d":3,"e":4,"f":5,"g":6,"h":7,"i":8,"j":9,"k":10,"l":11,"m":12,"n":13,"o":14,"p":15,"q":16,"r":17,"s":18,"t":19,"u":20,"v":21,"w":22,"x":23,"y":24,"z":25}
let HLfunctionStop = false
function resetPylr() {
    pylrHighestLetter = 26
    pylrLowestLetter = 0
    HLfunctionStop = false
    document.getElementById("pylrOutput").innerHTML = "a";
    document.getElementById("pylrOutput").dataset.letter = "a";
}
function pylrChange(hl) {
    HLfunctionStop = false
    let HLiterations = 0
    if (hl == "h" && document.getElementById("pylrOutput").dataset.letter != "z") {
        pylrLowestLetter = alphabetValues[document.getElementById("pylrOutput").dataset.letter]
        while (HLfunctionStop == false) {
            var letter = alphabet[Math.floor(Math.random()*alphabet.length)];
            var value = alphabetValues[letter]
            if (HLiterations >= 27) {
                HLfunctionStop = true
                break
            }
            if (value > pylrLowestLetter && value < pylrHighestLetter) {
                document.getElementById("pylrOutput").innerHTML = letter;
                document.getElementById("pylrOutput").dataset.letter = letter;
                HLfunctionStop = true
                break
            }
            HLiterations += 1
        }
    } else if (hl == "l" && document.getElementById("pylrOutput").dataset.letter != "a") {
        pylrHighestLetter = alphabetValues[document.getElementById("pylrOutput").dataset.letter]
        while (HLfunctionStop == false) {
            var letter = alphabet[Math.floor(Math.random()*alphabet.length)];
            var value = alphabetValues[letter]
            if (HLiterations >= 27) {
                HLfunctionStop = true
                break
            }
            if (value > pylrLowestLetter && value < pylrHighestLetter) {
                document.getElementById("pylrOutput").innerHTML = letter;
                document.getElementById("pylrOutput").dataset.letter = letter;
                HLfunctionStop = true
                break
            }
            HLiterations += 1
        }
    }
}

function submitPylr() {
    submitLetter(document.getElementById("pylrOutput").dataset.letter);
    resetPylr();
}