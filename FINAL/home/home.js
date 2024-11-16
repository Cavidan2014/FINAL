let h2 = document.querySelector(".h2")
let user = JSON.parse(localStorage.getItem("user")) || []
let Cixis=document.querySelector(".Cixis")
function istifadeci() {
    if (user) {
        let element = `<h3 style="padding: 10px;" >istifadəçi adi:${user.Username}</h3>`
        h2.innerHTML += element
    }
    else {
        h2 = ""
    }
}
istifadeci()



  Cixis.addEventListener("click",()=>{
    alert("Çıxış etmək istədiyinizdən əminsinizmi?")
    localStorage.removeItem("user")
    location.href="../signin/signin.html"
  })