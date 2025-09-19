let persone={
    name:"prashnat",
    age: 21,
    isstudent: true

};
console.log(persone.name)
console.log(persone["name"])
console.log(persone);

let obj=new Object();
obj.Name="prashnat";
obj.Age=21;
obj.ISstudent=false
console.log(obj)
 obj3=Object.assign(persone,obj)

//  console.log(obj3)


 /////////////////////////////////

 const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

