// class Review {
//     constructor(baseURL){
//         this.baseReviewURL = `${baseURL}/api/v1/reviews`
//     }

//     getReviews(){
//         fetch(this.baseReviewURL)
//         .then(resp => resp.json())
//         .then(reviews => {
//             reviews.forEach(review => {
//                 let r = new Review(review)
//                 r.addToDom()
//             })
//         })
//         .catch(error => console.error(error))
//     }


//     createReview(nameInput){
//         fetch(this.baseReviewURL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({
//                 name: nameInput.value
//             })   
//         })
//         .then(resp => resp.json())
//         .then(data => {
//             console.log("I'm in the second then!", data)
//             if (data.status === 201){
//                 const r = new review(data.review)
//                 r.addToDom()
//             } else {
//                 alert(data.errors)
//             }
//             nameInput.value = ""
//         })
//         .catch(err => console.error("I'm in the catch!", err))
//     }
// }