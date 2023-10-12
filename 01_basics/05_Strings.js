const name = "Yash"
const repoCount = 50

// console.log(name + repoCount + " Value"); // old method

const gameName = new String('yash-yc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const anotherString = gameName.substring(0,4);
//console.log(anotherString);

const newStringOne = " yash "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://yash.com/yash%20chitale"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));