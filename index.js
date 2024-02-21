const output = document.getElementById("output");
const generate = document.querySelector(".btn");

function createPassword() {
  const lettersInput = document.getElementById("letters-amount").value;
  const numbersInput = document.getElementById("numbers-amount").value;
  const symbolsInput = document.getElementById("symbols-amount").value;
  console.log(lettersInput, numbersInput, symbolsInput);
  const letters = [
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
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  let password = [];
  let passwordString = [];
  for (let i = 0; i < lettersInput; i++) {
    const randomNum = Math.floor(Math.random() * letters.length);
    password.push(letters[randomNum]);
  }
  for (let j = 0; j < numbersInput; j++) {
    const randomNum = Math.floor(Math.random() * numbers.length);
    password.push(numbers[randomNum]);
  }
  for (let k = 0; k < symbolsInput; k++) {
    const randomNum = Math.floor(Math.random() * symbols.length);
    password.push(symbols[randomNum]);
  }
  const passwordLen = password.length;
  for (let e = 0; e < passwordLen; e++) {
    const randomNum = Math.floor(Math.random() * password.length);
    console.log(password);
    console.log(passwordString);
    passwordString.push(password[randomNum]);
    password.splice(randomNum, 1);
  }
  console.log(passwordString.join(""));
  output.value = passwordString.join("");
}

generate.addEventListener("click", createPassword);

// const letters = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
