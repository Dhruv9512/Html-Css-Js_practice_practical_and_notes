function vowels(char) {
  let count = 0;
  for(let c of char){
   
    if (
      (c === "a" &&
      "A") ||
      (c === "e" &&
      "E" )||
      (c === "i" &&
      "I") ||
     ( c === "o" &&
      "O") ||
     (c === "u" &&
      "U")
    ) {
      count++;
    }
  }
  
  return count;
}

let str = prompt("Enter string to find it's vowels:- ");
console.log("The length", str.length);
let numberOfVowels = vowels(str);
console.log(numberOfVowels);
