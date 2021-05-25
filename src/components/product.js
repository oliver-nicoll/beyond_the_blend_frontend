class Product {
    static all = []

    constructor({id, name, description, price, stock}){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.stock = stock
        this.image = image
        this.category = category

        Product.all.push(this)
    }

    render(){
        return(
            `<li data-id=${this.id}><span>${this.name}</span> - <span>${this.price}</span> <button data-action="cart">Add to Cart</button></li>`
        )
    }
}