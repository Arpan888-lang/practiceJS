let score = 786
let score2 = score;
score2 = 777;
console.log(score);

let obj= {
    user : "Arpan",
    company : "Amazon",
}


let user1 = obj;
user1.user = "Shinu";
console.log(obj);
// change is  done in the original value.