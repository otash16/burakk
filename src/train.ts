// function convertToSnakeCase(input: string): string {
//   return input.trim().toLowerCase().replace(/\s+/g, "_");
// }

// console.log(convertToSnakeCase("name should be a string"));



//TASK ZH#

function findDisappearedNumbers(input: number[]): number[] {
  const largestNum = Math.max(...input);

  let newArr: number[] = [];
  for (let i = 1; i <= largestNum; i++) {
    newArr.push(i);
  }

  let disappearedNumArr = newArr.filter((number) => !input.includes(number));

  return disappearedNumArr;
}

console.log(findDisappearedNumbers([1, 3, 4, 7]));