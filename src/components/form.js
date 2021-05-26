class form {

    constructor(){
        
        this.handleOrder = this.handleOrder.bind(this)
    }


    listenOrder(){
        const cardBody = document.getElementById("card-body");
        cardBody.addEventListener("click", this.handleOrder)
    }
    
    handleOrder(e){
        const li = e.target.parentElement
        debugger
        const action = e.target.dataset.action
        switch (action) {

            case "cart":
                console.log("Adding Item to Cart", e.target.parentElement.dataset.id)
                
                break;

            default:
                break;
        }
    }
}