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
        
        switch (action) {

            case "add-cart":
                console.log("Adding Item to Cart", productId)
                
                break;

            case "delete-item-cart":
                console.log("Delete Item to Cart", productId)
                
                break;

            default:
                break;
        }
    }
}