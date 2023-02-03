/*Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F*/

    //Solution

    let marks = +prompt("Enter your marks");

    function myGrade (marks) {
    if ((marks >= 80) && (marks <= 100)){
      alert ("you got Grade A");
     } else if ((marks >= 70) && (marks <= 79)){
        alert ("you got Grade B");
     } else if ((marks >= 60) && (marks <= 69)){
        alert ("you got Grade C");
     } else if ((marks >= 50) && (marks <= 59)){
        alert ("you got Grade D");
     } else if ((marks >= 0) && (marks <= 49)){
        alert ("you got Grade E");
     } else {
        alert("Enter marks within the range of 100");
     }
    }