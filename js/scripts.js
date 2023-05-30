let pokemonRepository = (function () {
  let pokemonList = [ //my pokemon list
      {
          name: 'Krookodile',
          type:['dark','ground'],
          size: 2
      },
  
      {
  
          name:'Machoke',
          type:['fighting'],
          size: 2
      },
  
      {
         name:'Golem',
         type:['rock','ground'],
         size: 1
  
      },
  ];
  
  function add (pokemon){
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
  }
  return {
    add:add,
    getAll: getAll
  }
  }) ();
  
  function listPokemon (pokemon) {
    document.write(
      pokemon.name
      +'<br>'
    )
    if(pokemon.type.length > 1)
    document.write(
      (Types: {pokemon.type[0]}, {pokemon.type[1]}) - wow!! That pokemon has two types!
    )
  } else {
    document.write(
      (Type:{pokemon.type})
    )
  }
  
  document.write('<br>')
  
  if(pokemon.size > 1.5 ){
      document.write("this is a big pokemon!!")
    } else if (pokemon.size > 0.5 && pokemon.size < 1.5){
      document.write("this is an average pokemon");
    }else {
      document.write("this is a small pokemon")
    }
  
  pokemonRepository.getAll().forEach(listPokemon);
  
