import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'CalculatorPage', text: 'Calculator' },
  { path: 'Quote', text: 'Quote' },
];

const Navbar = () => (
  <nav className="navbar">
    <h1>Maths Magicians</h1>
    <ul className="nav-menu">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{ link.text }</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
