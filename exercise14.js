/*

4. Write a JavaScript program to find the longest string from a given array.

*/

const str = ['jack', 'williams', 'jackson', 'robertson', 'hello world' , 'alan', 'serena'];


function longestStr(arr) {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }

  return longest;
}

console.log(`The longest string of the given array is "${longestStr(str)}"`);