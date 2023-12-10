const pokeApi = {}

const conertPokeApiDetailTOPokemon = (pokeDetail) =>{
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name) 
    const [ability] = abilities

    pokemon.abilities = abilities
    pokemon.ability = ability

    const moves = pokeDetail.moves.map((moveSlot) => moveSlot.move.name) 
    const [move] = moves

    pokemon.moves = moves
    pokemon.move = move


    return pokemon

}

pokeApi.getPokemonsDetail = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(conertPokeApiDetailTOPokemon)
    
}

pokeApi.getPokemons = (offset , limit ) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
   .then( (response) => response.json()) 
   .then( (jsonBody) => jsonBody.results)
   .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
   .then((detailRequests) => Promise.all(detailRequests))
   .then((pokemonDetails) => pokemonDetails )
   
   .catch((error) => console.error(error))
}