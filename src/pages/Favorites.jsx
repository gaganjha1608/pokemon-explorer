import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import PokemonCard from '../components/PokemonCard';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2>Your Favorite Pokémon</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="pokemon-list">
          {favorites.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
