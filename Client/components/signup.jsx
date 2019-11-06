import React from 'react';
// import { Link } from 'react-router-dom';

const signup = props => {
  return (
    <div className="signup">
      <form onSubmit={props.submitSignUpHandler}>
        <label>Username</label>
        <input
          type="text"
          value={props.username}
          onChange={props.usernameChangeHandler}
        ></input>

        <label>Password</label>
        <input
          type="password"
          value={props.password}
          onChange={props.passwordChangeHandler}
        ></input>

        <input type="submit" value="Sign Up"></input>
      </form>

      {/* <Link to="/login">
        <h1>login</h1>
      </Link> */}
    </div>
  );
};

export default signup;
