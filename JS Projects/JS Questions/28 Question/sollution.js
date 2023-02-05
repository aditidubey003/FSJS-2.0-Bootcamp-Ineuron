// 28. Write a program to print the given patterns using the loops-
/*	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
       *
       **
       ***      */

let n = 3;
for (let row = 1; row <= n; row++){
    for (let col = 1; col <= row; col++){
document.write("* ");
    }
document.write("<br>");
}



/*b. Print a square pattern, if the input is 3 then the output should be similar to the given output
       ***
       ***
       ***       */

let a = 3;
for(let row = 1; row <= a; row++){
   for(let col = 1; col <= a; col++){
document.write("* ");
   }
   document.write("<br>");
}

/*	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
         *
        ***
       *****            */
      
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



