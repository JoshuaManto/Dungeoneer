import React from 'react';

const Race = props => {
  return (
    <div>
      <h1>Race</h1>
      {/* Picture here */}
      <h1>{props.raceDetails.race_name}</h1>
      {/* <h3>{props.quote}</h3> */}
      {/* Button on click call class detailed */}
    </div>
  );
};

export default Race;
