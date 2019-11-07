import React from 'react';

const Alignment = props => {
  console.log(props.alignmentDetails);
  return (
    <div>
      <h1>Alignment</h1>
      {/* <div>{props.characterDetails && props.characterDetails.Name}</div> */}
      <div>{props.alignmentDetails.alignment_name}</div>
      <div>{props.alignmentDetails.alignment_details}</div>
    </div>
  );
};

export default Alignment;
