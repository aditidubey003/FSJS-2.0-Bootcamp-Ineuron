// Printing a Pyramid with the help of Loops 
let n = 3;
for (let i = 1; i <= n; i++){
    for (let j = 1; j <=n; j++){
        process.stdout.write(' ')
    }
    for (let k = 1; k < 2 * i - 1; k++){
        process.stdout.write(' *')
    }
    console.log();
}