import React from 'react';
import { Link } from 'react-router-dom';

const home = props => {
  return (
    <div className="home">
      <Link to="/signup">
        <button>Signup</button>
      </Link>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default home;
