/*
send fetch request to backend
*/
document.addEventListener("DOMContentLoaded", () => {
    fetchMarket();
})
function fetchMarket () {
    const marketContainer = document.getElementById("market-container")
    
    fetch("http://127.0.0.1:3000/api/v1/markets")
    .then(resp => resp.json())
    .then(info => {
        info.forEach((market) => {
            marketContainer.innerHTML += `<li>${market.name}</li>`
        })
    })
    .catch(err => console.warn(err))
}


