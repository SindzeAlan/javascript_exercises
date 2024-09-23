/*

8. **Map Method:**
   Given an array of strings, use the `map` method to create a new array where each string is reversed.

*/

const cars = ['Toyota', 'Ferrari', 'Jeep', 'Audi'];

const reversedCar = cars.map(reverseStr);
console.log(reversedCar);

function reverseStr(arr) {
  return arr.split('').reverse().join('');
}