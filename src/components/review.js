class Review {
    constructor(baseURL){
        this.baseReviewURL = `${baseURL}/api/v1/reviews`
    }

    getReviews(){
        fetch(this.baseReviewURL)
        .then(resp => resp.json())
        .then(reviews => {
            reviews.forEach(review => {
                let r = new Review(review)
                r.addToDom()
            })
        })
        .catch(error => console.error(error))
    }

    editReview(editMode, nameInput){
        fetch(`${this.baseReviewURL}/${editMode.dataset.id}`, {
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
                editMode.children[0].innerText = data.product.name
                editMode = false
                document.getElementById('review-submit').value = "Create Review"
                nameInput.value = ""  
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error(err))
    }

    createReview(nameInput){
        fetch(this.baseReviewURL, {
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
                const r = new review(data.review)
                r.addToDom()
            } else {
                alert(data.errors)
            }
            nameInput.value = ""
        })
        .catch(err => console.error("I'm in the catch!", err))
    }
}