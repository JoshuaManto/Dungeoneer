import React from 'react';
import Class from './Class/Class';

const Classes = props => {
  const classArr = props.classes.map(classElem => (
    <Class classDetails={classElem}></Class>
  ));

  // const classElements = props.classes.map((class, i) => {
  //   return(
  //     <Class className=></Class>
  //   )
  // })

  return (
    <div>
      <div></div>
      <div>{classArr}</div>
    </div>
  );
};

export default Classes;
