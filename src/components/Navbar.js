import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <div className="dropdown">
        <button className="dropbtn">Packages</button>
        <div className="dropdown-content">
          <Link to="/kerala">Kerala</Link>
          <Link to="/tamilnadu">Tamil Nadu</Link>
          <Link to="/karnataka">Karnataka</Link>
          <Link to="/hyderabad">Hyderabad</Link>
          <Link to="/andaman">Andaman</Link>
          <Link to="/darjeeling">Darjeeling</Link>
          <Link to="/goa">Goa</Link>
          <Link to="/pune">Pune</Link>
          <Link to="/mumbai">mumbai</Link>
          <Link to="/ahmedabad">Ahmedabad</Link>
          <Link to="/himachal">Himachal</Link>






          {/* Add links for 16 other states */}
        </div>
      </div>
      <Link to="/grouptour">Group Tour</Link>
      <div className="dropdown">
        <button className="dropbtn">Activity</button>
        <div className="dropdown-content">
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/packagebyoutside">Package by Outside</Link>
        </div>
      </div>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
