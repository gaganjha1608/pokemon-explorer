// components/SearchBar.jsx
const SearchBar = ({ search, setSearch, typeFilter, setTypeFilter }) => {
  const types = ["", "grass", "fire", "water", "bug", "normal", "poison", "electric", "ground", "fairy", "fighting", "psychic", "rock", "ghost", "ice", "dragon"];

  return (
    <div className="controls">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search Pokémon" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      <div className="type-filter">
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          {types.map((type, idx) => (
            <option key={idx} value={type}>{type || "All Types"}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
