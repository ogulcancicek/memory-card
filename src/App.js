import {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import GameContainer from "./components/GameContainer";
import Footer from "./components/Footer";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {

  const MAX_POKEMON_AMOUNT = 12;
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokeCards, setClickedPokeCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
     const loadPokeCards = async () => {
      setPokemons(await fetchPokemons(MAX_POKEMON_AMOUNT));
     }

     loadPokeCards();
  }, [])

  const fetchPokemons = async (MAX_POKEMON_AMOUNT) => {
    const fetchedPokes = [];

    for (let i = 1; i <= MAX_POKEMON_AMOUNT; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemon = await response.json();
      const pokeId = pokemon.id;
      const pokeName = pokemon.name;
      const pokeImg = pokemon.sprites.front_default;
      fetchedPokes.push({pokeId, pokeName, pokeImg})
    }  
    return fetchedPokes;
  }

  const handleClick = (event) => {
    const pokeName = event
                      .target
                      .nextSibling
                      .innerHTML;
    
    playRound(pokeName.toLowerCase());
  }

  const playRound = (pokeName) => {
    console.log(pokeName);
  }

  return (
    <div className="App">
      <Navbar />
      <Scoreboard currentScore={currentScore} topScore={topScore} />
      < GameContainer 
        pokemons={pokemons}
        handleClick={handleClick}
      />
      <Footer />
    </div>
  );
}

export default App;