
/**
 * Fetch Pokemon information from PokeAPI
 * @param {number} id 
 * @returns {Promise<Object>} Pokemon information
 */
export const getPokemonById = async(id) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    
    const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
    }

    console.log({pokemonData});
    return pokemonData;

    // fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     .then(response => {
    //         // console.log({response});
    //         // throw new Error('Pokemon no existe');
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log({data});
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });

    // return {};
}