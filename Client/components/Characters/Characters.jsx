import React from 'react';
import { Link } from 'react-router-dom';

import Character from './Character/Character';
import CharacterCreation from '../CharacterCreation/CharacterCreation';

const Characters = props => {
  return (
    <div>
      <h1>List of characters</h1>

      <Link to="characters/creation">create character</Link>
    </div>
  );
};

export default Characters;
