import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCreation = props => {
  return (
    <div className="characterCreation">
      <h1>character creation</h1>

      <button onClick={props.classHandler}>Class</button>

      <button onClick={props.raceHandler}>Race</button>

      <button onClick={props.alignmentHandler}>Alignment</button>

      {/* <Link to="/classes">Class</Link> */}

      {/* <form>
        <label>Name</label>
        <input
          type="text"
          value={props.characterName}
          onChange={props.characterNameChangeHandler}
        ></input>
        <label>Background</label>
        <input
          type="text"
          value={props.characterBackground}
          onChange={props.characterBackgroundChangeHandler}
        ></input>
      </form> */}
    </div>
  );
};

export default CharacterCreation;
