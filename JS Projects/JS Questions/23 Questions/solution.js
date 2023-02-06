
//23. Write a program to check that the number given by the user is a prime number or not.

function isPrime (num){
for (let i = 2; i <= num; i++){
if (num % i === 0){
    alert("This is  a prime no");
} else {
    alert("This is not a prime no");
}
}
}

isPrime(5);