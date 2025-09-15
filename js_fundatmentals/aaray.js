let arr=[10,20,30,40,50]


// slice method
console.log(arr.slice(1,4))  

// original aaray
console.log(arr);
/-----------------------------------------------------------------------------------------------------------------------/ 
// splice method
console.log(arr.splice(1,4))

//original array
console.log(arr)
let arr1=[10,20,30,40,50]
let arr2=[60,70,80,90,100]
let result=["a",...arr1,"b",...arr2]
console.log(result)
let mystring="hello";
let newstring="";
for(let i=mystring.length-3; i>=0;i-- ){
    newstring+=mystring[i]
}
console.log(newstring);