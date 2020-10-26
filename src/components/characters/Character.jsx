import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <div>
    <h1> {name} </h1>
    <img src={image} />
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Character;
