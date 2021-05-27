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

        let productId = e.target.parentElement.id
        let index = cart.indexOf(productId)

        e.target.parentElement.remove()
        cart.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cart))

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
                let pTag = document.createElement('p')
                pTag.innerHTML = productId
                pTag.id = productId
                cartContainer.append(pTag)
                break;

            default:
                break;
        }
    }


}