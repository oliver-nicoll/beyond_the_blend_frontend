class Form {

    constructor(){
        this.handleCartItem = this.handleCartItem.bind(this)
        this.handleOrder = this.handleOrder.bind(this)
    }

    listenCartItem(){
        const cartContainer = document.getElementById("cart-container")
        cartContainer.addEventListener("click", this.handleCartItem)
    }

    listenOrder(){
        const productContainer = document.getElementById("product-container");
        productContainer.addEventListener("click", this.handleOrder)
    }

    handleCartItem(e){
        
        const divCartSidePg = e.target.parentElement
        const action = e.target.dataset.action
        const productId = parseInt(e.target.parentElement.dataset.id)

        switch (action) {

            case "delete-item-cart":
                console.log("Delete Item to Cart", productId)
                cart.splice(cart.indexOf(productId), 1)
                localStorage.setItem("cart", JSON.stringify(cart))

                break;

            default:
                break;
        }
    }
    
    handleOrder(e){
        const li = e.target.parentElement
        const action = e.target.dataset.action
        const productId = parseInt(e.target.parentElement.dataset.id)
        let productName = e.target.parentElement.children[0].innerText
        const cartContainer = document.getElementById("cart-container")
        
        switch (action) {

            case "add-cart":
                console.log("Adding Item to Cart", productId)

                cart.push(productId)
                localStorage.setItem("cart", JSON.stringify(cart))
                alert(`Yay! Added ${productName} to cart.`)
                cartContainer.innerHTML += `<p> ${productId} </p>`
                break;

            case "delete-item-cart":
                console.log("Delete Item to Cart", productId)
                cart.splice(cart.indexOf(productId), 1)
                localStorage.setItem("cart", JSON.stringify(cart))

                break;

            default:
                break;
        }
    }


}