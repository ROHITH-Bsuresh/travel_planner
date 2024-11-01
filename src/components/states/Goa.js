import React, { useState } from 'react';
import '../../styles/states/Goa.css';

const images = [
  { src: '/states/goa/1.jpg', alt: 'Candolim Beach' },
  { src: '/states/goa/2.jpg', alt: 'Fort Aguada' },
  { src: '/states/goa/3.jpg', alt: 'Anjuna Beach' },
  { src: '/states/goa/4.jpg', alt: 'Dudhsagar Falls' },
  { src: '/states/goa/5.webp', alt: 'Palolem Beach' },
];

const EnchantingGoaSpecial = () => {
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
      <h1>Enchanting Goa Special Tour</h1>
      <h1>3 Nights / 4 Days</h1>
      <p className="location">Destinations: Goa – North Goa – South Goa</p>

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
        <p>Explore Goa’s iconic beaches, rich heritage, and vibrant culture on this delightful tour.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrive in Goa</h3>
          {selectedDay === 0 && (
            <p>Arrive in Goa, meet our tour manager, and check into your hotel. Spend the day exploring the surrounding area.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Explore North Goa</h3>
          {selectedDay === 1 && (
            <p>
              Begin with breakfast, then head out to explore North Goa. Visit Fort Aguada, Vagator Beach, Basilica of Bom Jesus, and Mangueshi Temple. Don’t miss Dona Paula, Miramar, and Margoa.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Explore South Goa</h3>
          {selectedDay === 2 && (
            <p>
              After breakfast, explore South Goa attractions like the Dudhsagar Falls, Bondla Wildlife Sanctuary, Colva Beach, Palolem Beach, and Se Cathedral. Return to the hotel for a relaxing evening.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Depart Goa</h3>
          {selectedDay === 3 && <p>Check out of the hotel and head to the airport for your return flight home.</p>}
        </div>

        <p className="duration">Duration: 3 Nights / 4 Days</p>
      </section>
    </div>
  );
};

export default EnchantingGoaSpecial;
