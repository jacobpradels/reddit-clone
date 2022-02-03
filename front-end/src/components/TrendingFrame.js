import React from 'react';
import football from '../img/football.jpg'
import './TrendingFrame.css'

export default function TrendingFrame() {
  return (
    <div className="trending-frame">
        <div class="trending-gradient">
        </div>
        <img src={football} class="trending-photo"/>
        <div className="trending-text-panel">
            <h3 className="trending-frame-text trending-text">Superbowl 2022</h3>
            <h5 className="trending-frame-sub-text trending-text">Rams go back to superbowl for first time since 2018</h5>
            <h6 className="trending-subreddit trending-text">🏈/r/sports and more</h6>
        </div>
    </div>);
}
