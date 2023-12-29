let myDate = new Date();
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof Date); // typeof: function

/* Different ways of representation of Dates*/
//let mycreatedDate = new Date(2023, 0, 23);
//let mycreatedDate = new Date(2023, 0, 23, 5, 3);
//let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");

/* TimeStamp */
let myTimeStamp = Date.now(); // it is in milisecond
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000)); // it is in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
