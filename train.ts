function getPositive(arr: number[]): string {
    let newArray = arr.filter((ele) => ele > 0);
    let newString = newArray.join("").toString();
    return newString;
  }
  
  console.log(getPositive([-4, 1, 5]));
  console.log(getPositive([1, 0, 54]));
  console.log(getPositive([-9, 1, -8]));
  