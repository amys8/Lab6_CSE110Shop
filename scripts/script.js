// Script.js

window.addEventListener('DOMContentLoaded', () => {
  async function fetchData() {
    let response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json()
    localStorage.setItem("products", JSON.stringify(data));
  }
  
  if (localStorage.getItem("products") == null) {
    fetchData();
  }
  
  let retrievedData = localStorage.getItem("products");
  let items = JSON.parse(retrievedData);
  
  for (let i of items) {
    let node = document.createElement('product-item');
    node.shadowRoot.querySelector("img").src = i.image;
    node.shadowRoot.querySelector(".title").innerHTML = i.title; 
    node.shadowRoot.querySelector(".price").innerHTML = "$" + i.price;
    document.getElementById("product-list").appendChild(node);
  }
});

let x = document.getElementById("product-list");
let but = x.getElementsByTagName("button");
but.addEventListener("click", buttonFunc);

function buttonFunc() {
  if (but.innerHTML === 'Add to Cart') {
    but.innerHTML = 'Remove from Cart';
    document.getElementById("cart-count").innerHTML = parseInt(document.getElementById("cart-count").innerHTML)+1;
  }
  else {
    but.innerHTML = 'Add to Cart';
    document.getElementById("cart-count").innerHTML = parseInt(document.getElementById("cart-count").innerHTML)-1;
  }
}
    
