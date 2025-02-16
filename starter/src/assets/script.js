/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
const products = [
  { 
    name: "cherry", 
    price: 4.99, 
    quantity: 0, 
    productId: 1000, 
    image: 'images/cherry.jpg' 
  },
  { 
    name: "orange", 
    price: 6.99, 
    quantity: 0, 
    productId: 1001, 
    image: 'images/orange.jpg' 
  },
  { 
    name: "strawberry", 
    price: 3.99, 
    quantity: 0, 
    productId: 1002, 
    image: 'images/strawberry.jpg' 
  }
];

// Helper function to find product based on any defined property from any defined array
function findProduct(array, property, value){
  return array.find(p => p[property] === value);
}

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId){

  //finds the product object from the products and carts arrays based on productId
  let cartFind = findProduct(cart, 'productId', productId);
  let cartProduct = findProduct(products, 'productId', productId);

  //if product was found in the cart the quantity of that product is increased by 1
  if(cartFind){
    cartFind.quantity += 1; //quantity increase in cart array
    cartProduct.quantity += 1; //quanitity increase in products array due to unit test checking quantity in products array 
    return "product quantity increased"; //return a message when product quantity is increased
  } else { // if the product was not found the product is searched in the products array and is added to the cart with quantity of 1.
    cartProduct.quantity += 1; //quantity updated in products array
    cart.push({...cartProduct, quantity: 1}); //...spread includes everything in object, with quantity set to 1
    return "Product added to cart"; //return a message when product is added to cart
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
  //finds products in cart and products array
  let cartFind = findProduct(cart, 'productId', productId);
  let cartProduct = findProduct(products, 'productId', productId);

  if(cartFind){ //increase quantity by 1 if product is found in cart
    cartProduct.quantity += 1; //increases quantity of found product in products array
    cartFind.quantity += 1; //increases quantity in cart array
    return "Product quantity increased"; //return message when product quantity is increased
  } 

  if(!cartFind) { //if product was not found in cart, logs a message with the productId that was not found
    return "Product with product ID " + productId + " not in cart.";
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){
  //finds products in cart and products array
  let cartFind = findProduct(cart, 'productId', productId);
  let cartProduct = findProduct(products, 'productId', productId);
  
  if(!cartFind){ //if product not found in cart, returns a message
    return "Product with product ID " + productId + " not found.";
  }
     
  cartProduct.quantity -= 1; //decreases the quantity in product array since the unit tests track quantity in products array
  cartFind.quantity -= 1; //descreases the quanitity in cart array
  
  if(cartProduct.quantity <= 0){
    const index = cart.indexOf(cartFind); //const set to array index of the product found in cart
    cart.splice(index, 1); //removes product from cart if quantity <= 0
    return "Product removed from cart."; //returns message when product is removed from cart
  }

  return "Product quantity decreased."; //returns message if the product quantity was decreased and still in cart
} 
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  //find products in cart and products arrays
  let cartFind = findProduct(cart, 'productId', productId);
  let cartProduct = findProduct(products, 'productId', productId);
  
  if(!cartFind){ //if product was not found in cart, returns a message
    return "Product with product ID " + productId + " not found.";
  } else { //if product was found in cart
    cartProduct.quantity = 0//sets quantity of product to zero in products array
    cartFind.quantity = 0; //sets quantity of product to zero in cart array
    const index = cart.indexOf(cartFind); //const set to array index of the product found in cart
    cart.splice(index,1); //remove product from cart
    return "Product removed from cart." //return message when product is removed from cart
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal(){
  let cartSum = 0; //initialize a variable for sum of cart price

  for(let i = 0; i < cart.length; i++){ //iterates through the cart
    let itemTotal = cart[i].quantity * cart[i].price; //multiplies product price by product quantity
    cartSum += itemTotal; //result of item total is added to cartSum
  }
  return parseFloat(cartSum.toFixed(2)); //return total cost of cart to two decimal places fixed
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart(){
  if(cart.length === 0){ //check to see if cart array is already empty
    return "Cart is already empty."; //if empty, returns a message
  } else {
    cart.length = 0; //if the cart is not already empty, the cart is emptied
    return "Cart has been emptied."; //returns a message when cart is emptied
  }
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
let remainingBalance = cartTotal(); //global remainingBalance variable requested per the rubric

function pay(amount){
  const total = cartTotal(); //set const total to amount from cartTotal function

  if(amount === total){
    remainingBalance = 0; //no change, 0 additional payment needed
  } else if(amount < total){
    remainingBalance = amount - total; //return the amount still due
  } else {
    remainingBalance = amount - total; //return the change
  }
  return parseFloat(remainingBalance.toFixed(2)); //return remaining balance fixed to 2 decimal places
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   emptyCart,
   pay
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
};