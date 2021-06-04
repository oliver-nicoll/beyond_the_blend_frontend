class Product {
    static all = []

    constructor({id, name, description, price, image, category, stock}){
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
            `<li class="product-card" data-id=${this.id} style="list-style: none;">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src="${this.image}" class="card-img-top" >
                        <div data-id=${this.id} id="card-body" class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.description}</p>
                            <span>$ ${this.price}0</span>
                            <button class="btn btn-secondary" data-action="add-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>   
            </li><br>`
        )
    }

    addToDom(){
        const productContainer = document.getElementById("product-container");
        productContainer.innerHTML += this.render()
    }

  

}