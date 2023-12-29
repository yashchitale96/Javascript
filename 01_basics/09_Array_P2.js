const Marvel = ["Iron-Man","Thor","Spiderman"];
const DC = ["Batman","Superman","Flash"];

//Marvel.push(DC);
//console.log(Marvel);
//console.log(Marvel[3][1]);

//Marvel.concat(DC);
//console.log(Marvel);

const Allheros = Marvel.concat(DC);
console.log(Allheros);

const all_new_heros = [...Marvel, ...DC];
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,8,9];
const real_array = another_array.flat(Infinity);
console.log(real_array);

console.log(Array.isArray("YASH"));
console.log(Array.from("YASH")); // convert into array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
