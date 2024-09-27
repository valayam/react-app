import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <div className="dropdown">
              <span>Services</span>
              <div className="dropdown-content">
                <Link to="/service1">Service 1</Link>
                <Link to="/service2">Service 2</Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;