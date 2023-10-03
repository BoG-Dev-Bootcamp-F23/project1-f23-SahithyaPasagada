let id = 1;

async function getPokemonData() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  //console.log(data);
  //console.log(data.stats)
  const pokemonName = data.name;
  const pokemonImage = data.sprites.front_default;
  const pokemonTypes = data.types;
  const pokemonStats = data.stats;
  const pokemonMoves = data.moves;
  const pokemonHeight = data.height;
  const pokemonWeight = data.weight;
  showName(pokemonName);
  showImage(pokemonImage);
  showTypes(pokemonTypes);
  showInfo(pokemonStats, pokemonHeight, pokemonWeight);
  showMoves(pokemonMoves);
 
}

function showName(pokemonName) {
  const textName = document.getElementById("name");
  textName.textContent = pokemonName;
}

function showImage(pokemonImage) {
  document.getElementById("image").src = pokemonImage;
}

function showTypes(pokemonTypes) {
  let categories = document.getElementById("types");
  let content = "";
  for (const elt of pokemonTypes) {
    content += `<p id="${elt.type.name}">${elt.type.name}</p>\n`
  }
  categories.innerHTML = content;
}

function showInfo(pokemonStats, pokemonHeight, pokemonWeight) {
  let height = (pokemonHeight / 10).toFixed(1);
  let weight = (pokemonWeight / 10).toFixed(1);
  let pokemonStatData = document.getElementById("info");

  pokemonStatData.innerHTML = `
        <p>height: ${height}m</p>
        <p>weight: ${weight}kg</p>
        <p>hp: ${pokemonStats[0]["base_stat"]}</p>
        <p>attack: ${pokemonStats[1]["base_stat"]}</p>
        <p>defense: ${pokemonStats[2]["base_stat"]}</p>
        <p>special-attack: ${pokemonStats[3]["base_stat"]}</p>
        <p>special-defense: ${pokemonStats[4]["base_stat"]}</p>
        <p>speed: ${pokemonStats[5]["base_stat"]}</p>
  `;
}

function showMoves(pokemonMoves) {

}

getPokemonData();