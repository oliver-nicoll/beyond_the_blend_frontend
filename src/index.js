const productAdapter = new ProductAdapter("http://127.0.0.1:3000")
const form = new Form
let cart = JSON.parse(localStorage.getItem("cart")) || []
let cartPage = "cart"

document.addEventListener("DOMContentLoaded", () => {
    productAdapter.getProducts();
    form.listenAddToCart();
    form.listenCartItem();
    form.checkoutForm();
    shoppingCart();
    checkout();
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

function addCart(){
    const cartContainer = document.getElementById("cart-container")
    cart.forEach(id => {
        let product = Product.all.find((element) => element.id == id)
        cartContainer.innerHTML += `<p id="${product.id}"> ${product.name} - $ ${product.price}0 <button class="btn btn-danger" data-action="delete-item-cart">Remove from Cart</button> </p>`
    })
}



function checkout(){
    const checkout = document.getElementById("checkout")

    checkout.addEventListener("click", () => {
        console.log("Checkout")
        localStorage.setItem("cart", JSON.stringify([]))
        cart = []
        document.getElementById("cart-container").innerHTML = ""
    })
}

