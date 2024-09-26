/*

4. **Spread Operator:**
   Given two arrays `arr1` and `arr2`, create a new array `combinedArr` that contains all the unique elements from both arrays, sorted in ascending order.

*/

const sortedNumbersAscendingOrder = () => {
   const arr1 = [100, 20, 3];
   const arr2 = [14, 50, 6];
   const combinedArr = [...arr1, ...arr2]; 

   return combinedArr.sort((a, b) => a - b);
}

console.log(sortedNumbersAscendingOrder());