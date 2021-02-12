// Script.js

window.addEventListener('DOMContentLoaded', () => {
  
  async function fetchData() {
    let response = await fetch('https://fakestoreapi.com/products');
    let data = response.json()
    localStorage.setItem("products", JSON.stringify(data));
  }
  
  fetchData();
});
