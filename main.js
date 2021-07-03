let Phrase = require("mhartl-palindrome");

let string = prompt("Please enter the string for palindrome:")
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`${phrase.content} is a palindrome`);
} else {
  alert(`${phrase.content} is a non-palindrome`);
}
