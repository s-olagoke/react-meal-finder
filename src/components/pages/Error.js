import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="text-center">
      <h1 className="display-4">Page not Found</h1>
      <Link to="/" className="btn btn-outline-info">
        Return Home
      </Link>
    </div>
  );
};

export default Error;
