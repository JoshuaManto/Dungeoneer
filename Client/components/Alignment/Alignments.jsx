import React from 'react';
import Alignment from './Alignment/Alignment';

const Alignments = props => {
  const alignmentArr = props.alignments.map(alignment => (
    <Alignment alignmentDetails={alignment}></Alignment>
  ));

  // const classElements = props.classes.map((class, i) => {
  //   return(
  //     <Class className=></Class>
  //   )
  // })

  return (
    <div>
      <div></div>
      <div>{alignmentArr}</div>
    </div>
  );
};

export default Alignments;
