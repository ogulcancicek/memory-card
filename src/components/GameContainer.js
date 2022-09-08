import Cardcontainer from './CardContainer/Cardcontainer';
import '../index.css';

function GameContainer({pokemons, handleClick}) {
    return (
        <div className="game-container">
            <Cardcontainer pokemons={pokemons} handleClick={handleClick} />
        </div>
    );
}

export default GameContainer;