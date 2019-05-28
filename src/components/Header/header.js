import React from 'react';
import logo from '../../Resources/Logo/logo.gif';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <p>
          Welcome to Gullwing
        </p>
        <a
          className="App-link"
          href="https://github.com/boomgoat/Gullwing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the repo
        </a>
      </header>
    </div>
  );
}

export default Header;