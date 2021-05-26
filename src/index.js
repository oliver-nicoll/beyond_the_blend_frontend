let editMode = false
const productAdapter = new ProductAdapter("http://127.0.0.1:3000")
let reviews = false
const marketForm = new Form

document.addEventListener("DOMContentLoaded", () => {
    productAdapter.getProducts();
    marketForm.addCreateForm();
    listenEditDelete();
})