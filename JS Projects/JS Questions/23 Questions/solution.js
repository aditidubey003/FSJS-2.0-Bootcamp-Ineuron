
//23. Write a program to check that the number given by the user is a prime number or not.

function isPrime (num){
if ( num < 2)
    return `${num} is not a Prime no.`;
for (let i = 2; i < num; i++) {
if (num % i === 0) 
    return `${num} is not a Prime no.`;
}
    return `${num} is a Prime no.`;
}

 console.log(isPrime(3));