let pokemonList = [
 {name:"Bulbasaur", height:"7", types:["grass","poison"] },
 {name:"Jigglypuff", height:"5", types:["fairy","normal"]},
 {name:"Pidgeotto", height:"11", types:["flying","normal"]}
 ];

for (let i =0; i< pokemonList.length; i++){
    if(pokemonList[i].height <10 && pokemonList[i].height >6){
     console.log(document.write(pokemonList[i]) + "is average");
    }else if (pokemonList[i].height <6){
      console.log(document.write(pokemonList[i]) + "is smaller");
    }else {
      console.log(document.write(pokemonList[i]) +  "is bigger");
    }

    }


