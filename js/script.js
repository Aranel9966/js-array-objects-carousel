/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/




const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
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

let arrowTopEl = document.getElementById('arrowTop');
let arrowBotEl = document.getElementById('arrowBot');
let imgEl = document.getElementById('img');
let scrolBarEl = document.getElementById('scrolBar');
let textEl = document.getElementById('text');
let textPEl = document.getElementById('textP');
let autoPlayEl = document.getElementById('auto-play');
let stopEl = document.getElementById('stop');
let index=0;
let loop;

    
imgEl.src=(images[index].image);
textEl.innerText=`${(images[index].title)} \n ${(images[index].text)}`;


autoPlayEl.addEventListener('click',function(){
    
    loop = setInterval(tick,3000);
    
})
stopEl.addEventListener('click',function(){
    
    stop()
    
})

arrowBotEl.addEventListener('click',function(){


    
    //asseconda dell'indice rimuovo la classe 'active'
    select[index].classList.remove('active');
    // condizione per il loop 
    if(index < images.length-1){
        index++;
        
    }else{
        index=0;
    }
    // aggiungo il src assecondo dell' indice
    imgEl.src=(images[index].image);
    // h2El.innerHTML=(images[index].title);

    textEl.innerText=`${(images[index].title)} \n ${(images[index].text)}`;
    //asseconda dell'indice aggiungo la classe 'active'
    select[index].classList.add('active');

});

arrowTopEl.addEventListener('click',function(){
    
    //asseconda dell'indice rimuovo la classe 'active'
    select[index].classList.remove('active');
    // condizione per il loop 
    if(index > 0){
        index--;
        
    }else{
        index=4;
    }
    // aggiungo il src assecondo dell' indice
    imgEl.src=(images[index].image);

    textEl.innerText=`${(images[index].title)} \n ${(images[index].text)}`;

    //asseconda dell'indice aggiungo la classe 'active'
    select[index].classList.add('active');

});


// for per inserire le img nella scrolbar
images.forEach((img)=>{
    let scrolImg  = document.createElement('img');
    scrolImg.classList.add('img-scrol');
    scrolImg.src=(img.image);
    scrolBarEl.append(scrolImg);
});

const select = document.querySelectorAll(".img-scrol");

//asseconda dell'indice aggiungo la classe 'active'
select[index].classList.add('active')


//////////////////
// function
/////////////////
// function auto play 
function tick(){
    select[index].classList.remove('active');
    
    if(index < images.length-1){    
        index++

    }else{
        index=0    
    }
    
    imgEl.src=(images[index].image);
    textEl.innerText=`${(images[index].title)} \n ${(images[index].text)}`;
    select[index].classList.add('active');
}
// function stop auto play 

function stop(){
    clearInterval(loop)
}


