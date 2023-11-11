const username = document.querySelector(".card-title")
const email = document.querySelector(".card-text")

const logOutBtn = document.querySelector("#logOut")

let keyValue = localStorage.getItem("last")

let user = JSON.parse(localStorage.getItem(keyValue))

username.textContent = user.username
email.textContent = user.email

logOutBtn.addEventListener("click", logOut)

function logOut(){
    window.location.href = "index.html"
    localStorage.removeItem('last')
}