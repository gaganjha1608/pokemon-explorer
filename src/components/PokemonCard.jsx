// components/PokemonCard.jsx
const typeColors = {
  fire: '#F08030', water: '#6890F0', grass: '#78C850', electric: '#F8D030', 
  normal: '#A8A878', bug: '#A8B820', poison: '#A040A0', ground: '#E0C068', 
  fairy: '#EE99AC', fighting: '#C03028', psychic: '#F85888', rock: '#B8A038', 
  ghost: '#705898', ice: '#98D8D8', dragon: '#7038F8'
};

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>#{pokemon.id}</p>
      <div className="types">
        {pokemon.types.map((t, i) => (
          <span 
            key={i} 
            className="type" 
            style={{ backgroundColor: typeColors[t.type.name] || '#666' }}>
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;