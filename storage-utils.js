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
        const newItem = { id: id, captured: 0, encountered: 1 };
        poke.push(newItem);
    }
    localStorage.setItem('POKEDEX', JSON.stringify(poke));
}

export function capturePoke(id){
    let poke = getPokedex();
    let item = findById(id, poke);

    if (item){
        item.captured++;
    } else {
        const newItem = { id: id, captured: 1, encountered: 0 };
        poke.push(newItem);
    }
    localStorage.setItem('POKEDEX', JSON.stringify(poke));
}







// export function addPoke(pokemon){
//     const poke = getPokedex();
//     let newPoke;
//     const reselectPoke = findById(pokemon, poke);
//     console.log(reselectPoke);
//     if (reselectPoke){
//         reselectPoke.encountered++;
//     } else {
//         newPoke = { pokemon: pokemon, encountered: 1 };
//         poke.push(newPoke);
//     }
//     const stringPoke = JSON.stringify(poke);
//     localStorage.setItem('PODEDEX', stringPoke);
//     if (newPoke) {
//         return newPoke.encountered;
//     } else { return reselectPoke.encountered; }
// }

// NEED THIS TO GENERATE IN LOCAL STORAGE AND 
//THEN FALL BACK ON POKEMON>JS IF NOT READILY AVAILABLE

// export function getProducts(){
//     let lsProducts = localStorage.getItem('PRODUCTS');
//     const products = JSON.parse(lsProducts);

//     if (!lsProducts){
//         const plantsString = JSON.stringify(plants);
//         localStorage.setItem('PRODUCTS', plantsString);
//     }
//     return products || plants;
// }