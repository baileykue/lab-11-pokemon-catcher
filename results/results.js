import { findById, getPokedex } from '../storage-utils.js';
import { pokemon } from '../pokemon.js';

const results = getPokedex();

const main = document.getElementById('main');

for (let item of results) {
    const poke = findById(item.id, pokemon);

    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = poke.url_image;
    console.log(poke.url_image);

    const header = document.createElement('h2');
    header.textContent = poke.pokemon;

    const resultSpan1 = document.createElement('span');
    resultSpan1.textContent = `Encountered: ${item.encountered}`;

    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `Captured: ${item.captured}`;

    div.append(header, img, resultSpan1, resultSpan2);
    main.append(div);
}

