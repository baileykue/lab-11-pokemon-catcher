import { pokemon } from './pokemon.js';
import { encounterPoke, capturePoke } from './storage-utils.js';

const poke1Img = document.getElementById('poke-1-img');
const poke2Img = document.getElementById('poke-2-img');
const poke3Img = document.getElementById('poke-3-img');

const captureButton = document.getElementById('capture');

const poke1Radio = document.getElementById('poke-1');
const poke2Radio = document.getElementById('poke-2');
const poke3Radio = document.getElementById('poke-3');


const generatePokemon = () =>{
    let randPoke1 = Math.floor(Math.random() * pokemon.length);
    let randPoke2 = Math.floor(Math.random() * pokemon.length);
    let randPoke3 = Math.floor(Math.random() * pokemon.length);

    while (
        randPoke1 === randPoke2 || randPoke1 === randPoke3 || randPoke2 === randPoke3
    ) {
        randPoke1 = Math.floor(Math.random() * pokemon.length);
        randPoke2 = Math.floor(Math.random() * pokemon.length);
        randPoke3 = Math.floor(Math.random() * pokemon.length);
    }

    let poke1 = pokemon[randPoke1];
    encounterPoke(poke1.id);
    poke1Img.src = poke1.url_image;
    poke1Radio.value = poke1.id;

    let poke2 = pokemon[randPoke2];
    encounterPoke(poke2.id);
    poke2Img.src = poke2.url_image;
    poke2Radio.value = poke2.id;

    let poke3 = pokemon[randPoke3];
    encounterPoke(poke3.id);
    poke3Img.src = poke3.url_image;
    poke3Radio.value = poke3.id;
};

let totalPlays = 0;

generatePokemon();

captureButton.addEventListener('click', ()=>{
    const chosenRadio = document.querySelector('input[type=radio]:checked');
    poke3Radio.checked = false;
    poke2Radio.checked = false;
    poke1Radio.checked = false;
    
    if (chosenRadio){
        const chosenId = Number(chosenRadio.value);
        totalPlays++;
        capturePoke(chosenId);
        if (totalPlays >= 10){
            window.location = './results';
        } else {
            generatePokemon();
        }
    }
});