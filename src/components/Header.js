import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h2><Link to="/">🛍 ATIPRA Fashions</Link></h2>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;