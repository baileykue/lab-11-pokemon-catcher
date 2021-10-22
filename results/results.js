import { findById, getPokedex } from '../storage-utils.js';
import { pokemon } from '../pokemon.js';

const results = getPokedex();

const main = document.getElementById('main');

for (let item of results) {
    const poke = findById(item.id, pokemon);

    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = poke.url_image;

    const header = document.createElement('h2');
    header.textContent = poke.pokemon;

    const resultSpan1 = document.createElement('span');
    resultSpan1.textContent = `Encountered: ${item.encountered}`;

    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `Captured: ${item.captured}`;

    div.append(header, img, resultSpan1, resultSpan2);
    main.append(div);
}

const names = results.map((item)=>{
    const poke = findById(item.id, pokemon);
    return poke.pokemon;
});

const captured = results.map(item=>item.captured);
const encountered = results.map(item=>item.encountered);

const ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Captured',
            data: captured, 
            backgroundColor: [
                '#2E294E',
                '#EFBCD5',
                '#BE97C6',
                '#8661C1',
                '#4B5267',
                '#C08497'
            ]
        }, 
        {
            label: '# of Times Encountered',
            data: encountered, 
            backgroundColor: [
                '#5CF64A',
                '#87E752',
                '#43B929',
                '#CDE77F',
                '#CEFF1A',
                '#98CE00'
            ]
        }
        ]
        
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: "'Press Start 2P', 'cursive"
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});