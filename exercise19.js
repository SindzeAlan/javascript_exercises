/*

9. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

*/

function filterOutValues(array, valuesToFilter) {
  return array.filter(element => !valuesToFilter.includes(element));
}

const originalArray = [1, 2, 3, 4, 5, 6];
const valuesToFilter = [2, 4, 6];

const filteredArray = filterOutValues(originalArray, valuesToFilter);
console.log(filteredArray);
