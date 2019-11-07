import React from 'react';

const Character = props => {
  console.log(props.characterDetails);
  return (
    <div>
      <h1>character</h1>
      {/* <div>{props.characterDetails && props.characterDetails.Name}</div> */}
      <div>{props.characterDetails.Name}</div>
      <div>{props.characterDetails.Level}</div>
      <div>{props.classList[props.characterDetails.class_id]}</div>
      <div>{props.raceList[props.characterDetails.race_id]}</div>
    </div>
  );
};

export default Character;
