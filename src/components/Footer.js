import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/privacy">Privacy</Link>
    </footer>
  );
};

export default Footer;