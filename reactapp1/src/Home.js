import React from 'react';
import { Link } from 'react-router-dom';
 
const Home = () => {
  //const cfg331 = getCfg();

  return (
    <div>
      <h1>Home Page</h1>
      <h1>appName::{window.cfg344.appName}</h1>

      <Link to="/addform">
        <button>Go to AddForm Page</button>
      </Link>
      <Link to="/table">
        <button>Go to Table Page</button>
      </Link>
    </div>
  );
};

export default Home;
