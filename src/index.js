const productAdapter = new ProductAdapter("http://127.0.0.1:3000")
const newForm = new Form

document.addEventListener("DOMContentLoaded", () => {
    productAdapter.getProducts();
    listenOrder();
  
})