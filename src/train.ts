// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// interface T {
//   [key: string]: any;
// }

// function objectToArray(obj: T): any[] {
//   const result1 = Object.keys(obj).map((key) => [key, obj[key]]);
//   return result1;
// }

// console.log(objectToArray({ a: 10, b: 20 }));

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(array: any[]): number {
//   let arrayNumber: number[] = [];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       arrayNumber.push(array[i]);
//     }
//   }

//   const sum = arrayNumber.reduce((acc, cur) => acc + cur, 0);
//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
// console.log(calculateSumOfNumbers(["10", { son: 10 }, true]));

// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(string: string): boolean {
//   let toLowerCase = string.toLocaleLowerCase();
//   let reversedString = toLowerCase.split("").reverse().join("");
//   // if (string === reversedString) {
//   //   return true;
//   // } else return false;

//   const result = toLowerCase === reversedString ? true : false;
//   return result;
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));
// console.log(palindromCheck("mom"));
// console.log(palindromCheck("Aziza"));
// console.log(palindromCheck("MiT"));

// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// interface NumbersObject {
//   number: number;
//   square: number;
// }

// function getSquareNumbers(array: number[]): NumbersObject[] {
//   let squareNumbers = array.map((ele) => ele * ele);
//   let squareNumbersArray: NumbersObject[] = [];

//   for (let i = 0; i < array.length; i++) {
//     let numbersObject: NumbersObject = {
//       number: array[i],
//       square: squareNumbers[i],
//     };
//     squareNumbersArray.push(numbersObject);
//   }

//   return squareNumbersArray;
// }

// console.log(getSquareNumbers([1, 2, 3]));
// console.log(getSquareNumbers([4, 20, 7]));
// console.log(getSquareNumbers([10, 23, 39]));

// L-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

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
// console.log(reverseSentence("I study in MIT12"));

// K-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(string: string): number {
//   const vowelsArray = ["a", "e", "i", "o", "u"];
//   let toLovwerCase = string.toLocaleLowerCase();
//   let count = 0;

//   for (let i = 0; i < toLovwerCase.length; i++) {
//     if (vowelsArray.includes(toLovwerCase[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("string"));
// console.log(countVowels("striang"));
// console.log(countVowels("MIT"));

// J-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

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

// console.log(findLongestWord("I come from Uzbekistan"));
// console.log(findLongestWord("I study in MIT"));

// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function majorityElement(arr: number[]): number {
//   let objectFrequency: { [key: number]: number } = {};

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (objectFrequency[num]) {
//       objectFrequency[num]++;
//     } else {
//       objectFrequency[num] = 1;
//     }
//   }

//   let maxCount = 0;
//   let majorityElement: number | null = null;
//   for (let num in objectFrequency) {
//     if (objectFrequency[num] > maxCount) {
//       maxCount = objectFrequency[num];
//       majorityElement = parseInt(num);
//     }
//   }

//   return majorityElement!;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));
// console.log(majorityElement([1, 2, 3, 4, 3, 3, 2, 1, 9, 5, 4, 3, 4]));

/* Project Standards:
- Logging standards
- Naming standards
    functions, methods, variables => CAMEL
    class                         => PASCAL
    folders                       => KEBAB
    css                           => SNAKE
- Error handlings
*/

/* 
Traditional API
Rest API
GraphQL API
...
*/

// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(a: string): string {
//   let digitArray = [];
//   for (let i = 0; i < a.length; i++) {
//     let letter = a[i];
//     if (!isNaN(parseInt(letter))) {
//       digitArray.push(letter);
//     }
//   }

//   return digitArray.join("").toString();
// }

// console.log(getDigits("m14i1t"));
// console.log(getDigits("m14i1trw23dhs7"));

// H-TASK:

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"
// function getPositive(arr: number[]): string {
//   let newArray = arr.filter((ele) => ele > 0);
//   let newString = newArray.join("").toString();
//   return newString;
// }

// console.log(getPositive([1, -4, 2]));
// console.log(getPositive([18, -43, -2]));
// console.log(getPositive([19, 14, -2]));
// console.log(getPositive([11, -4, 102]));

// G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// function getHighestIndex(arr) {
//   if (Array.isArray(arr)) {
//     let max = arr[0];
//     let maxIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//         maxIndex = i;
//       }
//     }
//     return maxIndex;
//   } else {
//     return "please insert array";
//   }
//   //   let maxIndex = arr.indexOf(Math.max(...arr));
//   //   return maxIndex;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));
// console.log(getHighestIndex([5, 9, 12, 21, 8]));
// console.log(getHighestIndex([5, 9, 12, 0, 1]));
// console.log(getHighestIndex([5, 9, 12, 0, 1, 48, 50, 23, 1000]));
// console.log(getHighestIndex("hi"));
// interface T {
//   [key: string]: any;
// }
// function hasProperty(objInput: T, strInput: string): boolean {
//   const objKeys = Object.keys(objInput);
//   //   console.log(objKeys);
//   const result = objKeys.includes(strInput) ? true : false;
//   return result;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));



// function calculate(input: string): number {
//   const newArray = Array.from(input, (char) => Number(char));
//   const arrNumber = newArray.filter((num) => !isNaN(num));
//   const result = arrNumber.reduce((acc, curr) => acc + curr, 0);
//   return result;
// }
// console.log(calculate("1+1"));


// function missingNumber(arr: number[]): number {
//   const n = arr.length;
//   const total = (n * (n + 1)) / 2;
//   const actual = arr.reduce((sum, num) => sum + num, 0);
//   return total - actual;
// }
// console.log(missingNumber([3, 0, 1])); 

// function sumOdds(input: number): number {
//   let sumOdd = 0;
//   for (let i = 0; i < input; i++) {
//     if (i % 2 !== 0) {
//       sumOdd++;
//     }
//   }

//   return sumOdd;
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));
// console.log(sumOdds(19));

// function chunkArray(input1: number[], input2: number): number[][] {
//   const chunkedArray: number[][] = [];
//   for (let i = 0; i < input1.length; i += input2) {
//     const chunk: number[] = input1.slice(i, i + input2);
//     chunkedArray.push(chunk);
//   }
//   return chunkedArray;
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))}
interface T {
  [key: string]: any;
}
function countOccurrences(obj: T, key: string): number {
  let count = 0;
  function recurse(obj: T): void {
    if (typeof obj === "object" && obj !== null) {
      for (const k in obj) {
        if (k === key) {
          count++;
        }
        recurse(obj[k]);
      }
    }
  }
  recurse(obj);
  return count;
}
console.log(
  countOccurrences(
    { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
    "model"
  )
);