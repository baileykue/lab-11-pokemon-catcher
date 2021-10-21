# Alchemy Bootstrap Template

## Making a plan

## home page (root directory)
    * index.html
    * app.js
## results page (/results directory)
    * index.html
        * for each item in pokedex:
            * image
            * header with name of poke
            * show how many times encountered, how many times captured
    * results.js
        * get the data from local storge
        * loop through each item in pokedex
        * get its data from pokemon.js using findById()
        * render the results (img, header, data)
* storage-utils.js -- hold our localstorage functions
* pokemon.js -- holds the data
## HTML Elements
    *  make a home page with
    *  three images as radio buttons
    *  button with an id of capture
    *  make an empty results page
## Local Storage Functions
* const results = [
*     { id: 'apple', shown: 2, picked: 2 },
*     { id: 'banana', shown: 2, picked: 1 },
*     { id: 'lemon', shown: 2, picked: 1 }
    ]
* getPokedex -- return the results array or empty array
* encounterPokemon -- increment the shown key for a pokemon
    * every time pokemon displayed on screen, increment encouter
* capturePokemon -- increment the picked key for a pokemon
    * check if pokemon has already been captured
            * if never captured before, add to pokedex
    * use radio button input to increment amount captured 
## app.js logic
    * make function called generatePokemon()
    * generate 3 random pokemon
     * call encounterPokemon for each
        * 
* render the pokemon on the page
## ON PAGE LOAD
* set totalPlays to 0
* call generatePokemon()
## ON BUTTON CLICK
* increment totalPlays
* call capturePokemon with chosen pokemon
* if totalPlays >= 10
* redirect to results
* else
* call generatePokemon


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass