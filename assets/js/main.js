const images = [
    {
        url: './assets/img/miles-morales.jpg',
        titolo: 'Marvel’s Spider-Man: Miles Morales',
        descrizione: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',

        index : 0,
    },
    {
        url: './assets/img/hollow-knight.jpg',
        titolo: 'Hollow Knight',
        descrizione: 'Descend into the Dark',

        index : 1,
    },
    {
        url: './assets/img/GOF-Ragnarok.webp',
        titolo: 'God of War Ragnarök',
        descrizione: 'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go',

        index : 2,
    },
    {
        url: './assets/img/bugia-non-esiste.jpg',
        titolo: 'Silksong',
        descrizione: 'Explore, fight and survive as you ascend to the peak of a land ruled by silk and song.',

        index : 3,
    },
    {
        url: './assets/img/d2-finalshape.jpg',
        titolo: 'Destiny 2 - Final Shape',
        descrizione: 'Embark on a perilous journey into the heart of the Traveler, rally the Vanguard, and end the War of Light and Darkness.',

        index : 4,
    },
    {
        url: './assets/img/remnant2.jpg.avif',
        titolo: 'Remnant 2',
        descrizione: 'Remnant II pits survivors of humanity against new deadly creatures and god-like bosses across terrifying worlds.',

        index : 5,
    },
]

const activePhoto = document.getElementById('activePhoto');
const thumbnail = document.getElementById('thumbnail');

const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

//variabile che determina quale immagine sarà visibile al centro + prima foto visibile nello slider
active = 0;
activePhoto.innerHTML += `<img class="bigone h-100 " src="${images[active].url}" alt="">`

const titleHtml = document.getElementById('title');
const descriptionHtml = document.getElementById('description');
titleHtml.innerHTML = `${images[active].titolo}`;
descriptionHtml.innerHTML = `${images[active].descrizione}`;

//creazione delle thumbnail con evento al click per cambiare l'immagine principale
images.forEach(element => {

    const thumbnailImg = document.createElement('img');
    thumbnailImg.setAttribute('src', `${element.url}`);
    thumbnailImg.classList.add('smallone');

    thumbnailImg.addEventListener('click', function(){
        
        active = element.index;
        activePhoto.innerHTML = `<img class="bigone h-100 " src="${element.url}" alt="">`;
        titleHtml.innerText = element.titolo;
        descriptionHtml.innerText = element.descrizione;
    })

    thumbnail.append(thumbnailImg);    
});


//bottone per scorrere le immagini verso il basso
btnDown.addEventListener('click', function(){
    active++;
    if(active > 5){
        active = 0;
    }
    activePhoto.innerHTML = `<img class="bigone h-100 " src="${images[active].url}" alt="">`;

    titleHtml.innerText = images[active].titolo;
    descriptionHtml.innerText = images[active].descrizione;
    

})
//bottone per scorrere le immagini verso l'alto
btnUp.addEventListener('click', function(){
    active--;
    if(active < 0){
        active = 5;
    }
    activePhoto.innerHTML = `<img class="bigone h-100 " src="${images[active].url}" alt="">`;


    titleHtml.innerText = images[active].titolo;
    descriptionHtml.innerText = images[active].descrizione;

    
})




