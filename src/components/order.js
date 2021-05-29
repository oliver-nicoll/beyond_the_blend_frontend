class Order {
    static all = []

    constructor({id, cart_array, email}){
        this.id = id
        this.cart_array = cart_array
        this.email = email

        Order.all.push(this)
    }

    static createOrder(emailInput){
        fetch("http://127.0.0.1:3000/api/v1/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                order: {
                    email: emailInput.value,
                    cart_array: JSON.parse(localStorage.getItem("cart"))
                }
            }) 
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 201){
                const o = new Order(data.order)
                alert(`Order successfully made - your order number is: ${o.id}`)
                
            } else {
                alert(data.errors)
                console.log(data.errors)
            }
            emailInput.value = ""
            localStorage.setItem("cart", JSON.stringify([]))
            cart = []
            document.getElementById("cart-container").innerHTML = ""
            document.getElementById("checkout-container-form").innerHTML = ""
        })
        .catch(err => console.error("I'm in the catch!", err))
    }

    

    


}