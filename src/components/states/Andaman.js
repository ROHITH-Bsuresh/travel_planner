import React, { useState } from 'react';
import '../../styles/states/Andaman.css';

const images = [
  { src: '/states/andaman/1.jpg', alt: 'Corbyn’s Cove Beach' },
  { src: '/states/andaman/2.jpg', alt: 'Cellular Jail' },
  { src: '/states/andaman/3.jpeg', alt: 'Ross Island' },
  { src: '/states/andaman/4.jpeg', alt: 'Havelock Island' },
  { src: '/states/andaman/5.jpeg', alt: 'Elephant Beach' },
];

const AstonishingAndaman = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSize, setImageSize] = useState('large');
  const [selectedDay, setSelectedDay] = useState(null);

  const toggleImageSize = () => {
    setImageSize((prevSize) => (prevSize === 'large' ? 'small' : 'large'));
  };

  const toggleDay = (index) => {
    setSelectedDay(selectedDay === index ? null : index);
  };

  return (
    <div className="tour-package-page">
      <h1>Astonishing Andaman</h1>
      <h1>7 Nights / 8 Days</h1>
      <p className="location">Port Blair, Ross Island, North Bay (Coral Island), Viper Island, Havelock, Andaman</p>

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
        <p>Discover the mesmerizing beauty of the Andaman Islands, with pristine beaches, tropical forests, and unique wildlife.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrive in Port Blair - Corbyn’s Cove Beach - Cellular Jail</h3>
          {selectedDay === 0 && (
            <p>Explore Corbyn’s Cove Beach, engage in water activities, and visit the historic Cellular Jail for a light and sound show.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Ross Island - Viper Island</h3>
          {selectedDay === 1 && (
            <p>Visit Ross Island and Viper Island for historical insights and cultural experiences, with opportunities for snorkeling and boat rides.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Neil Island - Sitapur, Bharatpur, and Laxmanpur Beaches</h3>
          {selectedDay === 2 && (
            <p>Explore Neil Island's serene beaches, each offering unique views and water sports activities.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Havelock Island - Radhanagar Beach</h3>
          {selectedDay === 3 && (
            <p>Relax at Radhanagar Beach, one of India's most beautiful beaches, known for its breathtaking sunsets.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(4)}>Day 5: Havelock Island</h3>
          {selectedDay === 4 && (
            <p>Enjoy a full day of water adventures at Havelock Island, including kayaking, snorkeling, and jet skiing.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(5)}>Day 6: Elephant Beach - Port Blair</h3>
          {selectedDay === 5 && (
            <p>Visit the unique Elephant Beach and participate in activities like parasailing and glass-bottom boat rides. Return to Port Blair.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(6)}>Day 7: Baratang Island - Limestone Caves</h3>
          {selectedDay === 6 && (
            <p>Explore the Limestone Caves at Baratang Island, accessible via a scenic journey through mangrove forests.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(7)}>Day 8: Depart Port Blair</h3>
          {selectedDay === 7 && <p>After breakfast, transfer to the airport for your departure, concluding your Andaman adventure.</p>}
        </div>

        <p className="duration">Duration: 7 Nights / 8 Days</p>
      </section>
    </div>
  );
};

export default AstonishingAndaman;
