import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import Compare from './pages/Compare';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </div>
  );
};

export default App;
