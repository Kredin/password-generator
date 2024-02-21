const output = document.getElementById("output");
const generate = document.querySelector(".btn");

function createPassword() {
  const lettersInput = parseInt(document.getElementById("letters-amount"));
  const numbersInput = parseFloat(document.getElementById("numbers-amount"));
  const symbolsInput = parseFloat(document.getElementById("symbols-amount"));
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
  let password = "";
  for (let i = 0; i < lettersInput; i++) {
    const randomNum = Math.floor(Math.random() * letters.length);
    password = password + letters[randomNum];
    console.log(password);
  }
  for (let j = 0; j < numbersInput; j++) {
    const randomNum = Math.floor(Math.random() * numbers.length);
    password += numbers[randomNum];
    console.log(password);
  }
  for (let k = 0; k < symbolsInput; k++) {
    const randomNum = Math.floor(Math.random() * symbols.length);
    password += symbols[randomNum];
    console.log(password);
  }
  console.log(password);
  output.value = password;
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
