import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" fill="#0a66c2"/>
            </svg>
            <span className="logo-text">LinkedIn</span>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>General</h4>
              <ul>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Developers</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Browse LinkedIn</h4>
              <ul>
                <li><a href="#">Learning</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Salary</a></li>
                <li><a href="#">Mobile</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Products</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Business Solutions</h4>
              <ul>
                <li><a href="#">Talent</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Sales</a></li>
                <li><a href="#">Learning</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Directories</h4>
              <ul>
                <li><a href="#">Members</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Companies</a></li>
                <li><a href="#">Featured</a></li>
                <li><a href="#">Learning</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Schools</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">News Letters</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>LinkedIn Corporation © 2025  (Designed by Jatin Attri with ♥)</span>
          </div>
          
          <div className="footer-bottom-right">
            <a href="#">About</a>
            <a href="#">Accessibility</a>
            <a href="#">User Agreement</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Copyright Policy</a>
            <a href="#">Brand Policy</a>
            <a href="#">Guest Controls</a>
            <a href="#">Community Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;