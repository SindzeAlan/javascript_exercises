/*

6. **Default Parameters:**
   Write a function called `calculateArea` that takes the radius of a circle as a parameter. The function should return the area of the circle. If no radius is provided, the function should throw an error with the message "Radius is missing!".

*/

function calculateArea(radius = "Radius is missing!") {
  let areaCircle = Math.PI*(radius*radius)
  if(typeof radius) {
    return radius;
  }

   return areaCircle
}

console.log(calculateArea())