import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonList = () => {
    const pokemonData = [
        {
            name: 'Bulbasaur',
            abilities: ['Overgrow', 'Chlorophyll'],
        },
        {
            name: 'Pikachu',
            abilities: ['Static', 'Lightning Rod'],
        },
        {
            name: 'Charizard',
            abilities: ['Blaze', 'Solar Power'],
        },
        {
            name: 'Squirtle',
            abilities: ['Torrent', 'Rain Dish'],
        },
        {
            name: 'Jigglypuff',
            abilities: ['Cute Charm', 'Competitive'],
        },
        {
            name: 'Caterpie',
            abilities: ['Shield Dust', 'Run Away'],
        },
        {
            name: 'Weedle',
            abilities: ['Shield Dust', 'Run Away'],
        },
        {
            name: 'Pidgey',
            abilities: ['Keen Eye or Tangled', 'Big Pecks'],
        },
        {
            name: 'Rattata',
            abilities: ['Run Away or Guts', 'Thick Fat'],
        },
        {
            name: 'Oddish',
            abilities: ['Chlorophyll', 'Run Away'],
        },
    ];

  return (
    <div>
        {pokemonData.map((pokemon, index) => (
            <PokemonCard key={index} name={pokemon.name} abilities={pokemon.abilities} />
        ))}
    </div>
  );
};

export default PokemonList