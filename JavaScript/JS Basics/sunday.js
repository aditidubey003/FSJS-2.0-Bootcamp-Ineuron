//Conditions
//If else
//switch case
//ternery op / ternery conditions
let rating = 5;

let user ='Admin';

//switch(user):

//Arrays

//Object

// let bankaccount = {
//     firstName: "Aditi",
//     lastName: "Dubey",
//     mobileno: 3445777,
//     balance: 500000,

// }
// console.log(bankaccount)
// console.log(bankaccount.balance)//use dot to access object

//Date and math
// const now = new Date() //new - to assign memory to it
// console.log(now)
// console.log(now.toString())
// console.log(now.getFullYear())
// console.log(now.getMonth())// 11 because it is starting from 0

// console.log(now.getDay())// sunday starts from 0
// console.log(now.getHours())//24 hour clock
// console.log(now.getTime())// its in milisecond
// console.log(now.getSeconds())//seconds
// console.log(now.getMinutes())//minutes

// Math
// const PI = Math.PI;
// console.log(PI);

// console.log(Math.round(PI));
// console.log(Math.round(9.5));
// console.log(Math.floor(9.5))
// console.log(Math.ceil(9.5))

//min and max
// console.log(Math.min(10,1,2,3,5))
// console.log(Math.max(10,1,2,3,5))

// //Random
// console.log(Math.random()*50);//0 to 0.9999 (0-1)
// console.log(Math.round(Math.random()*51));

//power
//console.log(Math.pow(3,3));

//exponent and log
console.log(Math.log(2));

//sin and cos, trig
console.log(Math.sin(90));


//5 types of loops 
//learning 3 loops now
//do while, while, for
// iterate 
let i=6;
do {
    console.log("Value of i is: ",i)
    i++;
} while(i<=5);

//while loop
let j=5; //initialization
while(j <= 5) { //condition
    console.log('Value of J is ',j);
    j++;
}

//for loop
for(let i=0;i <=5; i++){
    console.log(`${i} * ${i} = ${i * i}`);
}
