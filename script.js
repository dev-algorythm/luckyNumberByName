// let A,
//   I,
//   J,
//   Q,
//   Y = 1;
// let B,
//   K,
//   R = 2;
// let C,
//   G,
//   L = 3;
// let D,
//   M,
//   T = 4;
// let E,
//   H,
//   N,
//   X = 5;
// let U,
//   V,
//   W = 6;
// let O,
//   Z = 7;
// let F,
//   P = 8;

// let data  = prompt("What is your name?");
let data = "Dhairya Tiwari";

let dataWithoutSpaces = data.replace(/\s/g, "");
let dataCharValue = dataWithoutSpaces.toUpperCase().split("");
console.log(dataCharValue);

var blankArr = [];

for (i = 0; i < dataCharValue.length; i++) {
  // for A I J Q Y || 1
  if (
    dataCharValue[i] == "A" ||
    dataCharValue[i] == "I" ||
    dataCharValue[i] == "J" ||
    dataCharValue[i] == "Q" ||
    dataCharValue[i] == "Y"
  ) {
    console.log((dataCharValue[i] = 1));
  }

  // for B K R || 2
  else if (
    dataCharValue[i] == "B" ||
    dataCharValue[i] == "K" ||
    dataCharValue[i] == "R"
  ) {
    console.log((dataCharValue[i] = 2));
  }

  // for C G L || 3
  else if (
    dataCharValue[i] == "C" ||
    dataCharValue[i] == "G" ||
    dataCharValue[i] == "L" ||
    dataCharValue[i] == "S"
  ) {
    console.log((dataCharValue[i] = 3));
  }

  // for D M T || 4
  else if (
    dataCharValue[i] == "D" ||
    dataCharValue[i] == "M" ||
    dataCharValue[i] == "T"
  ) {
    console.log((dataCharValue[i] = 4));
  }

  // for E H N X || 5
  else if (
    dataCharValue[i] == "E" ||
    dataCharValue[i] == "H" ||
    dataCharValue[i] == "N" ||
    dataCharValue[i] == "X"
  ) {
    console.log((dataCharValue[i] = 5));
  }

  // for U V W || 6
  else if (
    dataCharValue[i] == "U" ||
    dataCharValue[i] == "V" ||
    dataCharValue[i] == "W"
  ) {
    console.log((dataCharValue[i] = 6));
  }

  // for O Z || 7
  else if (dataCharValue[i] == "O" || dataCharValue[i] == "Z") {
    console.log((dataCharValue[i] = 7));
  }

  // for F P || 8
  else if (dataCharValue[i] == "F" || dataCharValue[i] == "P") {
    console.log((dataCharValue[i] = 8));
  }

  blankArr.push(dataCharValue[i]);
}

let charValueArr = this.blankArr;

console.log(charValueArr);

let charValueSum = 0;

for (let i = 0; i < charValueArr.length; i++) {
  charValueSum += charValueArr[i];
}
console.log(charValueSum);

let finalVal = 0;
for (let i = 9; finalVal <= i; i++) {
  if (charValueSum > 9) {
    let againSum = charValueSum.toString().split("").map(Number);
    console.log(againSum);

    for (i = 0; i < againSum.length; i++) {
      finalVal += againSum[i];
    }
    console.log(finalVal);
  }
}

// let finalVal = charValueSum;

// while (finalVal > 9) {
//   let againSum = finalVal.toString().split("").map(Number);
//   finalVal = 0; // Reset finalVal before recalculating

//   // Recalculate the sum of digits
//   for (let i = 0; i < againSum.length; i++) {
//     finalVal += againSum[i];
//   }
// }

// console.log(finalVal);
