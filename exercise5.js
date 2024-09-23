/*

5. **Destructuring Assignment:**
   Declare an object called `car` with properties `make`, `model`, and `year`. Use destructuring assignment with default values to extract `make` and `model`, and assign the default value "unknown" to `year`.

*/

let car = {
  make: "Toyota",
  model: "LandRover",
  year: 2020
}

let {make, model, year = "unknown"} = car;

console.log(make,model,year);