/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
- September, October or November, the season is Autumn.
- December, January or February, the season is Winter.
- March, April or May, the season is Spring
- June, July or August, the season is Summer*/

//Solution
let month = 1;

switch (month){
    case 12:
    case 1:
    case 2:
        return "the season is Winter";
    break
    case 3:
    case 4:
    case 5:
        return "the season is Spring";
    break
    case 6:
    case 7:
    case 8:
         return "the season is Summer";
    break
    default:
        return"the season is Autumn";
}