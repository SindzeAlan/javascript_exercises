/* 

2. Write a JavaScript program to calculate days left until next Christmas.

*/

// const daysToNextChristmas = () => {

//   const christMassDay = new Date('2024-12-25');

//   const presentDay = new Date();//This will define the actual date of the computer not store it in the variable

//   daysInMilliseconds = christMassDay.getTime() - presentDay.getTime();

//   if (christMassDay > presentDay) {

//     return daysLeft = Math.ceil(daysInMilliseconds / (1000 * 60 * 60 * 24));//The "Math.ceil()" is used to round up to ensure that any remainig partial days are counted as a full day

//   }

// }
// console.log(daysToNextChristmas())
// console.log(`It's remaining ${daysToNextChristmas()} days to christmas`);

//clean code



const daysLeftToChristmas = () => {
  const presentDay = new Date(2026, 11, 29);

  let christMassDay = new Date((new Date()).getFullYear(), 11, 25);

  let daysInMilliseconds = christMassDay.getTime() - presentDay.getTime();

  let daysLeft = Math.ceil(daysInMilliseconds / (1000 * 60 * 60 * 24));

  if (presentDay > christMassDay) {
    christMassDay = new Date((new Date()).getFullYear() + 1, 11, 25);
    daysInMilliseconds = christMassDay.getTime() - presentDay.getTime();
    daysLeft = Math.ceil(daysInMilliseconds / (1000 * 60 * 60 * 24));

    return daysLeft
  }

  return daysLeft;
}

console.log(daysLeftToChristmas())