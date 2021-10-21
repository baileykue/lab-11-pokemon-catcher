import { pokemon } from './pokemon.js';
import { findById } from './storage-utils.js';

const poke1Img = document.getElementById('poke-1-img');
const poke2Img = document.getElementById('poke-2-img');
const poke3Img = document.getElementById('poke-3-img');

const captureButton = document.getElementById('capture');

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
    poke1Img.src = poke1.url_image;

    let poke2 = pokemon[randPoke2];
    poke2Img.src = poke2.url_image;

    let poke3 = pokemon[randPoke3];
    poke3Img.src = poke3.url_image;
    console.log(poke1, poke2, poke3);
};

generatePokemon();

captureButton.addEventListener('click', ()=>{
    //capturePokemon();
    generatePokemon();
    // const userChoice = document.querySelector('input[type=radio]:checked');
    // console.log(findById(userChoice, pokemon));

});