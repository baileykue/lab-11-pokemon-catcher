export function findById(id, items){

    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function getPokedex(){
    const pokeString = localStorage.getItem('POKEDEX') || '[]';
    const poke = JSON.parse(pokeString);
    return poke;
}

export function encounterPoke(id){
    let poke = getPokedex();
    let item = findById(id, poke);

    if (item){
        item.encountered++;
    } else {
        const newItem = { id: id, encountered: 1, captured: 0 };
        poke.push(newItem);
    }
    localStorage.setItem('POKEDEX', JSON.stringify(poke));
}

export function capturePoke(id){
    let poke = getPokedex();
    let item = findById(id, poke);

    item.captured++;

    localStorage.setItem('POKEDEX', JSON.stringify(poke));
}







