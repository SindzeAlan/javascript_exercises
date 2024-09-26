/*

10. **Promise:**
    Write a function called `fetchData` that simulates fetching data from an API. It should return a promise that resolves with the string "Data fetched successfully!" after a random delay between 2 to 8 seconds.

*/

const fetchData = () => {
  const randomNumber = Math.floor(Math.random() * 7) + 2; // It generates a random number from 2-8  
  console.log(randomNumber + 'seconds');//prints the random number 

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched sucessfully!'), (randomNumber * 1000))
  })
}
fetchData()
  .then(sucess => {
     console.log(sucess);
   })



