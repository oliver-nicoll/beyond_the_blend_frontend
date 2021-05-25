class MarketAdapter {

    constructor(baseURL){
        this.baseMarketURL = `${baseURL}/api/v1/markets`
    }

    getMarkets(){
        fetch(this.baseMarketURL)
        .then(r => r.json())
        .then(market => {
            market.forEach(market => {
                const m = new Market(market)
                m.addToDom()
            })
        })
        .catch(error => console.error(error))

    }

    editMarket(editMode, nameInput){
        fetch(`http://127.0.0.1:3000/api/v1/markets/${editMode.dataset.id}`, {
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
                // editMode.children[0].innerText = data.market.name
                // editMode = false
                // document.getElementById('market-submit').value = "Create market"
                // nameInput.value = ""  
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error(err))
    }

    createMarket(nameInput){
        fetch("http://127.0.0.1:3000/api/v1/markets", {
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
                const s = new market(data.market)
                s.addToDom()
            } else {
                alert(data.errors)
            }
            nameInput.value = ""
        })
        .catch(err => console.error("I'm in the catch!", err))
    }

    deleteMarket(li){
        fetch(`http://127.0.0.1:3000/api/v1/markets/${li.dataset.id}`, {
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
