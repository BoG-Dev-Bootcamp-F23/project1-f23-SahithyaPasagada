let id = 1;
movesHidden = true;

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
  showName(pokemonName);
  showImage(pokemonImage);
  showTypes(pokemonTypes);
  showInfo(pokemonStats, pokemonHeight, pokemonWeight);
  showMoves(pokemonMoves);

  if (movesHidden) {
    infoClick();
  } else {
    movesClick();
  }
 
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
  let pokemonMoveData = document.getElementById("moves")
  let content = "";
  for (const elt of pokemonMoves) {
    content += `<p>${elt["move"]["name"]}</p>`;
  }
  pokemonMoveData.innerHTML = content;
}

function leftArrowClick() {
  if (id > 1) {
      id--;
      getPokemonData();
  }
}

function rightArrowClick() {
  if (id <= 2000) {
      id++;
      getPokemonData();
  }
}

function infoClick() {
  document.getElementById("moves").hidden = true;
  document.getElementById("info").hidden = false;
  document.getElementById("title").innerHTML = "Info";
  document.getElementById("infoButton").style.backgroundColor = "#7CFF79";
  document.getElementById("movesButton").style.backgroundColor = "#E8E8E8";
  movesHidden = true;
}

function movesClick() {
  document.getElementById("moves").hidden = false;
  document.getElementById("info").hidden = true;
  document.getElementById("title").innerHTML = "Moves";
  document.getElementById("movesButton").style.backgroundColor = "#7CFF79";
  document.getElementById("infoButton").style.backgroundColor = "#E8E8E8";
  movesHidden = false;
}

getPokemonData();