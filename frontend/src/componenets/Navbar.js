import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">My Portfolio</h1>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/projects" className="navbar-link">Projects</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
