const mainContainer = document.querySelector(".main")
const thanksContainer = document.querySelector(".main-2")
const submitButton = document.getElementById("sub")
const rating = document.getElementById("rates")
const rate = document.querySelectorAll(".bt")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rate.forEach((rate) => {
    rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML     
    })
})