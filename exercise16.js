/*

6. Write a JavaScript program to remove all characters from a given string that appear more than once.


Use ES6
*/

// const numbers = [1,2,3,4,5,7,8,9,10,2];
// for (let i = 0; i < numbers.length; i++){
//   if(numbers[i] == numbers[i]){
//     numbers[i].splice(i, 1);
//   }
// }

const removeDuplicateCharacters = (str) => {
  const frequencyMap = {};
  
  for (const char of str) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  console.log(frequencyMap)
  let result = '';
  for (const char of str) {
    if (frequencyMap[char] === 1) {
      result += char;
    }
  }
  
  return result;
}

console.log(removeDuplicateCharacters("programming")); 
console.log(removeDuplicateCharacters("hello world")); 
console.log(removeDuplicateCharacters("aabbccdd"));    

