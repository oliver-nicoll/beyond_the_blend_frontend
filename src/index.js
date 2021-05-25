let editMode = false
const Adapter = new Adapter("http://127.0.0.1:3000")

document.addEventListener("DOMContentLoaded", () => {
    addCreateForm();
    Adapter.getMarket();
    listenEditDelete();
})

function addCreateForm(){
    const formContainer = document.getElementById("form-container");
    const form = document.createElement('form');
    form.innerHTML = `<input id="name-input" placeholder='name' type='text'/><br><input id="market-submit" value='Create Market' type='submit'/>`

    formContainer.append(form)

    form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event){
    event.preventDefault()
    const nameInput = event.target[0]
    if (editMode){
        Adapter.editmarket(editMode, nameInput)
    } else {
        Adapter.createmarket(nameInput)
    }    
}

function listenEditDelete(){
    const marketContainer = document.getElementById("market-container");
    marketContainer.addEventListener("click", handleEditDelete)
}

function handleEditDelete(e){
    const li = e.target.parentElement
    if (e.target.dataset.action === "delete"){
        Adapter.deletemarket(li)
    } else if (e.target.dataset.action === "edit") {
        
        editMode = li
        
        document.getElementById('market-submit').value = "Update"
        
        document.getElementById('name-input').value = li.children[0].innerText
        
    }
}