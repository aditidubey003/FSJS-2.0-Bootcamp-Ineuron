// Printing a Pyramid with the help of Loops 

// A Part (Printing a Triangle )
let n = 3;
for (let row = 1; row <= n; row++){
    for (let col = 1; col <= row; col++){
document.write("* ");
    }
document.write("<br>");
}



// B Part (Printing a Square)
let a = 3;
for(let row = 1; row <= a; row++){
   for(let col = 1; col <= a; col++){
document.write("* ");
   }
   document.write("<br>");
}

// C Part (Printing a Pyramid)
let b = 3;
for(let i = 1; i <= b ; i++){
   for(let j = 1; j <= b - i; j++){
      document.write("&nbsp");
   }
   for(let k = 1; k <= 2 * i - 1; k++){
      document.write(" * ");
   }
   document.write("<br>"); 
}



