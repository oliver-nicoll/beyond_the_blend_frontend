class Market {
    static all = []

    constructor(name, description, products) {
        this.name = name 
        this.description = description
        this.products = products

        Market.all.push(this)
    }
}