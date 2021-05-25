let editMode = false
const productAdapter = new ProductAdapter("http://127.0.0.1:3000")

document.addEventListener("DOMContentLoaded", () => {
    productAdapter.getProducts();
    // addCreateForm();
    // listenEditDelete();
})

// function addCreateForm(){
//     const formContainer = document.getElementById("form-container");
//     const form = document.createElement('form');
//     form.innerHTML = `<input id="name-input" placeholder='name' type='text'/><br><input id="product-submit" value='Create product' type='submit'/>`

//     formContainer.append(form)

//     form.addEventListener("submit", handleSubmit)
// }

// function handleSubmit(event){
//     event.preventDefault()
//     const nameInput = event.target[0]
//     if (editMode){
//         productAdapter.editproduct(editMode, nameInput)
//     } else {
//         productAdapter.createproduct(nameInput)
//     }    
// }

// function listenEditDelete(){
//     const productContainer = document.getElementById("product-container");
//     productContainer.addEventListener("click", handleEditDelete)
// }

// function handleEditDelete(e){
//     const li = e.target.parentElement
//     if (e.target.dataset.action === "delete"){
//         productAdapter.deleteproduct(li)
//     } else if (e.target.dataset.action === "edit") {
        
//         editMode = li
        
//         document.getElementById('product-submit').value = "Update"
        
//         document.getElementById('name-input').value = li.children[0].innerText
        
//     }
// }