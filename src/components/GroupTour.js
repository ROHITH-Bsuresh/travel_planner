// src/components/GroupTour.js
import React from 'react';
import '../styles/GroupTour.css'; // Ensure this path is correct

function GroupTour() {
  return (
    <div className="group-tour-page">
      <h1>Join Our Group Tours</h1>
      <p>Experience the world with a group of like-minded travelers and enjoy guided tours to exotic destinations.</p>

      {/* Group Tour Cards Section */}
      <section className="group-tour-cards">
        <h2>Featured Group Tours</h2>
        
        {/* Winter Tours Section */}
        <h2>Winter Tours</h2>
        <div className="tour-cards-container">
          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/1.jpg)' }}>
            <a href="/dubai-new-year-chennai">
              <h3>Dubai New Year Group Departure ex Chennai</h3>
              <p>4 Nights 5 Days - Sharjah | Abu Dhabi | Dubai</p>
            </a>
          </div>

          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/2.jpg)' }}>
            <a href="/dubai-new-year-coimbatore">
              <h3>Dubai New Year Group Departure ex Coimbatore</h3>
              <p>4 Nights 5 Days - Sharjah | Abu Dhabi | Dubai</p>
            </a>
          </div>
        </div>

        {/* Summer Tours Section */}
        <h2>Summer Tours</h2>
        <div className="tour-cards-container">
          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/3.jpg)' }}>
            <a href="/dubai-shopping-festival-chennai">
              <h3>Dubai Shopping Festival Group Departure ex Chennai</h3>
              <p>4 Nights 5 Days - Sharjah | Abu Dhabi | Dubai</p>
            </a>
          </div>

          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/4.jpg)' }}>
            <a href="/dubai-shopping-festival-coimbatore">
              <h3>Dubai Shopping Festival Group Departure ex Coimbatore</h3>
              <p>4 Nights 5 Days - Sharjah | Abu Dhabi | Dubai</p>
            </a>
          </div>

          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/5.jpg)' }}>
            <a href="/europe-summer-chennai">
              <h3>Europe Summer Group Departure ex Chennai</h3>
              <p>09 Nights 10 Days - Paris | Zurich | Seefeld | Axams | Padova | Arezzo | Rome</p>
            </a>
          </div>

          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/6.jpg)' }}>
            <a href="/eastern-europe-chennai">
              <h3>Eastern Europe Group Departure ex Chennai</h3>
              <p>9 Nights 10 Days - Prague | Vienna | Ljubljana | Zagreb | Budapest</p>
            </a>
          </div>

          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/7.jpg)' }}>
            <a href="/scenic-uk-chennai">
              <h3>Scenic UK Group Tour ex Chennai</h3>
              <p>9 Nights 10 Days - London</p>
            </a>
          </div>

          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/8.jpg)' }}>
            <a href="/malaysia-singapore-chennai">
              <h3>Malaysia and Singapore Group Departure ex Chennai</h3>
              <p>6 Nights 7 Days - Kuala Lumpur</p>
            </a>
          </div>

          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/9.jpg)' }}>
            <a href="/blissful-baku-chennai">
              <h3>Blissful Baku Group Tour ex Chennai</h3>
              <p>4 Nights 5 Days</p>
            </a>
          </div>

          <div className="tour-card" style={{ backgroundImage: 'url(/Grouptour/10.jpg)' }}>
            <a href="/remarkable-turkey-chennai">
              <h3>Remarkable Turkey Group Tour ex Chennai</h3>
              <p>Istanbul | Kusadasi | Pamukkale | Cappadocia</p>
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Content Section */}
      <div className="welcome-content">
        <h3>Welcome to Our Group Tours</h3>
        <p>
          At our travel agency, we specialize in creating unforgettable group tour experiences. Whether you're looking to celebrate
          the New Year in Dubai, explore the beauty of Europe, or discover the wonders of Asia, we have a variety of packages
          tailored for you. Join us for a journey filled with adventure, culture, and camaraderie. Let us help you create
          lasting memories with your friends, family, or fellow travelers.
        </p>
      </div>
    </div>
  );
}

export default GroupTour;
