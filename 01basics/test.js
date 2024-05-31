// objects in js

const mySym = Symbol("key1")



const JsUser={
    name:"jabbar",
    "full name":"jabbar hussain",
    age:19,
    [mySym]:"key 1",
    location:"phalia",
    email:"jabbar.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email="nes.kalam"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email="ibrar"
// console.log(JsUser.email);




JsUser.greeting = function(){
    console.log("Hello JS user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());