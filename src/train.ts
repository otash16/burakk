// J TASk

function findLongestWord(input: string): string {
  let words: string[] = input.split(" ");

  let longestWord: string = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("BATMAN Spiderman  wewewewew"));

//K-Task

function countVowels(string: string): number {
  const vowel = ["a", "e", "i", "o", "u"];
  let toLovwerCase = string.toLocaleLowerCase();
  let count = 0;
  for (let i = 0; i < toLovwerCase.length; i++) {
    if (vowel.includes(toLovwerCase[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("string"));