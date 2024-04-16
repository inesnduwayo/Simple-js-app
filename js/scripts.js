
let pokemonRepository = (function (){
   
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass', 'poison']
    },
    {
      name: 'Jigglypuff',
      height: 5,
      types: ['fairy', 'normal']
    },
    {
      name:'Pidgeotto',
      height: 11,
      types: ['flying', 'normal']
    }
  ];

   
  function add (pokemon){
    if(typeof pokemon === 'object') {
       pokemonList.push (pokemon);
     }

  }

  function getAll () {
      return pokemonList;
   }

   function addListItem (pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");

    button.innerText = pokemon.name;
    button.classList.add("button-class");

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (event){
      showDetails(pokemon);
    });
   }

    function showDetails (pokemon){
      console.log(pokemon);
    }

    return{
      add: add,
      getAll: getAll,
      addListItem: addListItem

    }

    })();


 pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
 });
 

  


  


  



