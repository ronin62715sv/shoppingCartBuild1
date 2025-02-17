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
function getProductById(productId, productList){
  return productList.find(product => product.productId === productId);
}

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId){
  let product = getProductById(productId, products); //finds product from products array
  if (!cart.includes(product))cart.push(product); //checks and adds product if it is not in cart
  product.quantity++; //increases quantity if already in cart or initializes quantity to one when product is added
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
  let product = getProductById(productId, cart);
  product.quantity++ //increases quantity
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){
  let product = getProductById(productId, cart);
  if(--product.quantity === 0) removeProductFromCart(productId); //decreases quantity by 1, if that decrease results in quantity of 0, removes product from cart.
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  let product = getProductById(productId, cart); 
  product.quantity = 0; //set product quantity back to zero
  cart.splice(cart.indexOf(product), 1); //removes product from cart
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal(){
  let cartSum = 0; //initialize a variable for sum of cart price
  cart.forEach(product => cartSum += product.quantity * product.price);
  return cartSum;
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