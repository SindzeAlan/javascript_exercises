/**
 
7. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

  Use ES6
 */

const sumOfCubesIntergers = (arr) => {

  const newArray = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) {
      newArray.push((Math.pow(arr[i], 3)));
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }

  return sum;

}

console.log(`The sum of cubes of all intergers is: ${sumOfCubesIntergers([-10, 1, 2, 3, 4, 5])}`)



