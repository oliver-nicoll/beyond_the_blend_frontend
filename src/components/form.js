class form {

    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEditDelete = this.handleEditDelete.bind(this)
    }

    addCreateForm(){
        const formContainer = document.getElementById("form-container");
        const form = document.createElement('form');
        form.innerHTML = `<input id="name-input" placeholder='name' type='text'/><br><input id="product-submit" value='Create Product' type='submit'/>`
       
        formContainer.append(form)
    
        form.addEventListener("submit", this.handleSubmit)
    }

    
    handleSubmit(event) {
        event.preventDefault()
        const nameInput = event.target[0]
        if (editMode){
            productAdapter.editProduct(editMode, nameInput)
        } else {
            productAdapter.createProduct(nameInput)
        }    
    }

    listenEditDelete(){
        const productsContainer = document.getElementById("product-container");
        productsContainer.addEventListener("click", this.handleEditDelete)
    }
    
    handleEditDelete(e){
        const li = e.target.parentElement
        const action = e.target.dataset.action
        switch (action) {
            case "delete":
                productAdapter.deleteProduct(li)
                break;

            case "edit":
                
                editMode = li
                
                document.getElementById('Product-submit').value = "Update"
                
                document.getElementById('name-input').value = li.children[0].innerText
                
                break;

            case "display":
                if (reviews) reviews.remove()
                console.log("Displaying Reviews", li.dataset.id)
                const r = Product.all.find(r => r.id == li.dataset.id)
                r.renderProducts()
                break;

            case "cart":
                console.log("Adding Item to Cart", e.target.parentElement.dataset.id)
                
                break;

            default:
                break;
        }
        // if (action === "delete"){
        //     // delete this Product from backend
            
        // } else if (action === "edit") {
            // // editmode -> li
            // editMode = li
            // // button -> updateProduct
            // document.getElementById('Product-submit').value = "Update"
            // // populate input with name of Product
            // document.getElementById('name-input').value = li.children[0].innerText
            // // submit edit button, update Product (in different function)
        // } else if (action === "display") {
        //     if (reviews) reviews.remove()
        //     console.log("Displaying Products", li.dataset.id)
        //     const s = Product.all.find(s => s.id == li.dataset.id)
        //     s.renderProducts()
        // } else if 
    }
}