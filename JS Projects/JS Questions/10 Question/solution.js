/*Figure out the result of the following comparison expression first without using console.log().
 After you decide the result confirm it using console.log()
- 4 > 3
- 4 >= 3
- 4 < 3
- 4 <= 3
- 4 == 4
- 4 === 4
- 4 != 4
- 4 !== 4
- 4 != '4'
- 4 == '4'
- 4 === '4'
- Find the length of python and jargon and make a falsy comparison statement.*/

//Solution

//console.log(4 > 3); 
//true
//console.log(4 >= 3); 
//true
//console.log(4 < 3); 
//false
//console.log(4 <= 3); 
//false
//console.log(4 == 4);
// true
//console.log(4 === 4); 
//true
//console.log(4 != 4);
// false
//console.log(4 !== 4); 
//false
//console.log(4 != '4');
//false
//console.log( 4 == '4');
// true
//console.log(4 === '4');
// false

let name1 = "python";
let length1 = name1.length;
console.log(length1);

let name2 = "jargon";
let length2 = name2.length;
console.log(length2);

if(length1 === length2){
    console.log('truthy comparison statement');
} else {
    console.log('falsy comparison statement');
}