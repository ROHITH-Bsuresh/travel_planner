import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Activity.css';

function Activity() {
  return (
    <div className="activity-page">
      <h1>Choose an Activity</h1>
      <div className="activity-options">
        <div className="activity-card">
          <h2>Volunteer</h2>
          <p>Join our volunteer programs and contribute to the local community while exploring new places.</p>
          <Link to="/volunteer" className="activity-btn">Explore Volunteer</Link>
        </div>
        <div className="activity-card">
          <h2>Package by Outside</h2>
          <p>Discover exclusive travel packages offered by external travel planners.</p>
          <Link to="/packagebyoutside" className="activity-btn">Explore Packages</Link>
        </div>
      </div>
    </div>
  );
}

export default Activity;
