/* 

2. Write a JavaScript program to calculate days left until next Christmas.

*/

function DaysToNextChristmas(day) {
  let presentDay = new Date();//This will define the actual date of the computer nad store it in the variable

  daysInMilliseconds = day.getTime() - presentDay.getTime();

  return daysLeft = Math.ceil(daysInMilliseconds / (1000 * 60 * 60 * 24));//The "Math.ceil()" is used to round up to ensure that any remainig partial days are counted as a full day
}

let christMassDay = new Date('2024-12-25');
console.log(`It's remaining ${DaysToNextChristmas(christMassDay)} days to christmas`);