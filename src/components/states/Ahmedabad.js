import React, { useState } from 'react';
import '../../styles/states/Ahmedabad.css';

const images = [
  { src: '/states/ahmedabad/1.jpg', alt: 'Ahmedabad City' },
  { src: '/states/ahmedabad/2.jpg', alt: 'Lothal Archaeological Site' },
  { src: '/states/ahmedabad/3.jpg', alt: 'Dwarka Temple' },
  { src: '/states/ahmedabad/4.jpg', alt: 'Kirti Mandir in Porbandar' },
  { src: '/states/ahmedabad/5.jpg', alt: 'Gir National Park' },
  { src: '/states/ahmedabad/6.jpg', alt: 'Naulakha Castle in Gondal' },
];

const GujaratHolidayPackage = () => {
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
      <h1>Summer Special Holiday Package</h1>
      <h2>5 Nights / 6 Days</h2>
      <p className="location">Destinations: Ahmedabad – Dwarka – Porbandar – Sasangir – Gondal</p>

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
        <p>Explore the rich culture, historical architecture, and vibrant colors of Gujarat on this 6-day tour.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrive in Ahmedabad</h3>
          {selectedDay === 0 && (
            <p>
              Arrive in Ahmedabad and visit Lothal, an ancient Harappan site, followed by Rajkot attractions like the Swami Narayan Mandir and Ramakrishna Museum. Overnight in Ahmedabad.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Dwarka</h3>
          {selectedDay === 1 && (
            <p>
              Take a flight to Dwarka, known as Devbhumi, where you’ll explore temples like Nageshwar Temple and Dwarkadish Temple. Overnight in Dwarka.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Porbandar</h3>
          {selectedDay === 2 && (
            <p>
              Drive to Porbandar and visit Mahatma Gandhi’s birthplace, Kirti Mandir, and Somnath Temple. Return to Dwarka to spend the night.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Sasan Gir</h3>
          {selectedDay === 3 && (
            <p>
              Head to Gir National Park for a wildlife experience, including a visit to Girnar Hills, a holy site for Hindus and Jains. Overnight in Dwarka.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(4)}>Day 5: Gondal</h3>
          {selectedDay === 4 && (
            <p>
              Explore Gondal attractions like Naulakha Castle and Swami Narayan Temple before returning to Ahmedabad. Overnight in Ahmedabad.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(5)}>Day 6: Depart Ahmedabad</h3>
          {selectedDay === 5 && (
            <p>
              Visit Akshardham Temple in Gandhinagar, followed by shopping before your departure from Ahmedabad in the evening.
            </p>
          )}
        </div>

        <p className="duration">Duration: 5 Nights / 6 Days</p>
      </section>
    </div>
  );
};

export default GujaratHolidayPackage;
