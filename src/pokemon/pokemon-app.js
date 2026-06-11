import { getPokemonById } from './actions/get-pokemon-by-id.action';

/**
 * Esta función crea la aplicación en el div enviado
 * @param {HTMLDivElement} element 
 */

export const PokemonApp = async(element) => {

    document.title = 'Pokemon App';
    const titleElement = document.querySelector('#app-title');

    // if (titleElement) titleElement.innerHTML = 'Pokemon App';
    titleElement && (titleElement.innerHTML = 'Pokemon App');
    
    //! Crear los elementos html
    const loadingParagraph = document.createElement('p');
    const pokemonImage = document.createElement('img');
    const nextBtn = document.createElement('button');
    const prevBtn = document.createElement('button');


    //! Configuraciones
    loadingParagraph.textContent = 'Cargando ...';
    nextBtn.textContent = 'Siguiente';
    prevBtn.textContent = 'Anterior';

    element.appendChild(loadingParagraph);
    element.appendChild(pokemonImage);
    element.appendChild(nextBtn);
    element.appendChild(prevBtn);

    //! Listeners de los botones


    //! Renderizar el pokemon
    const renderPokemon = (pokemon) => {
        pokemonImage.src = pokemon.image;
        loadingParagraph.textContent = `Pokemon #${pokemon.id} ${pokemon.name}`
    };


    //! Hacer la petición inicial

    renderPokemon(await getPokemonById(1));
}