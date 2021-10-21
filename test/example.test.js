// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getPokedex, encounterPoke, capturePoke } from '../storage-utils.js';

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

test('increment the encountered key when item exists in results', (expect) =>{
    const fakePoke = [
        { id: 1, captured: 3, encountered: 3 },
    ];

    localStorage.setItem('POKEDEX', JSON.stringify(fakePoke));

    const expected = [
        { id: 1, captured: 3, encountered: 4 }
    ];

    encounterPoke(1);
    const actual = getPokedex();
    

    expect.deepEqual(actual, expected);

});

test('increment the encountered key when item doesnt yet exist in results', (expect) =>{
    localStorage.removeItem('POKEDEX');
    
    const expected = [
        { id: 1, captured: 0, encountered: 1 }
    ];
    
    encounterPoke(1);


    const actual = getPokedex();

    expect.deepEqual(actual, expected);

});

test('increment the captured key when item exists in results', (expect) =>{
    const fakePoke = [
        { id: 1, captured: 3, encountered: 3 },
    ];

    localStorage.setItem('POKEDEX', JSON.stringify(fakePoke));

    const expected = [
        { id: 1, captured: 4, encountered: 3 }
    ];

    capturePoke(1);
    const actual = getPokedex();
    

    expect.deepEqual(actual, expected);

});

test('increment the captureed key when item doesnt yet exist in results', (expect) =>{
    localStorage.removeItem('POKEDEX');
    
    const expected = [
        { id: 1, captured: 1, encountered: 0 }
    ];
    
    capturePoke(1);

    const actual = getPokedex();

    expect.deepEqual(actual, expected);

});

