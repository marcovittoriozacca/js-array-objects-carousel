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

const activePhoto = document.getElementById('activePhoto');
const thumbnail = document.getElementById('thumbnail');

const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

active = 0;
activePhoto.innerHTML = `<img class="bigone h-100 " src="${images[active].url}" alt="">`


btnDown.addEventListener('click', function(){
    active++;
    if(active > 5){
        active = 0;
    }
    activePhoto.innerHTML = `<img class="bigone h-100 " src="${images[active].url}" alt="">`
})

btnUp.addEventListener('click', function(){
    active--;
    if(active < 0){
        active = 5;
    }
    activePhoto.innerHTML = `<img class="bigone h-100 " src="${images[active].url}" alt="">`
})

images.forEach(element => {
    const thumbnailCreation = document.createElement('img')
    thumbnailCreation.setAttribute('src', `${element.url}`)
    thumbnailCreation.classList.add('smallone');
    thumbnail.append(thumbnailCreation);    
});


