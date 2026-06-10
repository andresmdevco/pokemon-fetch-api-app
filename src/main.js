import { PokemonApp } from './pokemon/pokemon-app'
import './style.css'

document.querySelector('#app').innerHTML = `
<main>
  <h1 id="app-title">Hola Mundo</h1>
  <section class="information-card"></section>
</main>
`

const element = document.querySelector('.information-card');

PokemonApp(element);