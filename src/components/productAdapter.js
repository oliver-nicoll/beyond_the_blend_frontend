class ProductAdapter {

    constructor(baseURL){
        this.baseProductURL = `${baseURL}/api/v1/products`
    }

    getProducts(){
        fetch(this.baseProductURL)
        .then(resp => resp.json())
        .then(Products => console.log(Products))
        // .then(products => {
        //     products.forEach(product => {
        //         let p = new Product(product)
        //         p.addToDom()
        //     })
            // debugger
        // })
        .catch(error => console.error(error))

    }

    editProduct(editMode, nameInput){
        fetch(`http://127.0.0.1:3000/api/v1/products/${editMode.dataset.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 204) {
                // editMode.children[0].innerText = data.Product.name
                // editMode = false
                // document.getElementById('Product-submit').value = "Create Product"
                // nameInput.value = ""  
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error(err))
    }

    createProduct(nameInput){
        fetch("http://127.0.0.1:3000/api/v1/Products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value
            })   
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("I'm in the second then!", data)
            if (data.status === 201){
                const p = new Product(data.product)
                p.addToDom()
            } else {
                alert(data.errors)
            }
            nameInput.value = ""
        })
        .catch(err => console.error("I'm in the catch!", err))
    }

    deleteProduct(li){
        fetch(`http://127.0.0.1:3000/api/v1/products/${li.dataset.id}`, {
            method: "DELETE"
        })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            if (data.message === "Successfully deleted"){
                li.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }
}
