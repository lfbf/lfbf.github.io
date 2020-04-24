import React from 'react';
import './App.css';
import dataPokemon from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex dataPokemon={dataPokemon}/>
    </div>
  );
}

export default App;
