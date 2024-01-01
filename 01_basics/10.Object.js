// singleton
// Object.create

// Object Literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Yash",
    age: 18,
    [mySym]: "mykey1",
    location: "Pune",
    email:"yash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "yash@chatgpt.com"
Object.freeze(JsUser) // value is not changed
JsUser.email = "yash@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
