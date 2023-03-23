/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tBodyEl = document.querySelector('tbody');
  let trEl = tBodyEl.querySelectorAll('tr')
  trEl.innerText = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tBodyEl = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  tBodyEl.innerHTML = '';
  // TODO: Create a TR
  let trEl = document.createElement('tr')
  // TODO: Create a TD for the delete link, quantity,  and the item

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
