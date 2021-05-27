class Order {

    static createOrder(emailInput){
        fetch("http://127.0.0.1:3000/api/v1/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: emailInput.value
                cart: 
            })   
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("I'm in the second then!", data)
            if (data.status === 201){
                const o = new Order(data.order)
                o.addToDom()
            } else {
                alert(data.errors)
            }
            emailInput.value = ""
            localStorage.setItem("cart", JSON.stringify([]))
            cart = []
            document.getElementById("cart-container").innerHTML = ""
        })
        .catch(err => console.error("I'm in the catch!", err))
    }


}