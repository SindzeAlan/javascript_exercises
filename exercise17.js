/**
 
7. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

  Use ES6 a refaire 
 */

  const sumOfCubes = (number) => {
    let sum = 0;
    
    for (let i = 1; i <= number; i++) {
      sum += Math.pow(i,3);
    }
  
    return sum;
  };
  
  const givenInteger = 5; 
  console.log(`The sum of cubes from 1 to ${givenInteger} is: ${sumOfCubes(givenInteger)}`);
  


// const sumOfCubesIntergers = (arr) => {

//   const newArray = [];
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 1) {
//       newArray.push((Math.pow(arr[i], 3)));
//     }
//   }

//   for (let i = 0; i < newArray.length; i++) {
//     sum += newArray[i];
//   }

//   return sum;

// }




