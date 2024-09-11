import React from 'react';
import { Link } from 'react-router-dom';
import { getCfg } from './cfg';
const Home = () => {
  const cfg331 = getCfg();

  return (
    <div>
      <h1>Home Page</h1>
      <h1>appName::{cfg331.appName}</h1>
      <Link to="/table">
        <button>Go to Table Page</button>
      </Link>
    </div>
  );
};

export default Home;
