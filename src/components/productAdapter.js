class ProductAdapter {

    constructor(baseURL){
        this.baseProductURL = `${baseURL}/api/v1/products`
    }

    getProducts(){
        fetch(this.baseProductURL)
        .then(resp => resp.json())
        .then(products => {
            products.forEach(product => {
                let p = new Product(product)
                p.addToDom()
            })
        })
        .catch(error => console.error(error))
    }

}
