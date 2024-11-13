// string interpolation

let name = "Arpan";
let address = "wavecity";

console.log(`My name is ${name} and my address is ${address}`);

// another way to right string.

let cityName = new String('  Ghaziabad-up14  ');

// it will show different types of methods under prototype

console.log(cityName.length);
let uppr = cityName.toUpperCase();
console.log(uppr);
console.log(cityName.toLowerCase());// we can use these 2 methods like this.
console.log(cityName);
let abc = console.log(cityName.trim()); // it will remove the spaces, only works on white space characters.
console.log(cityName.charAt(4));
// by this way we can acess the sztring value too.
console.log(cityName[4]);
console.log(cityName.indexOf('G'));
console.log(cityName.includes('up14'));// it will return true or false.

let subString = cityName.substring(0,6);
console.log(subString);

// slice method.

let newstr = cityName.slice(0,7);
console.log(newstr);
// we can also give negative index in this.

// to convert the string into an array we use split 

let arrStr = cityName.split('-');
console.log(arrStr);

//  to replace anything we use replace method.

let repStr = cityName.replace('up14','UP16');
console.log(repStr);












