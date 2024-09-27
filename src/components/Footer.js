import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/privacy" className="footer-link">Privacy Policy</Link>
      <Link to="/contact" className="footer-link">Contact Us</Link>
    </footer>
  );
};

export default Footer;