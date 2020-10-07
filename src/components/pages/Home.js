import React from 'react';
import Meals from '../meal/Meals';
import Search from '../meal/Search';

const Home = () => {
  return (
    <div id="search">
      <Search />

      <Meals />
    </div>
  );
};

export default Home;
