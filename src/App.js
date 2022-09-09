import {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import GameContainer from "./components/GameContainer";
import Footer from "./components/Footer";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Storage from './Storage';

function App() {

  const MAX_POKEMON_AMOUNT = 12;
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokeCards, setClickedPokeCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
     const loadPokeCards = async () => {
      setPokemons(shuffleArray(await fetchPokemons(MAX_POKEMON_AMOUNT)));
     }

     loadPokeCards();
     setTopScore(Storage.getTopScore());
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
                      .parentNode
                      .querySelector('.poke-name')
                      .textContent;
    
    playRound(pokeName.toLowerCase());
  }

  const playRound = (pokeName) => {
    if (clickedPokeCards.includes(pokeName)) {
      setCurrentScore(0);
      setClickedPokeCards([]);
    } else {
      setClickedPokeCards([...clickedPokeCards, pokeName]);
      setCurrentScore(currentScore + 1);
      
      if (currentScore + 1 > topScore) {
        setTopScore(currentScore + 1);
        Storage.setTopScore(currentScore + 1);
      } else {
        setTopScore(topScore);
        Storage.setTopScore(topScore);
      }

    }
    setPokemons(shuffleArray(pokemons));
  }

  const shuffleArray = (arr) => {
    return arr.sort( () => Math.random() - 0.5);
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