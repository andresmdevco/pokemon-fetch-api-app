import { getPokemonById } from './actions/get-pokemon-by-id.action';

/**
 * Esta función crea la aplicación en el div enviado
 * @param {HTMLDivElement} element 
 */

export const PokemonApp = (element) => {

    document.title = 'Pokemon App';
    const titleElement = document.querySelector('#app-title');

    // if (titleElement) titleElement.innerHTML = 'Pokemon App';
    titleElement && (titleElement.innerHTML = 'Pokemon App');
    
    console.log('Hola Mundo');
    console.log(element);

    getPokemonById(1);

}