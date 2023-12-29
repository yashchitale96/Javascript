// Array
const myArr = [1,2,3,4,5];
//console.log(myArr[3]);
//console.log(myArr);

const name = ["Yash", "Ram", "Sham"];
//console.log(name[0]);

const arr = new Array(1,2,3,4);
//console.log(arr[3]);

// Array's Methods
myArr.push(6);
//console.log(myArr);
myArr.pop();
//console.log(myArr);

myArr.unshift(5); // It adds value at the beginning
//console.log(myArr);
myArr.shift(); // Removes the beginning element
//console.log(myArr);

//console.log(myArr.includes(5)); // check the element is present in array or not
//console.log(myArr.indexOf(5)); // gives the index of element

const newArr = myArr.join(); // op->1,2,3,4,5
//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr); // String

// Slice
console.log("A",myArr);
const A = myArr.slice(1,3);
console.log(A);
console.log("B",myArr);

// Splice
console.log("P",myArr);
const B = myArr.splice(1,3);
console.log(B);
console.log("Q",myArr);
