import React from 'react';
import PokedexList from "./components/pokedexlist/PokedexList";
import PokedexInfo from "./components/pokedexinfo/PokedexInfo";
import { Routes, Route } from "react-router-dom";
import AjouterPokemon from './components/ajouterpoke/AjouterPokemon';
import ModifierPokemon from './components/modifierpoke/ModifierPokemon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PokedexList/>}/>
        <Route path='/PokemonInfo/:id'element={<PokedexInfo/>}/>
        <Route path='/ajouterpoke' element={<AjouterPokemon/>}/>
        <Route path='/modifierpoke/:id' element={<ModifierPokemon/>}/>
      </Routes>
    </div>
  );
}

export default App;
