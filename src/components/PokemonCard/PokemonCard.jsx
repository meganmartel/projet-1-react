import React, { useState } from 'react';
import './PokemonCard.css';

const PokemonCard = ({name, abilities}) => {
  const imagePath = `./images/${name.toLowerCase()}.png`;
  const [showAbilities, setShowAbilities] = useState(false);

  const handleMouseEnter = () => {
    setShowAbilities(true);
  };

  const handleMouseLeave = () => {
    setShowAbilities(false);
  };

  return (
    <div
      className='pokemon-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 
      <h1>{name}</h1>
      <img src={imagePath} alt={name} />
      {showAbilities && (
        <>
          <h2>Abilities:</h2>
          <ul>
            {abilities.map((ability, index) => (
                <li key={index}>{ability}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PokemonCard