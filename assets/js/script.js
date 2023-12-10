const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 14
let offset = 0
const pokemonOl = document.getElementById('pokemonList')
const details = document.getElementById('detailsPokemon')

const urlParams = new URLSearchParams(window.location.search);

const cd = urlParams.get("cd")


const newWindow = (cd) => {
    open("./details.html?cd=" + cd)
    // loadPokemons(offset, limit)
}


const loadDetails = (offset, limit) => {



    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        const Pokemon = pokemonList[cd - 1]

        const newHtml = `  
        <div class="pokemon  ${Pokemon.type}">

          <div class="center">
            <img class="imgPokemon" src="${Pokemon.photo}" alt="${Pokemon.name}">
            <span class="nameDetails">${Pokemon.name}</span>
          </div>

          <h1> ABILITIES: </h1>
            ${Pokemon.abilities.map((ability) => `<li class="">${ability}</li>`).join('')} 
            <h1> MOVES: </h1>
            ${Pokemon.moves.map((move) => `<li class="">${move}</li>`).join('')}

        </div>
        `
        
        details.innerHTML += newHtml


    })
}


loadDetails(0, cd)










const loadPokemons = (offset, limit) => {



    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {

        const newHtml = pokemonList.map((pokemon) => `
        
        
        <li class="pokemon ${pokemon.type}">
         <span class="number">#0${pokemon.number}</span> 
           <span class="name">${pokemon.name}</span>
   
           <div class="detail" onClick="newWindow(${pokemon.number})">
               <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                   
               </ol>
               <img src="${pokemon.photo}" alt="${pokemon.name}">
           </div>
        </li> 
       
    
       `).join('')

        pokemonOl.innerHTML += newHtml
        // details.innerHTML += newHtml


    })
}

loadPokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemons(offset, limit)
})

