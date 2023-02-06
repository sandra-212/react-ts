import * as React from 'react';
import * as ReactRouter from 'react-router-dom';

import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1>Good Health Clinic - Physician Portal</h1>
      <nav>
        <ul>
          <li><ReactRouter.Link to='/'>Patient List</ReactRouter.Link></li>
          <li><ReactRouter.Link to='/about'>About</ReactRouter.Link></li>
        </ul>
      </nav>
    </header>
  );
};

export const Component = Header;
