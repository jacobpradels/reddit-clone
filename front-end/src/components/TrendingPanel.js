import React from 'react';
import TrendingFrame from './TrendingFrame'

export default function TrendingPanel() {
  return (
    <>
      <div className="trending-panel">
        <div class="trending-panel-title">Trending today</div>
        <div className="trending-panel-frames">
          <TrendingFrame />
          <TrendingFrame />
          <TrendingFrame />
          <TrendingFrame />
        </div>
      </div>
    </>
  );
}
