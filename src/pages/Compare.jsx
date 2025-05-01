import React, { useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const Compare = () => {
  const [firstId, setFirstId] = useState('');
  const [secondId, setSecondId] = useState('');
  const [firstPokemon, setFirstPokemon] = useState(null);
  const [secondPokemon, setSecondPokemon] = useState(null);

  const fetchPokemon = async (id, setFunc) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setFunc(data);
    } catch (err) {
      alert('Pokémon not found');
    }
  };

  const handleCompare = () => {
    fetchPokemon(firstId, setFirstPokemon);
    fetchPokemon(secondId, setSecondPokemon);
  };

  return (
    <div>
      <h2>Compare Pokémon</h2>
      <input
        type="text"
        placeholder="First Pokémon ID or name"
        value={firstId}
        onChange={(e) => setFirstId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Second Pokémon ID or name"
        value={secondId}
        onChange={(e) => setSecondId(e.target.value)}
      />
      <button onClick={handleCompare}>Compare</button>

      <div className="compare-container">
        {firstPokemon && <PokemonCard pokemon={firstPokemon} />}
        {secondPokemon && <PokemonCard pokemon={secondPokemon} />}
      </div>
    </div>
  );
};

export default Compare;
