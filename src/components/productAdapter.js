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
            addCart()
        })
        .catch(error => console.error(error))
    }
    //input a button on page => event listener
    sortBtn() {
        const sortBtn = document.getElementById("sortBtn")
        const unsortBtn = document.getElementById("unsortBtn")

        sortBtn.addEventListener("click", this.handleSortBtn)
        unsortBtn.addEventListener("click", this.handleUnsortBtn)
        
    }
    //grabs all the products and sorts through products 
    handleUnsortBtn = (e) => {
        
        this.clearProducts()
       
        let productArr = Product.all.sort(function (a, b) {
            return b.price - a.price
          });
    
       productArr.forEach(productArr => {
           productArr.addToDom()
       }) 
    }

    handleSortBtn = (e) => {
        
        this.clearProducts()
       
        let productArr = Product.all.sort(function (a, b) {
            return a.price - b.price 
          });
    
       productArr.forEach(productArr => {
           productArr.addToDom()
       }) 
    }

    clearProducts() {
       const products = document.getElementById('product-container')
       products.innerHTML = ""
    }    

}
