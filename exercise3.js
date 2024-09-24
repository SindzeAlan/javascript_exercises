/*

3. **Template Literals:**
   Create a template literal that includes variables `product`, `price`, and `quantity`. The template should output "You purchased [quantity] units of [product] for $[totalPrice].".

*/

const productPurchased = () => {
   const product = "Chocolate";
   const price = 50;
   const quantity = 5;
   const totalPrice = quantity * price;

   return `You purchased ${quantity} units of ${product} for $${totalPrice}`;
}

console.log(productPurchased());