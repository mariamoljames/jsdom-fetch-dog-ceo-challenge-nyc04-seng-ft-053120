// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

window.addEventListener('DOMContentLoaded', function(evt) {
 fetch(imgUrl)
 .then(res => res.json() )
 .then((dogObject) => {
    turnDogIntoHTML(dogObject)
 })
})

let turnDogIntoHTML = (dogObject) => {
    let imgArray = dogObject["message"]
    let blankUl = document.createElement("ul")
    for (let img of imgArray) {
        let blankLi = document.createElement("li")
        let blankImg = document.createElement("img")
        blankImg.src = img
        blankLi.append(blankImg)
        blankUl.append(blankLi)
    }
    document.innerHTML = blankUl
}