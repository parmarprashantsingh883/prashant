 // without inbult functions
 
 /*const revstr = (str) => {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(revstr("prashnat"));*/


const revstr = (str) => {
    return str.split("").reverse().join("").trim();
}

console.log(revstr("prashnat singh"));
