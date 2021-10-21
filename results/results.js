import { findById, getPokedex } from '../storage-utils.js';
import { pokemon } from '../pokemon.js';

const results = getPokedex();

const main = document.getElementById('main');

for (let item of results) {
    const poke = findById(item.id, pokemon);
    console.log(item);

    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = poke.url_image;

    const header = document.createElement('h2');
    header.textContent = poke.pokemon;

    const resultSpan1 = document.createElement('span');
    const resultSpan2 = document.createElement('span');

    div.append(img, header);
    main.append(div);
}