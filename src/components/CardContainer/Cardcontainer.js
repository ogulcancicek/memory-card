import SingleCardContainer from "./SingleCardContainer";
import '../../index.css';

function Cardcontainer(props) {
    const {pokemons, handleClick} = props;

    return (
        <div className="card-container">
            {
                pokemons.map( (pokemon) => {
                    return (
                        <SingleCardContainer key={pokemon.pokeId} pokemon={pokemon} handleClick={handleClick} />
                    );
                })
            }
        </div>
    );
}

export default Cardcontainer;