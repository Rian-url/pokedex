const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 14
let offset = 0
const pokemonOl = document.getElementById('pokemonList')

const loadPokemons = (offset, limit) => {
    
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        const newHtml = pokemonList.map((pokemon) => `
       
        <li class="pokemon ${pokemon.type}">
           <span class="number">#0${pokemon.number}</span>
           <span class="name">${pokemon.name}</span>
   
           <div class="detail">
               <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
               </ol>
               <img src="${pokemon.photo}" alt="${pokemon.name}">
           </div>
        
        </li> 
    
       `).join('')

        pokemonOl.innerHTML += newHtml


    })
}

loadPokemons(offset ,limit)

loadMoreButton.addEventListener('click' , () =>{
    offset += limit
    loadPokemons(offset ,limit)
})