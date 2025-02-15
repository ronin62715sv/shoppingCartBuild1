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

// Helper function to find product based on property from any defined array
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

  //finds the product object from the products and carts array based on productId
  let cartFind = findProduct(cart, 'productId', productId);
  let cartProduct = findProduct(products, 'productId', productId);

  //if product was found in the cart the quantity of that product is increased by 1
  if(cartFind){
    cartFind.quantity += 1;
    cartProduct.quantity += 1;
    console.log("product quantity increased");
  } else {
    
    /*if the product was not found the product 
    is searched in the product array and is added 
    to the cart with quantity of 1*/
    const productAdd = findProduct(products, 'productId', productId)
    if (productAdd) {
      productAdd.quantity += 1;
      cart.push({...productAdd, quantity: 1}); //...spread includes everything in object, with quantity set to 1
      console.log("Product added to cart")
    } else {
    console.log("Product Id: " + productId + " not found or does not exist.");
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  //finds products in cart and products array
  let cartFind = findProduct(cart, 'productId', productId);
  let cartProduct = findProduct(products, 'productId', productId);
  if(cartFind){ //increase quantity by 1 if products is found in cart
    cartProduct.quantity += 1; //increases quanity of found product in products array
    console.log("Product quantity increased");
  } 

  if(!cartFind) { //if product was not found in cart, logs a message 
    return "Product with product ID " + productId + " not in cart.";
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {

  let cartProduct = findProduct(products, 'productId', productId);
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      found = true; //set found to true
      cartProduct.quantity -= 1; //decreases the quantity
      if (cartProduct.quantity <= 0) {
        cart.splice(i, 1); //removes product from cart if quantity <= 0
        return "Product removed from cart.";
      }
      return "Product quantity decreased.";
    } 
  }
  //if product was not found in cart
  return "Product with product ID " + productId + " not found.";
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {

  let cartProduct = findProduct(products, 'productId', productId);
  let found = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      found = true; //set found to true
      cartProduct.quantity = 0; //set quantity to zero
      cart.splice(i,1); //remove product from cart
      return "Product removed from cart."
    }
  }
  //if product was not found in cart
  return "Product with product ID " + productId + " not found.";
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

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
   removeProductFromCart
   //cartTotal,
   //pay, 
   //emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
};