let id = 1;
let showingMoves = false;
async function getPokemonData() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const pokemonName = data.name;
  const pokemonImage = data.sprites.front_default;
  const pokemonTypes = data.types;
  const pokemonStats = data.stats;
  const pokemonMoves = data.moves;
  const pokemonHeight = data.height;
  const pokemonWeight = data.weight;
  showImage(pokemonImage);
 
}


function showImage(pokemonImage) {
  document.getElementById("image").src = pokemonImage;
}

function showMoves(pokemonMoves) {
  let moves = [];
  for e
}







const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD"
};

getPokemonData();