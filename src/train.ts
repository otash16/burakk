// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

function changeNumberInArray(
  index: number,
  array: number[],
  newValue: number
): number[] {
  let newArray: number[] = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      newArray[i] = newValue;
    } else {
      newArray[i] = array[i];
    }
  }

  return newArray;
}

console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));
console.log(changeNumberInArray(3, [1, 3, 7, 2], 50));

// ZC-TASK:

// Shunday function yozing, uni number parametri bolsin va function parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

// function celsiusToFahrenheit(input: number): number {
//   return input * (9 / 5) + 32;
// }

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(2));
// console.log(celsiusToFahrenheit(89));

// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomBetween(30, 50));

// Z-TASK:

// Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2

// function sumEvens(arr: number[]): number {
//   const evenNumbers = arr.filter((ele) => {
//     return ele % 2 === 0;
//   });

//   return evenNumbers.reduce((a, b) => a + b);
// }

// console.log(sumEvens([1, 2, 3]));
// console.log(sumEvens([1, 2, 4, 6, 8]));

// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   const newArray = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       newArray.push(arr1[i]);
//     }
//   }
//   return newArray;
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));
// console.log(findIntersection([1, 2, 3], [3, 4, 1]));

// X-TASK:

//  Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2
interface T {
  [key: string]: any;
}

// function countOccurrences(obj: T, key: string): number {
//   let count = 0;

//   function recurse(obj: T): void {
//     if (typeof obj === "object" && obj !== null) {
//       for (const k in obj) {
//         if (k === key) {
//           count++;
//         }
//         recurse(obj[k]);
//       }
//     }
//   }

//   recurse(obj);
//   return count;
// }

// console.log(
//   countOccurrences(
//     { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//     "model"
//   )
// );

// console.log(
//   countOccurrences(
//     { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//     "mode"
//   )
// );

// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray(input1: number[], input2: number): number[][] {
//   const chunkedArray: number[][] = [];
//   for (let i = 0; i < input1.length; i += input2) {
//     const chunk: number[] = input1.slice(i, i + input2);
//     chunkedArray.push(chunk);
//   }
//   return chunkedArray;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

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

// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(input1: number[], input2: number[]): number[] {
//   const newArray = input1.concat(input2);
//   const result = newArray.sort((a, b) => a - b);
//   return result;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// console.log(mergeSortedArrays([0, 10, 4, 21], [9, 6, 60]));

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(arr: number[]): number {
//   const n = arr.length;
//   const total = (n * (n + 1)) / 2;
//   const actual = arr.reduce((sum, num) => sum + num, 0);
//   return total - actual;
// }

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([3, 2, 4, 1]));
// console.log(missingNumber([1, 2, 4, 0]));

// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function calculate(input: string): number {
//   const newArray = Array.from(input, (char) => Number(char));

//   const arrNumber = newArray.filter((num) => !isNaN(num));

//   // console.log(newArray);
//   // console.log(arrNumber);
//   const result = arrNumber.reduce((acc, curr) => acc + curr, 0);

//   return result;
// }

// console.log(calculate("1+3"));
// console.log(calculate("1+3+7+7"));
// console.log(calculate("1+3+7+0"));

// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

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
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));
// console.log(hasProperty({ a: "BMW", 3: "M3" }, "3"));
// console.log(hasProperty({ c: "BMW", d: "M3" }, "MIT"));

// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// interface T {
//   [key: string]: any;
// }

// function objectToArray(obj: T): any[] {
//   const result = Object.keys(obj).map((key) => [key, obj[key]]);
//   return result;
// }

// console.log(objectToArray({ a: 10, b: 20 }));
// console.log(objectToArray({ a: "MIT", b: 12 }));

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