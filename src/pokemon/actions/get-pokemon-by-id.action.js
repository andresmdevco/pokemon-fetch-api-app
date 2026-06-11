
/**
 * Fetch Pokemon information from PokeAPI
 * @param {number} id 
 * @returns {Object} Pokemon information
 */
export const getPokemonById = (id) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            // console.log({response});
            // throw new Error('Pokemon no existe');
            return response.json();
        })
        .then(data => {
            console.log({data});
        })
        .catch(error => {
            console.error(error);
        });

    return {};
}