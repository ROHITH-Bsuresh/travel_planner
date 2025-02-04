import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);  
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');  
    setUserId(null);
    navigate('/login');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="home-page">
      {/* Navbar (if there is one in your layout) */}

      {/* Auth Buttons Container (Below Navbar) */}
      <div className="auth-buttons-container">
        {userId ? (
          <div className="auth-buttons">
            <span>Welcome, {userId}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
          </div>
        )}
      </div>

      <h1>Welcome to Royal Seats</h1>
      <p>Plan your dream holiday with us! Explore packages, tours, and activities.</p>

      {/* Popular Packages Section */}
      <section className="popular-packages">
        <h2>Popular Packages</h2>
        <div className="package-cards-container">
          <div className="package-card" style={{ backgroundImage: 'url(/Home/kerala.jpg)' }}>
            <a href="/kerala">
              <h3>Kerala Tour Packages</h3>
            </a>
          </div>
          <div className="package-card" style={{ backgroundImage: 'url(/Home/tamilnadu.jpg)' }}>
            <a href="/tamilnadu">
              <h3>Tamil Nadu Tour Packages</h3>
            </a>
          </div>
          <div className="package-card" style={{ backgroundImage: 'url(/Home/karanataka.webp)' }}>
            <a href="/karnataka">
              <h3>Karnataka Tour Packages</h3>
            </a>
          </div>
          <div className="package-card" style={{ backgroundImage: 'url(/Home/Hyderabad.jpg)' }}>
            <a href="/hyderabad">
              <h3>Hyderabad Tour Packages</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Content Section */}
      <div className="welcome-content">
        <h3>Welcome to The Royal Seats</h3>
        <p>
          At The Royal Seats Travel Planner, we are dedicated to making your travel dreams come true. With a commitment to providing 
          exceptional service and a passion for travel, our team works tirelessly to curate the best packages tailored to your 
          preferences. Whether you’re seeking a relaxing getaway, an adventurous journey, or a corporate retreat, we have 
          something for everyone. Our extensive knowledge of destinations allows us to offer unique insights and 
          personalized experiences. With years of expertise in the travel industry, we are well-equipped to handle 
          all your travel needs, from accommodation to activities. Join us on a journey of discovery and let us help you 
          create unforgettable memories.
        </p>
      </div>
    </div>
  );
}

export default Home;
