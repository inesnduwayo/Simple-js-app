
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

   function addlistItem (pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('Click', function (event){
      console.log(event);
    }
     
    }
   

    function showDetails(pokemon){
    console.log(pokemonRepository.getAll));
    }
   return {
        add: add,
        getAll: getAll,
        addlistItem: addlistItem
        
   }    
 
   })();

   

pokemonList.getall().forEach(function(pokemon){

  pokemonRepository.addlistItem(pokemon);

  

})

  


  


  



