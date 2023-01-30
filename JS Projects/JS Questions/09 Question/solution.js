
/*Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value.*/

    //Truthy Value Examples
    //Example-1
    let num1 = 3;
    let num2 = 4;

    if(num1 < num2){
        console.log(true); 
    }else {
        console.log(false);
    }

    //Example-2

 if(num1 + num2 < 10){
        console.log(true); 
    }else {
        console.log(false);
    }

   //Example-3

   if(num1 * num2 <= 12){
    console.log(true);
   } else {
    console.log(false);
}


//Falsy Value Examples
    //Example-1

    if (0){
        console.log(true);
    } else {
        console.log(false);
    }


    //Example-2

    if (undefined){
        console.log(true);
    } else {
        console.log(false);
    }  

     //Example-3

    if (''){
        console.log(true);
    } else {
        console.log(false);
    }
