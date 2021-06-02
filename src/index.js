const productAdapter = new ProductAdapter("http://127.0.0.1:3000")
const form = new Form
let cart = JSON.parse(localStorage.getItem("cart")) || []
let cartPage = "cart"

document.addEventListener("DOMContentLoaded", () => {
    productAdapter.getProducts();
    form.searchOrderForm();
    form.listenAddToCart();
    form.listenCartItem();
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
        form.checkoutForm();
    })
}

function orderTotal(){
    const getCart = JSON.parse(localStorage.getItem("cart"))
   
    return getCart.reduce((acc, currentProductId) => { 
        let product = Product.all.find((element) => element.id == currentProductId)
        return acc + parseFloat(product.price)
    }, 0);

}

function iterateObj(obj) {
 
    const modalText = document.getElementById('modal-text')

    for(prop in obj) {
        if(typeof(obj[prop]) == "object"){
            iterateObj(obj[prop]);
        } else {
            if(prop == "quantity" || prop == "name") {
                 modalText.innerHTML += `${prop} : ${obj[prop]} <br>`;
            }
        }
    }
}

function getOrderById(id){
    fetch(`http://127.0.0.1:3000/api/v1/orders/${id}`)
        .then(resp => resp.json())
        .then(order => {
            iterateObj(order)
        })
        .catch(error => console.error(error))
}


