import React from 'react';
import spinner from './burger.gif';

const Spinner = () => {
  return (
    <div className="spinner">
      <img
        src={spinner}
        alt="Loading"
        className="img-fluid img-block text-center"
        style={{ width: '400px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
