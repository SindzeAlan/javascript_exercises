/*

6. Write a JavaScript program to remove all characters from a given string that appear more than once.

*/

const numbers = [1,2,3,4,5,7,8,9,10,2];
for (let i = 0; i < numbers.length; i++){
  if(numbers[i] == numbers[i]){
    numbers[i].splice(i, 1);
  }
}

console.log(numbers)

// const myfilter = numbers.filter(filtered(value));

// function filtered(arr){
  
// }