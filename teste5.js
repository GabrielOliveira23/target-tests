const string = "Uma string qualquer";
let invertedString = "";

for (let i = string.length - 1; i >= 0; i--) {
  invertedString += string[i];
}

console.log(invertedString);

