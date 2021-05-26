class Form {

    constructor(){
        
        this.handleOrder = this.handleOrder.bind(this)
    }


    listenOrder(){
        const productContainer = document.getElementById("product-container");
        productContainer.addEventListener("click", this.handleOrder)
    }
    
    handleOrder(e){
        const li = e.target.parentElement
        const action = e.target.dataset.action
        const productId = parseInt(e.target.parentElement.dataset.id)
        let productName = e.target.parentElement.children[0].innerText
        
        switch (action) {

            case "add-cart":
                console.log("Adding Item to Cart", productId)

                cart.push(productId)
                localStorage.setItem("cart", JSON.stringify(cart))
                alert(`Yay! Added ${productName} to cart.`)
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