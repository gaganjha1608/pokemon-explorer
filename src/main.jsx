// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import { PokemonProvider } from './contexts/PokemonContext';
import { FavoritesProvider } from './contexts/FavoritesContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
