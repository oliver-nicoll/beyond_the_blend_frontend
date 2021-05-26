const productAdapter = new ProductAdapter("http://127.0.0.1:3000")
const form = new Form
let cart = JSON.parse(localStorage.getItem("cart")) || []
let cartPage = "cart"

document.addEventListener("DOMContentLoaded", () => {
    productAdapter.getProducts();
    form.listenOrder();
    shoppingCart();
  
})

function shoppingCart(){
    const cartSidePage = document.getElementById("cart-side-page")
    document.getElementById("cart-display").addEventListener("click", () => {
        switch (cartPage) {
            case "cart":
                console.log("Displaying Cart")
                cartPage = "main"
                cartSidePage.classList.remove("hidden")
            break;

            case "main":
                console.log("Hiding Cart")
                cartPage = "cart"
                cartSidePage.classList.add("hidden")
            break;

            default:
                break;
        }
    })
}