import React from 'react';

const Class = props => {
  return (
    <div>
      <h1>Class</h1>
      {/* Picture here */}
      <h1>{props.classDetails.class_name}</h1>
      {/* <h3>{props.quote}</h3> */}
      {/* Button on click call class detailed */}
    </div>
  );
};

export default Class;
