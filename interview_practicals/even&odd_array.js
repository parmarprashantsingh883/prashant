// function even_odd_array_elements(arr){
// let even=[]
// let odd=[]
// for(let num=0; num<arr.length;num++){
//     if(num%2===0){
//         even.push(arr[num])
//     }
//     else
//         odd.push(arr[num])
// }
// return {even,odd}
// }
// console.log(even_odd_array_elements([10,33,22,53,88,94]));


function findEvenOdd(arr) {
  const even = arr.filter(num => num % 2 === 0);
  const odd = arr.filter(num => num % 2 !== 0);

  return { even, odd };
}
console.log(findEvenOdd([10,33,22,53,88,94]));
