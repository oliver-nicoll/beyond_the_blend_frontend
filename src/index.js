const productAdapter = new ProductAdapter("http://127.0.0.1:3000")
const form = new Form

document.addEventListener("DOMContentLoaded", () => {
    productAdapter.getProducts();
    form.listenOrder();
  
})