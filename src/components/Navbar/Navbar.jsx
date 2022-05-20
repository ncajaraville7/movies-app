import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar__flex">
        <div className="navbar__logo">
          <Link to="/">
            <h1>API THE MOVIE DB</h1>
          </Link>
        </div>
        <ul className="navbar__links">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <li>
            <Link to="/favorites">Favoritos</Link>
          </li>
          <Link to="/searchMovie">
            <li>Buscar</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
