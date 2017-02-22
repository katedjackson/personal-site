import React from 'react';
import Header from './Header';
import Favorites from './Favorites';
import Highlight from './Highlight';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Favorites />
      <Highlight />
    </div>
  );
}

export default Homepage;
