
/*29. Write a javascript program which takes the input of filename as string and 
prints the extension of the file in the console.*/


function getFileExtension(filename){

    const extension = filename.split('.').pop();
    return extension;
}

const file1 = getFileExtension('solution.js');
console.log(file1);

const file2 = getFileExtension('solution.txt');
console.log(file2);

const file3 = getFileExtension('solution.html');
console.log(file3);