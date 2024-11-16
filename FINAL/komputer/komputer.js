let Ad = document.querySelector("#validationCustom01")
let marka = document.querySelector("#validationCustom02")
let qiymet = document.querySelector("#validationCustom03")
let tesvir = document.querySelector("#validationCustom40")
let masininsekili = document.querySelector("#validationCustom06")
let yurus = document.querySelector("#validationCustom07")
let Yanacaqnovu = document.querySelector("#validationCustom08")
let Yeni = document.querySelector("#flexCheckChecked")
let daimiy = document.querySelector("#validationCustom09")
let daimiyt = document.querySelector("#validationCustom10")
let Əməliyatlarsistemi = document.querySelector("#validationCustom11")
let VideoCart = document.querySelector("#validationCustom12")
let form = document.querySelector(".form")
let Modal3 = new bootstrap.Modal(document.querySelector("#examplemodal2"))
let profileimg = document.querySelector(".input2")
let user = JSON.parse(localStorage.getItem("user")) || []
let komputerler = JSON.parse(localStorage.getItem("komputerler")) || []


function generetedId() {
    if (komputerler.length == 0) {
        return 1
    }
    else { return komputerler[komputerler.length - 1]?.id + 1 }

}
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(form);

    let komputer = {
        id: generetedId(),
        Ad: Ad.value,
        marka: marka.value,
        tesvir: tesvir.value,
        qiymet: qiymet.value,
        masininsekili: masininsekili.value,
        yurus: yurus.value,
        Yanacaqnovu: Yanacaqnovu.value,
        Yeni: Yeni.value,
        daimiy: daimiy.value,
        daimiyt: daimiyt.value,
        Əməliyatlarsistemi: Əməliyatlarsistemi.value,
        VideoCart: VideoCart.value,


    }
    komputerler.push(komputer)
    localStorage.setItem("komputerler", JSON.stringify(komputerler))
})

let tbody = document.querySelector(".tbody")
komputerler.forEach(Komputer => {
    console.log(Komputer);
    
    let komputer =
        `<tr>
    <td>${Komputer.id}</td>
    <td>${Komputer.marka}</td>
    <td><img class="img10"   src="${Komputer.masininsekili}" alt=""></td>
    <td>${Komputer.qiymet}</td>
    <div class="div">
    <td><button onclick="editCar(${Komputer.id})" style="margin-left:10px" class="btn btn-info edit">Edit</button></td>
    <td><button onclick="removeCom(${Komputer.id})" class="btn btn-danger ">Sil</button></td>
    </div>
    </tr>
    `
    
    tbody.innerHTML += komputer

})


//profileimg.innerHTML = `<img>${user.profileimg}</img>`
//username2.innerHTML = user.username2



let editmodel = document.querySelector(".editmodel")
let edittesvir = document.querySelector(".edittesvir")
let editmarka = document.querySelector(".editmarka")
let editqiymet = document.querySelector(".editqiymet")
let editen = document.querySelector('.editen')
let edityurus = document.querySelector(".edityurus")
let editmuherikinn = document.querySelector(".editmuherikinn")
let editprofile = document.querySelector(".editprofile")
let editdaimiy = document.querySelector("#validationCustom09")
let editdaimiyt = document.querySelector("#validationCustom10")
let editƏməliyatlarsistemi = document.querySelector("#validationCustom11")
let editVideoCart = document.querySelector("#validationCustom12")

let Komputerid
let editFrom = document.querySelector(".editFrom")
editFrom.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(Komputerid);
    
    if (editFrom.checkValidity()) {
        komputerler = komputerler.map(function (Komputer) {
            if (Komputer.id == Komputerid) {
                return {
                    ...Komputer,
                    marka: editmarka.value,
                    tesvir: edittesvir.value,
                    qiymet: editqiymet.value,
                    yurus: edityurus.value,
                    Yanacaqnovu: editmuherikinn.value,
                    masininSekli: editprofile.value,
                    daimiy: editdaimiy.value,
                    Əməliyatlarsistemi: editƏməliyatlarsistemi.value,
                    VideoCart: editVideoCart.value

                }
            }
            return Komputer

        })
        localStorage.setItem("komputerler", JSON.stringify(komputerler))
        location.reload()
    }
    else {
        alert("Butun inputlar dolu olmalidir")
    }
})

let editmodal = new bootstrap.Modal(document.querySelector("#staticBackdrop"))
function editCar(Komputerid2) {
    console.log(Komputerid);
    
    Komputerid = Komputerid2
    editmodal.show()

    let selectedCar = komputerler.find(function (Komputer) {
        return Komputer.id == Komputerid
    })
    editmarka.value = selectedCar.marka
    editqiymet.value = selectedCar.qiymet
    edityurus.value = selectedCar.yurus
    editprofile.value = selectedCar.masininsekili
    editdaimiy.value = selectedCar.daimiy
    editƏməliyatlarsistemi.value = selectedCar.Əməliyatlarsistemi
    editVideoCart.value = selectedCar.VideoCart
    edittesvir.value = selectedCar.tesvir

}

///masininsekili.addEventListener("input", (e) => {
//imgparent.innerHTML = `<img class="checkProfilreimg"style="width:100px;height:100px"src="${e.target.value}"alt="sekilin linki yalnisdir"`
//})//
let table = document.querySelector("table")
function removeCom(ComId) {
    komputerler = komputerler.filter(function (com) {
        return com.id != ComId
    })
    localStorage.setItem("komputerler", JSON.stringify(komputerler))
    location.reload()
}

