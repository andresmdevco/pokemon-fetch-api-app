# ⚡ Pokemon Fetch API App

Aplicación de JavaScript que consume la [PokéAPI](https://pokeapi.co/) para mostrar información de Pokémon, construida con Vite. El usuario puede navegar entre Pokémon usando los botones de siguiente y anterior.


## ⚙️ Cómo funciona

`main.js` define la estructura HTML base y pasa un elemento contenedor a `PokemonApp`, que maneja toda la lógica de la aplicación. La app obtiene los datos de un Pokémon por ID desde la PokéAPI y renderiza su nombre e imagen. Los botones de navegación incrementan o decrementan el ID actual para cargar el siguiente o anterior Pokémon.

Los Pokémon consultados se almacenan en un caché tipo `Map` para evitar peticiones duplicadas al navegar.

## 🛠️ Tecnologías utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

## ✨ Características

- Consulta datos de Pokémon por ID desde la PokéAPI
- Muestra el nombre y el sprite del Pokémon
- Botones de navegación siguiente / anterior
- Caché en memoria con `Map` para evitar peticiones duplicadas
- Estructura modular que separa la lógica de UI de la obtención de datos

## 🚀 Cómo ejecutar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/andresmdevco/pokemon-fetch-api-app.git

# Entrar al directorio
cd pokemon-fetch-api-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```