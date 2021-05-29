class Form {

    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCartItem = this.handleCartItem.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    searchOrderForm(){
        const orderForm = document.getElementById('search-orders')

        orderForm.addEventListener("submit", this.handleOrderForm )
    }

    handleOrderForm = (e) => {
        e.preventDefault()
        const input = e.target[0].value
        getOrderById(input);
    }

    checkoutForm(){
        const checkoutContainer = document.getElementById('checkout-container-form')
        const form = document.createElement('form')
    
        form.innerHTML = `
        <label for="email-input"> E-mail:</label>
        <input id="email-input" placeholder='E-mail' type='text'/><br>
        <label for="order-total"> Order Total:</label>
        <p> $${orderTotal()} </p><br>
        <input type="submit" value="Submit Order">`
        
        checkoutContainer.append(form)
        
        form.addEventListener("submit", this.handleSubmit)
    }
    
    
    listenCartItem(){
        const cartContainer = document.getElementById("cart-container")
        cartContainer.addEventListener("click", this.handleCartItem)
    }
    
    listenAddToCart(){
        const productContainer = document.getElementById("product-container");
        productContainer.addEventListener("click", this.handleAddToCart)
    }
    
    handleSubmit(e) {
        e.preventDefault()
        const emailInput = e.target[0]
        const cart_array = localStorage.getItem("cart")
        Order.createOrder(emailInput, cart_array)
        
    }

    handleCartItem(e){
        
        let productId = e.target.parentElement.id
        let index = cart.indexOf(productId)

        e.target.parentElement.remove()
        cart.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cart))

    }
    
    handleAddToCart(e){
        
        const action = e.target.dataset.action
        const productId = parseInt(e.target.parentElement.dataset.id)
        let productName = e.target.parentElement.children[0].innerText
        const cartContainer = document.getElementById("cart-container")

        switch (action) {
            case "add-cart":

                cart.push(productId)
                localStorage.setItem("cart", JSON.stringify(cart))
                alert(`Yay! Added ${productName} to cart.`)

                let product = Product.all.find((element) => element.id == productId)
                cartContainer.innerHTML += `<p id="${product.id}"> ${product.name} - $ ${product.price}0 <button class="btn btn-danger" data-action="delete-item-cart">Remove from Cart</button> </p>`
                
               break;

            default:
                break;
        }
    }



}