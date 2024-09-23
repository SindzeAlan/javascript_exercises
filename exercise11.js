/*

1- Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

*/

const randomNumber = Math.floor(Math.random() * 10 + 1);//This will generate a random number from 1-10
console.log(`Random number is ${randomNumber}`);

function guessNumber(number) {
  if(number == randomNumber){
    return 'Good Work';
  }

  return 'Not matched';
}

console.log(guessNumber(2));