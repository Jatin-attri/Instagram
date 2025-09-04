import React from 'react';
import './FeedSection.css';
import { getCurrentUser } from '../utils/auth';

function FeedSection() {
  const user = getCurrentUser();
  return (
    <div className="feed-section">
      <div className="feed-container">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <div className="profile-card">
            <div className="profile-header">
              <div className="cover-photo"></div>
              <div className="profile-info">
                <div className="profile-avatar">
                  <img 
                    src="./src/assets/jatinphoto.jpg" 
                    alt="Profile" 
                  />
                </div>
                {user ? (
                <h2 className="profile-name"> <span>👤 {user.name} ({user.email}) Roll:{user.role}</span></h2>) : (<span>Not logged in</span>) }
                <p className="profile-title">MCA Student at CRSU | Full Stack Developer (React, Node.js...)</p>
                <p className="profile-location">Jind, Hayana</p>
              </div>
            </div>
            
            <div className="profile-details">
              <div className="connections">
                
                <div className="invitation-header">
                <h4>Connections</h4>
                  <span className="count">21000+</span>
                </div>
                <p>Connect with alumni</p>
              </div>
              
              <div className="invitation">
                <div className="invitation-header">
                  <span>Invitation</span>
                  <span className="count">100+</span>
                </div>
                <p>Discover your next customer</p>
              </div>
              
              <div className="sales-nav">
                <span className="sales-text">Try Sales Nav for ₹0</span>
              </div>
            </div>
          </div>
          
          <div className="saved-items">
            <h4>Saved items</h4>
            <ul>
              <li>Groups</li>
              <li>Newsletters</li>
              <li>Events</li>
            </ul>
          </div>
        </div>
        
        {/* Main Feed */}
        <div className="main-feed">
          <div className="create-post">
            <div className="post-input">
              <div className="avatar">
                <img 
                  src="./src/assets/jatinphoto.jpg" 
                  alt="User" 
                />
              </div>
              <input type="text" placeholder="Start a post" />
            </div>
            <div className="post-options">
              <button className="post-option">
                <span className="icon photo">📷</span>
                <span>Photo</span>
              </button>
              <button className="post-option">
                <span className="icon video ">🎬</span>
                <span>Video</span>
              </button>
              <button className="post-option">
                <span className="icon article">📝</span>
                <span>Write article</span>
              </button>
            </div>
          </div>
          
          <div className="feed-posts">
            <div className="post">
              <div className="post-header">
                <div className="poster-info">
                  <div className="poster-avatar">
                    <img 
                      src="./src/assets/jatinphoto.jpg" 
                      alt="Shruti Pattnaik" 
                    />
                  </div>
                  <div className="poster-details">
                    <span className="poster-name">Jatin likes this</span>
                  </div>
                </div>
              </div>
              
              <div className="post-content">
                <div className="shared-post">
                  <div className="shared-post-header">
                    <div className="shared-poster-info">
                      <div className="shared-poster-avatar">
                        <img 
                          src="./src/assets/vatan.jpg" 
                          alt="vatan attri" 
                        />
                      </div>
                      <div className="shared-poster-details">
                        <h4>Jatin Attri 💬 • 3rd+</h4>
                        <p>Direct Response Copy Writer | Content Strategist | Creative Content Writer</p>
                        <span className="connections">54+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="shared-post-content">
                    <p>Ex role tha Content Writer ka, Siri likhne waalon ke liye bana tha. ...more</p>
                  </div>
                  
                  <div className="post-stats">
                    <div className="reactions">
                      <span>Shruti Pattnaik and 1,011 others</span>
                    </div>
                    <div className="comments-shares">
                      <span>175 comments • 41 reposts</span>
                    </div>
                  </div>
                  
                  <div className="post-actions">
                    <button className="post-action">
                      <span>Like</span>
                    </button>
                    <button className="post-action">
                      <span>Comment</span>
                    </button>
                    <button className="post-action">
                      <span>Repost</span>
                    </button>
                    <button className="post-action">
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="post promoted">
              <div className="post-header">
                <div className="poster-info">
                  <div className="poster-avatar">
                    <img 
                      src="./src/assets/vatan.jpg" 
                      alt="vatan attri" 
                    />
                  </div>
                  <div className="poster-details">
                    <h4>Harpreet Singh 💬 • 3rd+</h4>
                    <p>Software Engineer • Google • Amazon • 50K+ LinkedIn</p>
                    <div className="promoted-tag">
                      <span>Promoted • Partnership with Shigya</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="post-content">
                <p>Here’s the Resume + Template that got me into Google: https://inkd.in/gf2wwkgc</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="right-sidebar">
          <div className="linkedin-news">
            <h3>LinkedIn News</h3>
            <p>Top stories</p>
            <ul className="news-list">
              <li>
                <h4>Most US tariffs ruled illegal</h4>
                <p>10h ago • 22,586 readers</p>
              </li>
              <li>
                <h4>Q-commerce grows beyond groceries</h4>
                <p>10h ago • 967 readers</p>
              </li>
              <li>
                <h4>Revenue growth on a 7-quarter decline</h4>
                <p>10h ago • 706 readers</p>
              </li>
              <li>
                <h4>Hotels ramp up festive hiring</h4>
                <p>8h ago • 368 readers</p>
              </li>
              <li>
                <h4>Auto exports on bumpy road</h4>
                <p>8h ago • 263 readers</p>
              </li>
            </ul>
            <button className="show-more">Show more ➤️</button>
          </div>
          
          <div className="puzzle-spotlight">
            <h3>LinkedIn puzzle spotlight</h3>
            <div className="puzzle-content">
              <h4>Zip - a quick brain teaser</h4>
              <p>Solve in 60s or less!</p>
              <p>Score is private to you</p>
              <div className="promoted-tag">
                <span>Promoted ...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedSection;