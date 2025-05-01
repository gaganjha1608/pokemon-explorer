import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();
        const details = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokeRes = await fetch(pokemon.url);
            return await pokeRes.json();
          })
        );
        setPokemons(details);
        setFiltered(details);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    const temp = pokemons.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter ? p.types.some(t => t.type.name === typeFilter) : true)
    );
    setFiltered(temp);
  }, [search, typeFilter, pokemons]);

  // ✅ Random Pokémon Loader
  const getRandomPokemon = async () => {
    const id = Math.floor(Math.random() * 150) + 1;
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setFiltered([data]);
    } catch (err) {
      alert('Error loading random Pokémon.');
    }
  };

  return (
    <div>
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        typeFilter={typeFilter} 
        setTypeFilter={setTypeFilter} 
      />

      {/* 🎲 Random Pokémon Button */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button onClick={getRandomPokemon} style={{ padding: '10px 20px', fontWeight: 'bold' }}>
          🎲 Random Pokémon
        </button>
      </div>

      {loading && <div className="loading">Loading</div>}
      {error && <div className="error">Something went wrong.</div>}
      {!loading && !error && filtered.length === 0 && (
        <div className="empty">No Pokémon found.</div>
      )}

      <div className="pokemon-list">
        {filtered.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
