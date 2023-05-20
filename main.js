// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.


// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
// Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto.


// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.aa


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvels Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// Setto le VARIABILI
const imgButtonContainer = document.getElementById("imgButtonContainer")
const imgContainer = document.getElementById("imgContainer")
const phraseContainer = document.getElementById("phraseContainer")
const schedaFrase = []

let immagine = images.forEach(element => {

    // Destructuring
    let { image, title, text } = element;

    // Creo le schede pcon l'immagine
    let scheda = `<!--Inserisco la scheda -->
    <div id="imgContainer">
        <!-- Inserisco l'immagine -->
        <img src="${image}" alt="${image}">
    </div>`

    // Creo le schede con le relative frasi
    let frasi = ` <!-- Inserisco la parte testuale -->
    <div class="text">
        <h3 class="subtitle">${title}</h3>
        <p class="text">${text}</p>
    </div>`

    // Inserisco le immagini nel thumbnails
    let immagine = `<div class="thumbnailsImg opacityYes"> <img src="${image}" alt="${image}"></div>`
    thumbnailsContainer.innerHTML += immagine

    // Creo dei mini array che inserisco a loro volta in un array più grande
    let coppia = []
    coppia.push(scheda, frasi)
    schedaFrase.push(coppia)
});

let activeItem = 0;

// Definisco la nodelist di classi di thumbnailsImg
const miniatura = document.querySelectorAll(".thumbnailsImg")
miniatura[activeItem].classList.add("active")
miniatura[activeItem].classList.remove("opacityYes")

// Definisco delle nuove variabili
let coppie = schedaFrase[activeItem]
const buttonUp = document.getElementById("topButton")
const buttonDown = document.getElementById("bottomButton")


// Inserisco nel imgContainer l'immagine e la frase con activeItem = 0
imgContainer.innerHTML += (coppie[0])
phraseContainer.innerHTML += (coppie[1])
console.log(imgButtonContainer);



// Gestisco l'evento sul click sul NEXT
buttonUp.addEventListener("click",
    function () {

        // Definisco la variabile immagine
        let coppie = schedaFrase[activeItem + 1]

        // Rimuovo la classe activeItem dall'elemento
        miniatura[activeItem].classList.remove("active")
        miniatura[activeItem].classList.add("opacityYes")

        // Se non sono all'ultimo elemento
        if (activeItem == schedaFrase.length - 1) {
            activeItem = 0
            coppie = schedaFrase[activeItem]
        }

        else {
            activeItem++
        }

        // Aggiungo la classe activeItem all'elemento
        miniatura[activeItem].classList.add("active")
        miniatura[activeItem].classList.remove("opacityYes")

       // Incollo l'immagine a imgContainer e la frase a phraseContainer
        imgContainer.innerHTML = (coppie[0])
        phraseContainer.innerHTML = (coppie[1])
    }
)



// Gestisco l'evento sul click sul BEFORE
buttonDown.addEventListener("click",
    function () {

        // Definisco la variabile immagine
        let coppie = schedaFrase[activeItem - 1]

        // Rimuovo la classe activeItem dall'elemento
        miniatura[activeItem].classList.remove("active")
        miniatura[activeItem].classList.add("opacityYes")

        // Se non sono al primo elemento
        if (activeItem == 0) {
            activeItem = schedaFrase.length - 1
            coppie = schedaFrase[activeItem]
        }

        else {
            activeItem--
        }

        // Aggiungo la classe activeItem all'elemento
        miniatura[activeItem].classList.add("active")
        miniatura[activeItem].classList.remove("opacityYes")

        // Incollo l'immagine a imgContainer e la frase a phraseContainer
        imgContainer.innerHTML = (coppie[0])
        phraseContainer.innerHTML = (coppie[1])
    }
)

