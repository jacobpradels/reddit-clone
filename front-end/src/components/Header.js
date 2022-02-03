import React from 'react';
import './Header.css'

export default function Header() {
  return (
      <div className="header-bar">
        <div className="logo">
          <div className="circle"></div>
          <h1 className="logo-text">Reddit</h1>
        </div>
        <input type="text" className="search-bar" placeholder="🔍 | Search Reddit"/>
        <h3 className="login">Log in</h3>
        <h3 className="signup">Sign up</h3>
        <h3 className="personal-data">👤⌄</h3>
      </div>

  );
}
