import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          <h1>
            <i className="fas fa-cloud-meatball"></i> Meal Finder
          </h1>
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mealNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="mealNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
