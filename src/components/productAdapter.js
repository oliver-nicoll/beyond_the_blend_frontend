class ProductAdapter {

    constructor(baseURL){
        this.baseProductURL = `${baseURL}/api/v1/products`
    }

    getProducts(){
        fetch(this.baseProductURL)
        .then(resp => resp.json())
        .then(products => {
            products.forEach(product => {
                // debugger
                let p = new Product(product)
                p.addToDom()
            })
            addCart()
        })
        .catch(error => console.error(error))
    }

}
