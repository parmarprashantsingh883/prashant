// function countVowels(str) {
//   str = str.toLowerCase(); // fix here

//   let count = 0;
//   let vowels = "aeiou";

//   for (let char of str) {
//     if (vowels.includes(char)) count++;
//   }

//   return `there are ${count} vowels`;
// }

// console.log(countVowels("JAvaScript"));


function countVowels(str) {
  str = str.toLowerCase();
  let count;
  let vowels = "aeiou";

  for (let char of str) {
    if (vowels.includes(char)) {
        count++;
      return `This has${}  vowels`;
    }
  }

  return "This doesn't have vowels";
}

console.log(countVowels("JAvaScript"));

