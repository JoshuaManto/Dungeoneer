import React from 'react';
// import { Link } from 'react-router-dom';

const login = props => {
  return (
    <div className="login">
      <form onSubmit={props.submitLoginHandler}>
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

        <input type="submit" value="Log in"></input>
      </form>
      {/* <Link to="/"></Link>
      <h1>in login</h1> */}
    </div>
  );
};

export default login;
