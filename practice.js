//Given an array of integers, find the sum of its elements.

//For example, if the array [1,2,3], 1 + 2 + 3, so return 6.

function simpleArraySum(ar) {
  let sum = 0;
  for(let i = 0; i < ar.length; i++){
    sum += ar[i]
  }
  return sum;
}

//In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
  let bigSum = 0
  for(let i = 0; i < ar.length; i++){
    bigSum += ar[i]
  }
  return BigInt(bigSum);
}

/* 
   Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

   The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

   The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

   If a[i] > b[i], then Alice is awarded 1 point.
   If a[i] < b[i], then Bob is awarded 1 point.
   If a[i] = b[i], then neither person receives a point.
   Comparison points is the total points a person earned.

   Given a and b, determine their respective comparison points.
*/

function compareTriplets(a, b) {
  //return integer arr as result
  let result = [];
  let aScore = 0;
  let bScore = 0;
  for (let i = 0; i < a.length; i++){
    if(a[i] > b[i]){
      aScore++;
    } else if (a[i] === b[i]){
      continue;
    } else {
      bScore++;
    }
  }
  result.push(aScore, bScore)
  return result;
}

/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 15. The right to left diagonal = 17. Their absolute difference is 2. |15-17| = 2
*/

//**JS doesnt support 2d arrays** Solution below isnt working but is close. Discussions section mentioned something about array of strings and .split() ?

function diagonalDifference(arr) {
  let d1 = 0;
  let d2 = 0;
  let diff = Math.abs(d1 - d2)
  
  for (let i = 0; i < arr.length; i++){
    //primary diag top left to bottom right (arr[0][0], arr[1][1], arr[2][2])
    d1 += arr[i][i]
    //secondary diag top right to bottom left (arr[0][2], arr[1][1], arr[2][0])
    d2 += arr[i][arr.length - 1 - i]
  } 
  return diff;
}

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeroes = 0;
  let pRatio, nRatio, zRatio;
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      positives++;
    } else if(arr[i] === 0){
      zeroes++; 
    } else {
      negatives++;
    }
  }
  pRatio = parseFloat((positives/arr.length).toPrecision(7));
  nRatio = parseFloat((negatives/arr.length).toPrecision(7));
  zRatio = parseFloat((zeroes/arr.length).toPrecision(7));

  console.log(pRatio)
  console.log(nRatio)
  console.log(zRatio)
}
