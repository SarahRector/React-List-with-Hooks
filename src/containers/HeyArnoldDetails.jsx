import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../components/characters/Character';
import { getOneCharacter } from '../services/heyArnoldApi';

const HeyArnoldDetails = ({ match }) => {
  const [character, setCharacter] = useState('');
  console.log(match);

  const characterName = match.params.characterName;

  useEffect(() => {
    getOneCharacter(characterName)
      .then(fetchedCharacter => setCharacter(fetchedCharacter[0]));
  }, [characterName]);

  return (
    <Character {...character} />
  );
};

HeyArnoldDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      characterName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default HeyArnoldDetails;
