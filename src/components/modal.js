    const modalSearchBtn = document.getElementById('modal-btn')
    const modal = document.querySelector('.modal-overlay')
    const closeBtn =document.querySelector(".close-btn")
// modalContent() {
//     closeBtn.addEventListener("click", this.handleClosedBtn)
// }

// handleClosedBtn(e){
//     console.log(e)
//     modal.classList.remove('open-modal')
//  }

closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal")
})
