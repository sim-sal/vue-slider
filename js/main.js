// array di oggeti contenente le proprietà di ogni immagine da inserire nel DOM
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
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
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// seleziono il container di riferimento presente nel DOM nel quale inseriremo tutte il immagini
const generalContainer = document.getElementById("img-container");

// cicliamo l'inserimento dei div contenente immagine, titolo e testo
images.forEach(element => {
    // creo il blocco composto da 2 div 
    const blocchetto = 
    `<div class="item">
        <img src="${element.image}" alt="">
    </div>

    <div class="card-details hidden">
        <h3>${element.title}</h3>
        <span>${element.text}</span>
    </div>`;

    // li inserisco nel container
    generalContainer.innerHTML += blocchetto;
    
});

// assegno al primo "div" contenente l'immagine la classe active
const activeImg = document.querySelector("div > .item");
activeImg.classList.add("active");

const activeCard = document.querySelector(".card-details");
activeCard.classList.remove("hidden");

// seleziono il pulsante per far scorrere le immagini
let forward = document.querySelector('.forward');

// gestisco l'evento sul click sul pulsante forward
let activeItem = 0;

forward.addEventListener('click',

    function(){
        // seleziono tutte le immagini tramite la classe item
        let items = document.querySelectorAll(".item");
        console.log(items);

        // rimuovo a tutte le immagini la classe active
        items[activeItem].classList.remove("active");

        // aggiungo a tutte le card relative ai dettagli dell'immagine la classe hidden
        let cards = document.querySelectorAll(".card-details");
        cards[activeItem].classList.add("hidden");

        if (activeItem === images.length - 1) {
            activeItem = -1;
        }

        // incremento il valore di posizionamento
        activeItem++;
        
        // aggiungo la classe per rendere l'immagine visibile
        items[activeItem].classList.add("active");

        // rimuovo la classe hidden per rendere la card visibile
        cards[activeItem].classList.remove("hidden");
        
    }

)

// eseguo il procedimento inverso per il bottone back
let back = document.querySelector(".back");

back.addEventListener('click',

    function(){
        // seleziono tutte le immagini tramite la classe item
        let items = document.querySelectorAll(".item");
        console.log(items);

        // rimuovo a tutte le immagini la classe active
        items[activeItem].classList.remove("active");

        // aggiungo a tutte le card relative ai dettagli dell'immagine la classe hidden
        let cards = document.querySelectorAll(".card-details");
        cards[activeItem].classList.add("hidden");

        if (activeItem === 0) {
            activeItem = images.length;
        }

        // decremento il valore di posizionamento
        activeItem--;
        
        // aggiungo la classe per rendere l'immagine visibile
        items[activeItem].classList.add("active");

        // rimuovo la classe hidden per rendere la card visibile
        cards[activeItem].classList.remove("hidden");
        
    }

)





