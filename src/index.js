// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogImageContainer = document.querySelector("#dog-image-container");
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dogBreedUl = document.querySelector("#dog-breeds");
const breedDropdown = document.querySelector("#breed-dropdown");


window.addEventListener('DOMContentLoaded', function(evt) {
  fetch(imgUrl)
    .then(res => res.json() )
    .then((dogObject) => {
        turnDogIntoHTML(dogObject)
    })

    fetch(breedUrl)
        .then(res => res.json() )
        .then((breedObject) => {
            addBreedsToPage(breedObject)
        })

})

let turnDogIntoHTML = (dogObject) => {
    let imgArray = dogObject["message"];

    for (let img of imgArray) {
        let blankDiv = document.createElement("div");
        let blankImg = document.createElement("img");
        blankImg.src = img;
        blankDiv.append(blankImg);
        dogImageContainer.append(blankDiv);
    }
}

let addBreedsToPage = (breedObject) => {
    let breedNameArray = Object.keys(breedObject["message"]);

    for (let breedName of breedNameArray) {
        let blankLi = document.createElement("li");
        blankLi.innerText = breedName;
        dogBreedUl.append(blankLi);
    }
}

dogBreedUl.addEventListener('click', function(evt) {
    if (evt.target.tagName === "LI") {
       evt.target.style.color = "blue";
    }
})

breedDropdown.addEventListener('change', function(evt) {
    let letter = evt.target.value;
    let allBreedNames = document.querySelectorAll("ul#dog-breeds li");

    for (let breedName of allBreedNames) {
        let firstLetter = breedName.innerText[0];
        if (firstLetter !== letter) {
            breedName.hidden = true;
        } else {
            breedName.hidden = false;
        }
    }
})