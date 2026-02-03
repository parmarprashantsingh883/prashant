// function findDuplicates(arr) {
//   return [...new Set(
//     arr.filter((item, index) => arr.indexOf(item) !== index)
//   )];
// }

// console.log(findDuplicates([1,2,3,2,4,5,1,6]));


// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1,2,2,3,4,4,5]));

// function removeDuplicates(arr) {
//   let result = [];

//   for (let num of arr) {
//     if (!result.includes(num)) {
//       result.push(num);
//     }
//   }

//   return result;
// }
// function countElements(arr) {
//   const count = {};

//   for (let item of arr) {
//     count[item] = (count[item] || 0) + 1;
//   }

//   return count;
// }

// console.log(countElements([1,2,3,2,4,5,1,6]));

