// function convertToSnakeCase(input: string): string {
//   return input.trim().toLowerCase().replace(/\s+/g, "_");
// }

// console.log(convertToSnakeCase("name should be a string"));



//TASK ZH#

// function findDisappearedNumbers(input: number[]): number[] {
//   const largestNum = Math.max(...input);

//   let newArr: number[] = [];
//   for (let i = 1; i <= largestNum; i++) {
//     newArr.push(i);
//   }

//   let disappearedNumArr = newArr.filter((number) => !input.includes(number));

//   return disappearedNumArr;
// }

// console.log(findDisappearedNumbers([1, 3, 4, 7]));


// function delayHelloWorld(input: string): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(input);
//     }, 3000);
//   });
// }

// delayHelloWorld("Hello World").then((result) => {
//   console.log(result);
// });

// function nestedArray(arr: (number | (number | any[])[])[]): number {
//   let a = 0;
//   for (const element of arr) {
//     if (Array.isArray(element)) {
//       a += nestedArray(element);
//     } else {
//       a += element;
//     }
//   }
//   return a;
// }


function printNumbers() {
  let number = 1;
  const intervalNumber = setInterval(() => {
    console.log(number);
    if (number === 5) {
      clearInterval(intervalNumber);
    }
    number++;
  }, 1000);
}

printNumbers();