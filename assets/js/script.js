const convertPokemonTypesToLi = (pokemonTypes) =>{
    return (pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`))
}

const convertPokemonToLi = (pokemon) =>{
    return `
   
     <li class="pokemon">
        <span class="number">#0${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
     
     </li> 
 
    `
}

const pokemonOl = document.getElementById('pokemonList')


pokeApi.getPokemons(0,16).then( (pokemonList = []) => {

    pokemonOl.innerHTML +=  pokemonList.map(convertPokemonToLi).join('')


})
.cath( (error) => console.error(error))
