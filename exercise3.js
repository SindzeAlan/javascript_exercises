/*

3. **Template Literals:**
   Create a template literal that includes variables `product`, `price`, and `quantity`. The template should output "You purchased [quantity] units of [product] for $[totalPrice].".

*/

let product = "Chocolate";
let price = 50;
let quantity = 5;
let totalPrice = quantity * price;

console.log(`You purchased ${quantity} units of ${product} for $${totalPrice}`);