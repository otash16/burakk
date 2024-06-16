//task i
function majorityElement(arr: number[]): number {
  let objectFrequency: { [key: number]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (objectFrequency[num]) {
      objectFrequency[num]++;
    } else {
      objectFrequency[num] = 1;
    }
  }
  let maxCount = 0;
  let majorityElement: number | null = null;
  for (let num in objectFrequency) {
    if (objectFrequency[num] > maxCount) {
      maxCount = objectFrequency[num];
      majorityElement = parseInt(num);
    }
  }
  return majorityElement!;
}

console.log(majorityElement([5,3]));
