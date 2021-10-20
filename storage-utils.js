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


export function addPoke(pokemon){
    const poke = getPokedex();
    let newPoke;
    const reselectPoke = findById(pokemon, poke);
    if (reselectPoke){
        reselectPoke.encountered++;
    } else {
        newPoke = { pokemon: pokemon, encountered: 1 };
        poke.push(newPoke);
    }
    const stringPoke = JSON.stringify(poke);
    localStorage.setItem('PODEDEX', stringPoke);
    if (newPoke) {
        return newPoke.encountered;
    } else { return reselectPoke.encountered; }
}