function SingleCardContainer(props) {
    const {pokemon, handleClick} = props;
    return (
        <div className="single-card-container">
            <Card pokemon={pokemon} handleClick={handleClick}/>
        </div>
    );
}

const Card = ({pokemon, handleClick}) => {
    return (
        <div className="card" onClick={handleClick}>
            <img src={pokemon.pokeImg} alt={pokemon.pokeName} className="poke-img" />
            <p className="poke-name">{pokeNameUpperCase(pokemon.pokeName)}</p>
        </div>
    );
}

const pokeNameUpperCase = (pokeName) => {
    return pokeName[0].toUpperCase() + pokeName.slice(1);
}

export default SingleCardContainer;