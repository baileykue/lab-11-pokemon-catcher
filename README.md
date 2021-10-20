# Alchemy Bootstrap Template

## Making a plan

## home page (root directory)
    * index.html
    * app.js
## results page (/results directory)
    * index.html
    * results.js
* storage-utils.js -- hold our localstorage functions
* pokemon.js -- holds the data
## HTML Elements
    *  make a home page with
    *  two images as radio buttons
    *  button with an id of select-pokemon
    *  make an empty results page
## Local Storage Functions
* const results = [
*     { id: 'apple', shown: 2, picked: 2 },
*     { id: 'banana', shown: 2, picked: 1 },
*     { id: 'lemon', shown: 2, picked: 1 }
    ]
* getPokedex -- return the results array or empty array
* encounterPokemon -- increment the shown key for a pokemon
* capturePokemon -- increment the picked key for a pokemon
## app.js logic
    * make function called generatePokemon()
    * generate 2 random fruit
 * call encounterPokemon for each
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