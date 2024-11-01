import React, { useState } from 'react';
import '../../styles/states/Hyderabad.css'; // Ensure correct path to Hyderabad.css

const images = [
  { src: '/states/hyderabad/1.jpg', alt: 'Hussain Sagar Lake' },
  { src: '/states/hyderabad/2.jpg', alt: 'Charminar' },
  { src: '/states/hyderabad/3.jpg', alt: 'Ramoji Film City' },
  { src: '/states/hyderabad/4.jpg', alt: 'Lumbini Park' },
  { src: '/states/hyderabad/5.jpg', alt: 'Salarjung Museum' }
];

const HyderabadTourPackage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSize, setImageSize] = useState('large'); // Toggle image size
  const [selectedDay, setSelectedDay] = useState(null); // Toggle itinerary content

  const toggleImageSize = () => {
    setImageSize((prevSize) => (prevSize === 'large' ? 'small' : 'large'));
  };

  const toggleDay = (index) => {
    setSelectedDay(selectedDay === index ? null : index);
  };

  return (
    <div className="tour-package-page">
      {/* Tour Title and Location */}
      <h1>4 Days Hyderabad Delight</h1>
      <h1>Hyderabad 3 Nights / 4 Days</h1>
      <p className="location">Hyderabad, Ramoji Film City, Telangana, India</p>

      {/* Main Image Section */}
      <div className={`main-image-container ${imageSize}`}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="main-image"
          onClick={toggleImageSize}
        />
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Itinerary Section */}
      <section className="itinerary-section">
        <h2>Itinerary</h2>
        <p>Hyderabad, the City of Pearls, offers cultural attractions, delicious cuisine, and historical sites. This package lets you explore its beauty and charm.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrival In Hyderabad</h3>
          {selectedDay === 0 && <p>Visit iconic attractions like Hussain Sagar Lake, Birla Temple, and Snow World. Relax at your hotel in the evening.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Ramoji Film City</h3>
          {selectedDay === 1 && <p>After breakfast, enjoy a full-day visit to Ramoji Film City, one of the world’s largest film studios with numerous attractions.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Hyderabad City Tour</h3>
          {selectedDay === 2 && <p>Explore Charminar, Nehru Zoological Park, Makkah Masjid, and Salarjung Museum. Evening free for shopping and local food.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Departure</h3>
          {selectedDay === 3 && <p>Conclude your tour with departure to Hyderabad airport or railway station.</p>}
        </div>

        <p className="duration">Duration: 3 Nights / 4 Days</p>
      </section>
    </div>
  );
};

export default HyderabadTourPackage;
