/*

6. **Default Parameters:**
   Write a function called `calculateArea` that takes the radius of a circle as a parameter. The function should return the area of the circle. If no radius is provided, the function should throw an error with the message "Radius is missing!".

*/

function calculateAreaCircle(radius) {
  const areaCircle = Math.PI * (radius * radius);
  return radius === undefined ? radius = "Radius is missing!" : areaCircle;
}

console.log(calculateArea(2));