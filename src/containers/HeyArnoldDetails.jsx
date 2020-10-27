import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../components/characters/Character';
import { getOneCharacter } from '../services/heyArnoldApi';

const HeyArnoldDetails = ({ match }) => {
  const [character, setCharacter] = useState({ name: '', image: '' });


  const characterName = match.params.characterName;

  useEffect(() => {
    getOneCharacter(characterName)
      .then(fetchedCharacter => setCharacter(fetchedCharacter));
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
