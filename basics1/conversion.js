// conversion 
let score = "33abc";
console.log("type of score before the conversion =",typeof score);

let value = Number(score);
console.log("type of score after the conversion =",typeof value);
console.log(value);
// this will print NaN and the type is number

let abc = 5678;
console.log("type of abc before the conversion =",typeof abc);
let stvalue = String(abc);
console.log("type of stvalue after the conversion =",typeof stvalue);
console.log(stvalue);
// this will convert the number into the string but when the new value is printed it will show the old value only.

let isLoggedin = 1;
console.log("type of isLoggedin before the conversion =",typeof isLoggedin);
let boolval = Boolean(isLoggedin);
console.log("type of  after the conversion =",typeof boolval);
console.log(boolval);

let afp = null;
let arp = Number(afp);
console.log(typeof arp);
