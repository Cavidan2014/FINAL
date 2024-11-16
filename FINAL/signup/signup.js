
const Username = document.querySelector("#validationCustomUsername7")
const pasword = document.querySelector("#validationCustomUsername8")
let modal2 = new bootstrap.Modal(document.querySelector(".modal"))
const form = document.querySelector("form")
let users = JSON.parse(localStorage.getItem("users")) || []

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (form.checkValidity()) {
    let checkUser = users.some(function (e) {
      return e.Username == Username.value
    })

    if (checkUser) {
      modal2.show()
    }

    else {
      let obj = {

        Username: Username.value,
        pasword: pasword.value,


      }
      users.push(obj)
      localStorage.setItem("users", JSON.stringify(users))

      location.href = "../signin/signin.html"


    }
  }
  else {

    alert("butun inputlar dolu olmalidir")
  }
})