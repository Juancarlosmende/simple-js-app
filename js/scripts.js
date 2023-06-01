let pokemonRepository = (function () {
  let repository = [ //my pokemon list
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
  function add(pokemon){
    if (
      typeof pokemon ==='object'&&
      'name' in pokemon &&
      'size' in pokemon &&
      'type' in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }  

  function getAll() {
    return repository;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click',function(){
      showDetails(pokemon);
      });

  function showDetails(item){
    pokemonRepository.showDetails(item).then(function (){
      showPokemonDetails(item);
    })
    console.log('pokemon correct')


  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
    showDetails: showDetails,
  };
 
  }) ();

pokemonRepository.add({name:'charmander',
size:2, type: ['blaze'] });

console.log(pokemonRepository.getAll());

  pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
  });
  
