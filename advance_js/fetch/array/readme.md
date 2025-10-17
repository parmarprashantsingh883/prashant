lastIndexOf()
=======================================================================================================================

Purpose:
Finds the last occurrence of an element in an array.

Syntax:

array.lastIndexOf(searchElement, fromIndex)


Example:

let fruits = ["apple", "banana", "mango", "banana"];
console.log(fruits.lastIndexOf("banana")); // 3
console.log(fruits.lastIndexOf("mango"));  // 2
console.log(fruits.lastIndexOf("orange")); // -1
==============================================================================================================================

includes()
==========

Purpose:
Checks if a specific element exists in an array.
Returns true or false.

Syntax:

array.includes(searchElement, fromIndex)


Example:

let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
=============================================================================================================