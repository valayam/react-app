import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <span>My Application</span>
      </div>
      <nav className="nav-links">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;

