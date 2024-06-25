// // J TASk

// function findLongestWord(input: string): string {
//   let words: string[] = input.split(" ");

//   let longestWord: string = "";
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("BATMAN Spiderman  wewewewew"));

// //K-Task

// function countVowels(string: string): number {
//   const vowel = ["a", "e", "i", "o", "u"];
//   let toLovwerCase = string.toLocaleLowerCase();
//   let count = 0;
//   for (let i = 0; i < toLovwerCase.length; i++) {
//     if (vowel.includes(toLovwerCase[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("string"));

// function reverseSentence(string: string): string {
//   let toArray = string.split(" ");
//   let reversedArray = [];

//   for (let i = 0; i < toArray.length; i++) {
//     let output = toArray[i];
//     let reversedString = output.split("").reverse().join("");
//     reversedArray.push(reversedString);
//   }

//   return reversedArray.join(" ").toString();
// }

// console.log(reverseSentence("we like coding"));

interface NumbersObject {
  number: number;
  square: number;
}
function getSquareNumbers(array: number[]): NumbersObject[] {
  let squareNumbers = array.map((ele) => ele * ele);
  let squareNumbersArray: NumbersObject[] = [];

  for (let i = 0; i < array.length; i++) {
    let numbersObject: NumbersObject = {
      number: array[i],
      square: squareNumbers[i],
    };
    squareNumbersArray.push(numbersObject);
  }

  return squareNumbersArray;
}

console.log(getSquareNumbers([1, 2, 3]));
