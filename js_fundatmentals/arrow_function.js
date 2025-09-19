// const sum=(a,b)=>{
//     console.log("the sum is called")

//     console.log(a);
//     console.log(b);

//     console.log(a+b)


// }
//  sum(10,30)


// // swapping two variables
// var a = 20;
// var b = 40;
// var temp;

// const sw = () => {
//     temp = a; // save a
//     a = b;    // put b into a
//     b = temp; // put old a into b
// }

// sw();
// console.log(a, b); // 40 20 ✅
//  function reverseString(str) {
//   // Convert string to array
//   let arr = str.split("");

//   // Two pointers (start and end)
//   let left = 0;
//   let right = arr.length - 1;

//   // Swap until middle
//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }

//   // Convert back to string
//   return arr.join("");
// }

// // Test
// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("Prashant")); // "tnahsarP"

// const revercestr = (myname) => {
//     var myarray = myname.split("")
//     var left = 0;
//     var right = myarray.length - 1
//     while (left < right) {
//         let temp = myarray[left];
//         myarray[left] = myarray[right];
//         myarray[right] = temp;
//         left++;
//         right--;
//     }
//     return myarray.join("");

// }
// console.log(revercestr("prashnat"));

// const nf=function(){
//     username="prashant"
//     console.log(this)
// }
// nf();
// const nf=()=>{
//     username="prashant"
//     console.log(this.username);
    
// }
// nf()
// const greet=()=>"hello world";
// console.log(greet());


// const square=a=>a*a
// console.log(square(5));

// const muti=(x,y)=>(x*y);
// console.log(muti(10,5));

const clas=(a,b)=>{
    let sum=a+b;
    let sub=a-b;
    let multi=a*b;
    return{sum,multi,sub}

}
console.log(clas(10,20));