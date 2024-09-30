function randomNumber(max) {
  return Math.floor(Math.random() * (max - 2)) + 1;
}

function idListBuilder(noOfIDs) {
  let idList = [];

  for (let i = 0; i < noOfIDs; i++) {
    let newID = randomNumber(1025);

    while (idList.includes(newID)) {
      newID = randomNumber(1025);
    }

    idList.push(newID);
  }
  return idList;
}

async function fetchPokeData(noOfIDs) {
  let idList = idListBuilder(noOfIDs);
  let pokeData = [];

  idList.forEach(async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    pokeData.push({ name: data.name, sprite: data.sprites.front_default });
  });

  return pokeData;
}

export { fetchPokeData };
