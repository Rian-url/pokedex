

const convertPokemonToLi = (pokemon) =>{
    return `
   
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
 
    `
}

const pokemonOl = document.getElementById('pokemonList')


pokeApi.getPokemons(0,30).then( (pokemonList = []) => {

    pokemonOl.innerHTML +=  pokemonList.map(convertPokemonToLi).join('')


})
.cath( (error) => console.error(error))
