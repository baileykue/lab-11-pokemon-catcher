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
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderWidth: 1
        }, 
        {
            label: '# of Times Encountered',
            data: encountered, 
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            hoverBorderColor: 'black', hoverBorderWidth: 5
        }
        ]
        
    },
    options: {
        // elements: {
        //     bar: {
        //         borderWidth: 5
        //     }
        // },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});