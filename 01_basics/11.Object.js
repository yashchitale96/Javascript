                // Declaring the object // 
// 1st way
//const tinderUser = new Object()
//console.log(tinderUser)

// 2nd way
const tinderUser = {}
//console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

            // Nesting of Object //

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yash",
            lastname: "Chitale"
        }
    }
}
//console.log(regularUser.fullname.userfullname)

             // Concatination of Mutiple Object //
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = (obj1, obj2)
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3)


const users = [ 
    {
        id: 1,
        email: "yash@gmail.com"
    },
    {
        id:2,
        email: "ram@gmail.com"
    }
]
users[1].email

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));
 
 const course = {
    coursename : "Javascript",
    price : "999",
    courseInstructor : "Yash"
 }
 
 //console.log(course.courseInstructor)
 const {courseInstructor: instructor} = course
 // here we use instructor instead of courseInstuctor
 console.log(instructor)
 
 // JSON Format
 // {
//     "name": "Yash",
//     "coursename": "Javascript",
//     "price": "free"
// }

