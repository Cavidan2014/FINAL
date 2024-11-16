let cars = JSON.parse(localStorage.getItem("komputerler")) || []
let cards = document.querySelector(".cards")
let modal2 = new bootstrap.Modal(document.querySelector(".modal"))
let modalBody = document.querySelector(".modal-body")
let tbody = document.querySelector("tbody")
displayCars(cars)

function displayCars(newCars) {

  newCars.forEach(car => {


    cards.innerHTML +=
      `
          <div class="card2 ">
          <div class="card col-4 " >
          <img src="${car.masininsekili}">
          <h6 class="card-text car">Təsvir: ${car.tesvir}</h6>
          <h6 class="card-title car">Ad:  ${car.marka}</h6>
          <h6 class="card-text car">Qiymet:  ${car.qiymet}</h6>
         
          
            <button type="button" class="btn btn-primary "  onclick="openModal(${car.id}) ">
     Komputer
    </button>
         </div>
  
        </div>
       </div>`



  });
}

function openModal(carId) {
  modal2.show()
  let findedCar = cars.find(function (car) {
    return car.id == carId
  })
  let element = `          <div class="card-body ">
          <h2 class="p">Komputer haqqında ətraflı məllumat</h2>
          
      <img class="img10" src="${findedCar.masininsekili}">
        <h5  class="card-title car">Ad:${findedCar.Ad}</h5>
        <p class="card-text car">təsvir:${findedCar.tesvir}</p>
        <p class="car">Qiymət:${findedCar.qiymet}</p>
                <p class="car">Əməli Yaddaş (GB):${findedCar.yurus}</p>
                <p class="car">Daimi Yaddaş (GB) :${findedCar.daimiy}</p>
                <p class="car">Daimi Yaddaş tipi :${findedCar.daimiyt}</p>
                <p class="car">Əməliyyatlar sistemi :${findedCar.Əməliyatlarsistemi}</p>
                <p class="car">Video Card (GB) :${findedCar.VideoCart}</p>
          </div>`

  modalBody.innerHTML = element
  console.log(findedCar);



}

let items = document.querySelectorAll(".list-group-item")

items.forEach(function (item) {


  item.addEventListener("click", function (e) {
    items.forEach(function (k) {
      k.classList.remove("active")
    })
    e.target.classList.add("active")

    if (e.target.innerHTML == "Hamsi") {
      displayCars(cars)
    }
    else {
      let filteredCars = cars.filter(function (car) {
        return car.marka.toLowerCase() == e.target.innerHTML.toLowerCase()
      })
      if (filteredCars.length == 0) {
        cards.innerHTML = `<h1 class="h1">${e.target.innerHTML} kategoriyasinda komputer yoxdur </h1>`
      }
      else {
        cards.innerHTML = ""
        displayCars(filteredCars)
      }

    }
  })

})

// let search = document.querySelector(".search")

// search.addEventListener("input", function (e) {
//   let filteredCars = cars.filter(function (car) {
//   return  car.marka.toLowerCase().includes(e.target.value.toLowerCase()) || car.qiymet.toLowerCase().includes(e.target.value.toLowerCase())
//   })

//   displayCars(filteredCars)
// })

let search = document.querySelector(".search")

search.addEventListener("input", function (e) {
  let filteredCars2 = cars.filter(function (car) {
    return car.Ad.toLowerCase().includes(e.target.value.toLowerCase())||car.qiymet.toLowerCase().includes(e.target.value.toLowerCase())
  })
  console.log(filteredCars2);
  displayCars(filteredCars2)
})