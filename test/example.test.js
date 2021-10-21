// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getPokedex, addPoke } from '../storage-utils.js';

const test = QUnit.test;

test('getPokedex should return the list of captured pokemon if it exists', (expect)=>{
    const fakePoke = [
        { pokemon: 'bulbasaur', captured: 3 },
        { pokemon: 'ivysaur', captured: 2 }
    ];

    localStorage.setItem('POKEDEX', JSON.stringify(fakePoke));

    const poke = getPokedex();

    expect.deepEqual(poke, fakePoke);
});

test('getPokedex returns an empty array if there is no POKEDEX key in localStorage', (expect) => {
    localStorage.removeItem('POKEDEX');

    const actual = getPokedex();

    expect.deepEqual(actual, []);
});

skip('addPoke should increment the encountered if poke already encountered', (expect)=>{
    const fakePoke = [
        { pokemon: 'bulbasaur', encountered: 3 },
        { pokemon: 'ivysaur', encountered: 2 }
    ];

    localStorage.setItem('POKEDEX', JSON.stringify(fakePoke));

    addPoke('bulbasaur');
    const poke = getPokedex();
    const expected = [
        { pokemon: 'bulbasaur', encountered: 4 },
        { pokemon: 'ivysaur', encountered: 2 }
    ];

    expect.deepEqual(poke, expected);
});

test('Get')