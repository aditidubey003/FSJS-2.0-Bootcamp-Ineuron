/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
- September, October or November, the season is Autumn.
- December, January or February, the season is Winter.
- March, April or May, the season is Spring
- June, July or August, the season is Summer*/

//Solution
let month = prompt ("Enter the month name");

switch (true){
    case 11:
    case 0:
    case 1:
        console.log("the season is Winter");
    break;
    case 2:
    case 3:
    case 4:
        console.log("the season is Spring");
    break;
    case 5:
    case 6:
    case 7:
        console.log("the season is Summmer");
    break;
    default:
        console.log("the season is Autumn");
}