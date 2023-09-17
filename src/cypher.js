const ALPHABETS = [
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

let cypherFunc = (string, index) => {
  while (index > 24) {
    index = index - 26;
  }
  while (index < -24) {
    index = index + 26;
  }
  if (index === 0 || index === -26) return string;
  let inputString = string.toUpperCase();
  let returnString = "";
  for (let char of inputString) {
    let indexOfChar = ALPHABETS.indexOf(char);
    let newIndex = indexOfChar + index;
    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }
    returnString += ALPHABETS[newIndex];
  }
  return returnString.toLowerCase();
};

module.exports = cypherFunc;
