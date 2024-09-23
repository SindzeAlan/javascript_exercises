/*

14. Write a JavaScript program to check if a string is lower case or not.

*/

function checkString(str){
  if(str === str.toLowerCase()){
    return 'The string is lower case';
  }
  else if(str === str.toUpperCase()){
    return 'The string is upper case';
  }
}

let myStr = 'Hello';

console.log(checkString(myStr));