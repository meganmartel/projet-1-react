import React from "react";
import './App.css';
import PokemonCard from "./components/PokemonCard/PokemonCard";


function App() {
  return (
    <div className="app-container">
      <PokemonCard name="Bulbasaur" abilities={['Overgrow', 'Chlorophyll']} />
      <PokemonCard name="Pikachu" abilities={['Static', 'Lightning Rod']} />
      <PokemonCard name="Charizard" abilities={['Blaze', 'Solar Power']} />
      <PokemonCard name="Squirtle" abilities={['Torrent', 'Rain Dish']} />
      <PokemonCard name="Jigglypuff" abilities={['Cute Charm', 'Competitive']} />
      <PokemonCard name="Caterpie" abilities={['Shield Dust', 'Run Away']} />
      <PokemonCard name="Weedle" abilities={['Shield Dust', 'Run Away']} />
      <PokemonCard name="Pidgey" abilities={['Keen Eye or Tangled', 'Big Pecks']} />
      <PokemonCard name="Rattata" abilities={['Run Away or Guts', 'Thick Fat']} />
      <PokemonCard name="Oddish" abilities={['Run Away', 'Chlorophyll']} />
    </div>
  );
};
    
  

export default App
