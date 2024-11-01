import React from 'react';
import '../../styles/activities/PackageByOutside.css';  // Correct path to the PackageByOutside.css file

function PackageByOutside() {
  return (
    <div className="outside-package-page">
      <h1>Packages by Outside Travel Planners</h1>
      <p>
        Discover exclusive packages offered by external travel agencies and planners. These packages provide unique
        experiences curated by top travel experts, ensuring a memorable holiday for you and your loved ones.
      </p>

      <div className="package-cards">
        <div className="package-card">
          <h2>Luxury Beach Getaway</h2>
          <p>Experience a luxurious beach vacation with 5-star accommodations, private beach access, and gourmet dining.</p>
          <button className="book-now">Book Now</button>
        </div>

        <div className="package-card">
          <h2>Mountain Adventure</h2>
          <p>Join an exhilarating adventure in the mountains with hiking, rock climbing, and nature walks.</p>
          <button className="book-now">Book Now</button>
        </div>

        <div className="package-card">
          <h2>City Culture Explorer</h2>
          <p>Explore the rich history and culture of famous cities with guided tours, museum visits, and local cuisine.</p>
          <button className="book-now">Book Now</button>
        </div>

        {/* Add more package cards if needed */}
      </div>
    </div>
  );
}

export default PackageByOutside;
