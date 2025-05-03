// Global cart variable
let cart = [];

// Add an item to the end
function addItem(item) {
  cart.push(item);
  console.log(item + " added to cart.");
}

// Undo last added item
function undo() {
  let removed = cart.pop();
  if (removed !== undefined) {
    console.log(removed + " removed (undo).");
  } else {
    console.log("Cart is already empty.");
  }
}

// Remove item at a specific index
function removeItem(index) {
  if (index >= 0 && index < cart.length) {
    let removed = cart.splice(index, 1)[0];
    console.log(removed + " removed from index " + index + ".");
  } else {
    console.log("Invalid index.");
  }
}

function countItems() {
    console.log("Total items: " + cart.length);
}  

function findItem(item) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] === item) {
        console.log(item + " found at index " + i);
        return;
      }
    }
    console.log(item + " not found.");
}  

// Print all items
function printCart() {
  if (cart.length === 0) {
    console.log("Cart is empty.");
  } else {
    console.log("Cart items:");
    for (let i = 0; i < cart.length; i++) {
      console.log(i + ": " + cart[i]);
    }
  }
}

// Clear the cart
function clearCart() {
  cart.length = 0;
  console.log("Cart has been cleared.");
}

