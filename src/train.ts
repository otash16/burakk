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