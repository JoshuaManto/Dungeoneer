import React from 'react';
import { Link } from 'react-router-dom';

import Character from './Character/Character';
import CharacterCreation from '../CharacterCreation/CharacterCreation';

const Characters = props => {
  const charactersArr = props.characters.map(character => (
    <Character
      characterDetails={character}
      classList={props.classList}
      raceList={props.raceList}
    ></Character>
  ));

  return (
    <div>
      <h1>List of characters</h1>

      {charactersArr}

      <Link to="characters/creation">create character</Link>
    </div>
  );
};

export default Characters;
