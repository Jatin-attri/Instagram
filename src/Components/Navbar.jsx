import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Search */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" fill="#0a66c2"/>
            </svg>
          </div>
          
          <div className="navbar-search">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                  <path d="M11.87 10.835c.018.015.035.03.051.047l3.864 3.863a.75.75 0 11-1.06 1.06l-3.863-3.863a.747.747 0 01-.047-.051 6.5 6.5 0 111.06-1.06h-.005zM6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" fill="currentColor"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </form>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="navbar-center">
          <div className="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z" fill="currentColor"/>
            </svg>
            <span>Home</span>
          </div>

          <div className="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6h-5zm-8-1a1 1 0 011-1h4a1 1 0 011 1v1H9V5zm10 9a4 4 0 01-3 3.92V17a3 3 0 01-3 3h-4a3 3 0 01-3-3v-1.08A4 4 0 012 13v-3h20v3a4 4 0 01-3 4z" fill="currentColor"/>
            </svg>
            <span>Jobs</span>
          </div>

          <div className="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm4-9a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z" fill="currentColor"/>
            </svg>
            <span>Messaging</span>
          </div>

          <div className="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm3-7a3 3 0 01-3 3 3 3 0 01-3-3 1 1 0 012 0 1 1 0 002 0 1 1 0 012 0z" fill="currentColor"/>
            </svg>
            <span>Notifications</span>
          </div>

          <div className="nav-item">
            <div className="user-avatar">
              <img 
                src="./src/assets/jatinphoto.jpg" 
                alt="User" 
                className="avatar-img"
              />
            </div>
            <span>Me</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="navbar-right">
          <div className="nav-item business">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm4-9a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z" fill="currentColor"/>
            </svg>
            <span>For Business</span>
          </div>

          <button className="premium-btn">
            Try Premium
          </button>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-item">Home</div>
          <div className="mobile-menu-item">Jobs</div>
          <div className="mobile-menu-item">Messaging</div>
          <div className="mobile-menu-item">Notifications</div>
          <div className="mobile-menu-item">Me</div>
          <div className="mobile-menu-item">For Business</div>
          <div className="mobile-menu-item">Try Premium</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;