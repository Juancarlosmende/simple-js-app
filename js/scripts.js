let pokemonList = [ //my pokemon list
    {
        name: 'Krookodile',
        type:['dark','ground'],
        height: 2
    },

    {

        name:'Machoke',
        type:['fighting'],
        height: 2
    },

    {
       name:'Golem',
       type:['rock','ground'],
       height: 1

    },
];
    for(let i = 0; i < pokemonList.length; i++)
    {

if(pokemonList[i].size > 1.5 ){
    document.write("this is a big pokemon!!")
  } else if (pokemonList[i].size > 0.5 && pokemonList[i].size < 1.5){
    document.write("this is an average pokemon");
  }else {
    document.write("this is a small pokemon")
  }
}
