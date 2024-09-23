/*

7. **Rest Parameters:**
   Write a function called `average` that takes any number of arguments (representing scores) and returns the average score. Round the result to two decimal places.

*/

function average(...arguments) {
   let totalSum = 0;
   for(let i = 0; i < arguments.length; i++){
      totalSum += arguments[i];
   }

   return Number((totalSum/arguments.length).toFixed(2));//The function will return the average of the sum of the arguments and round it to 2 decimal places. Since the method toFixed() has as type 'string', to convert from string to number we use "Number()"
}

console.log(average(1,2,3,4,5,65));

/* 

An alternative solution to this problem is as follow :

function average(scores) {
  let sumResult = 0;
  let average = 0;
  for (let i = 0; i < scores.length; i++) {
    sumResult += scores[i];
  }

  average = sumResult / scores.length;
  return Number(average.toFixed(2));
}

const numbers = [1, 2, 3, 4, 5, 6, 45];
console.log(average(numbers));

*/






