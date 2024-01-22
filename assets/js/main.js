const images = [
    {
        url: './assets/img/miles-morales.jpg',
        titolo: 'Marvel’s Spider-Man: Miles Morales',
        descrizione: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        url: './assets/img/hollow-knight.jpg',
        titolo: 'Hollow Knight',
        descrizione: 'Descend into the Dark',
    },
    {
        url: './assets/img/GOF-Ragnarok.webp',
        titolo: 'God of War Ragnarök',
        descrizione: 'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go',
    },
    {
        url: './assets/img/bugia-non-esiste.jpg',
        titolo: 'Silksong',
        descrizione: 'Explore, fight and survive as you ascend to the peak of a land ruled by silk and song.',
    },
    {
        url: './assets/img/d2-finalshape.jpg',
        titolo: 'Destiny 2 - Final Shape',
        descrizione: 'Embark on a perilous journey into the heart of the Traveler, rally the Vanguard, and end the War of Light and Darkness.',        
    },
    {
        url: './assets/img/remnant2.jpg.avif',
        titolo: 'Remnant 2',
        descrizione: 'Remnant II pits survivors of humanity against new deadly creatures and god-like bosses across terrifying worlds.',
    },
]

//elementi del DOM
const activePhoto = document.getElementById('activePhoto');
const thumbnail = document.getElementById('thumbnail');
const descriptionHtml = document.getElementById('description');
const titleHtml = document.getElementById('title');
const autoplay = document.getElementById('autoplay');
const start = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const reverse = document.getElementById('reverse');

const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

//variabile che determina quale immagine sarà visibile al centro + prima foto visibile nello slider. Al caricamento della pagina ci saranno gli elementi dell'array in posizione 0
active = 0;
activePhoto.innerHTML += `<img class="bigone h-100 " src="${images[active].url}" alt="">`
titleHtml.innerHTML = `${images[active].titolo}`;
descriptionHtml.innerHTML = `${images[active].descrizione}`;

//creazione delle thumbnail con evento al click per cambiare l'immagine principale
images.forEach((element, index) => {

    const thumbnailImg = document.createElement('img');
    thumbnailImg.setAttribute('src', `${element.url}`);
    thumbnailImg.classList.add('smallone');

    thumbnailImg.addEventListener('click', function(){        
        active = index;

        activePhoto.innerHTML = `<img class="bigone h-100 " src="${element.url}" alt="">`;

        titleHtml.innerText = element.titolo;
        descriptionHtml.innerText = element.descrizione;
    })
    thumbnail.append(thumbnailImg);    
});

//bottone per scorrere le immagini verso il basso
btnDown.addEventListener('click', function(){
    nextImage()
})

//bottone per scorrere le immagini verso l'alto
btnUp.addEventListener('click', function(){
    previousImage()
    sliderImage();
})
//funzioni temporali
let autoplayFunction;
let reverseFunction;
let playFlag;
let initialFlag = false;

//autoplay function
autoplay.addEventListener('click', function(){
    clearBothInterval();
    initialFlag = true;

    autoplayFunction = setInterval(() => {
        nextImage()
        sliderImage();
    }, 1000);
    return playFlag = true;
    
})

//reverse function
reverse.addEventListener('click', function(){
    clearBothInterval();
    initialFlag = true;

    reverseFunction = setInterval(() => {
        previousImage()
        sliderImage();

    }, 1000);
    return playFlag = false;
    
})


stopBtn.addEventListener('click', function(){
    clearBothInterval()
})

start.addEventListener('click', function(){
    if(initialFlag){
        if(playFlag == true){
            clearBothInterval();
    
            autoplayFunction = setInterval(() => {
                nextImage()
            }, 1000);
        }else{
            clearBothInterval()
    
            reverseFunction = setInterval(() => {
                previousImage()
            }, 1000);
        }
    }
})

//funziona che genera nel DOM le immagini
function sliderImage(){
    activePhoto.innerHTML = `<img class="bigone h-100 " src="${images[active].url}" alt="">`;
    titleHtml.innerText = images[active].titolo;
    descriptionHtml.innerText = images[active].descrizione;
}
//reset di entrambe le funzioni temporali
function clearBothInterval(){
    clearInterval(autoplayFunction);
    clearInterval(reverseFunction);
}
//immagine successiva
function nextImage(){
    active++;
    if(active > images.length-1){
        active = 0;
    }
    sliderImage();
}

//immagine precedente
function previousImage(){
    active--;
    if(active < 0){
        active = images.length-1;
    }
    sliderImage();
}

