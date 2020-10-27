import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { getCharacter } from '../services/heyArnoldApi';

const HeyArnoldAll = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacter()
      .then(characters => setCharacters(characters));
  }, []);

  return (
    <CharacterList
      characters={characters}
    />
  );
};

export default HeyArnoldAll;
