// function largest(arr) {
//   let max = arr[0];

//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }

//   return max;
// }

// console.log(largest([2, 8, 4, 10]));



// function largest(arr) {
//   return Math.max(...arr);
// }

// console.log(largest([2, 8, 4, 10]));

function largest(arr) {
  return Math.min(...arr);
}

console.log(largest([20, 80, 4, 10]));
