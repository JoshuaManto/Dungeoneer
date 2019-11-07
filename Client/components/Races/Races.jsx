import React from 'react';
import Race from './Race/Race';

const Races = props => {
  const raceArr = props.races.map(race => <Race raceDetails={race}></Race>);

  // const classElements = props.classes.map((class, i) => {
  //   return(
  //     <Class className=></Class>
  //   )
  // })

  return (
    <div>
      <div></div>
      <div>{raceArr}</div>
    </div>
  );
};

export default Races;
