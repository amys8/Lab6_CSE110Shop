// Script.js

window.addEventListener('DOMContentLoaded', () => {
  var array;
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => array = data);
  localStorage.setItem("products", JSON.stringify(array));
});
