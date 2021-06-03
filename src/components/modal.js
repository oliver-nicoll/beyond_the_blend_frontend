    const modalSearchBtn = document.getElementById('modal-btn')
    const modal = document.querySelector('.modal-overlay')
    const closeBtn =document.querySelector(".close-btn")

closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal")
})

//will add modal to check out form
