/*

6. Write a JavaScript program to remove all characters from a given string that appear more than once.


Use ES6
*/

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

console.log(removeDuplicateCharacters("[p,r,o,g,r,a,m,m,i,n,g]")); 

