/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

// function canPartition(arr) {

//   for (let i = 0; i < arr.length; i++) {
//     let multi = 1
//     let num = arr[i];

//     for (let j = 0; j < arr.length; j++) {
//       multi *= arr[j];
//     }
//     multi = Math.ceil(multi / num)
//     if (num === multi) {
//       return true;
//     }
//   }
//   return false;

// }
function canPartition(arr) {

  for (let i = 0; i < arr.length; i++) {
    let multi = 1
    let num = arr[i];

    for (let j = 0; j < arr.length; j++) {
      if (j != i) {
        multi *= arr[j];
      }
    }

    if (num === multi) {
      return true;
    }
  }
  return false;

}

exports.solution = canPartition;