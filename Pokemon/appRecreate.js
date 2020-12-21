const basicUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector('#container')

for (let i = 1; i <= 151; i += 1){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    const pokeImg = document.createElement('img');
    pokeImg.src = `${basicUrl}${i}.png`;

    const label = document.createElement('span');
    label.innerText = `#${i}`
    
pokemon.appendChild(pokeImg)
pokemon.appendChild(label)
    container.appendChild(pokemon)



}