import React from 'react';

export default function NavBar() {
  return (
      <div class="nav-bar">
        <div class="popular-posts">Popular posts</div>
        <div class="nav-buttons">
            <input type="button" class="navbar-btn hot-btn" value="🔥 Hot"/>
            <input type="button" class="navbar-btn everywhere-btn" value="Everywhere ⌄" />
            <input type="button" class="navbar-btn new-btn" value="New" />
            <input type="button" class="navbar-btn top-btn" value="Top" />
            <input type="button" class="navbar-btn elipsis-btn" value="..." />
            <input type="button" class="navbar-btn display-btn" value="▭ ⌄" />
        </div>
      </div>
  );
}
