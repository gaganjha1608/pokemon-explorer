import React, { createContext, useState, useContext } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons, filtered, setFiltered }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
