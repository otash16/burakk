// H2-TASK:
function getDigits(a: string): string {
  let digitArray = [];
  for (let i = 0; i < a.length; i++) {
    let letter = a[i];
    if (!isNaN(parseInt(letter))) {
      digitArray.push(letter);
    }
  }

  return digitArray.join("").toString();
}


console.log(getDigits("m14i1trw23dhs7"));
