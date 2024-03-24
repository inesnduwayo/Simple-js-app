let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Bulbasaur",
      height: 7,
      types: ["grass", "poison"],
    },
    {
      name: "Jigglypuff",
      height: 5,
      types: ["fairy", "normal"],
    },
    {
      name: "Pidgeotto",
      height: 11,
      types: ["flying", "normal"],
    },
  ];

  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.add(
  {
    name: "Bulbasaur",
    height: 7,
    types: ["grass", "poison"],
  },
  {
    name: "Jigglypuff",
    height: 5,
    types: ["fairy", "normal"],
  },
  {
    name: "Pidgeotto",
    height: 11,
    types: ["flying", "normal"],
  }
);

pokemonRepository.getAll().forEach(function (pokemon) {
  if ((pokemon.height < 10) & (pokemon.height > 6)) {
    document.write(pokemon.name + " is average.<br/>");
  } else if (pokemon.height < 6) {
    document.write(pokemon.name + " is smaller.<br/>");
  } else {
    document.write(pokemon.name + " is bigger.<br/>");
  }
});
