const Username = document.querySelector("#validationCustomUsername2")
const pasword = document.querySelector("#validationCustomUsername3")
let modal2 = new bootstrap.Modal(document.querySelector(".modal"))
let form2 = document.querySelector(".form2")
let users = JSON.parse(localStorage.getItem("users")) || []

form2.addEventListener("submit", (e) => {
  e.preventDefault()

  let user = users.find((item) => {
    return item.Username == Username.value && item.pasword == pasword.value
  })

  if (user) {
    localStorage.setItem("user", JSON.stringify(user))
    location.href = "../home/home.html"
  }
  else {
    modal2.show()
  }
})