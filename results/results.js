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

const ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Captured',
            data: captured, 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});