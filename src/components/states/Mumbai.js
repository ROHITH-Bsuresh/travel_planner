import React, { useState } from 'react';
import '../../styles/states/Mumbai.css';

const images = [
  { src: '/states/mumbai/1.jpg', alt: 'Mumbai City' },
  { src: '/states/mumbai/2.jpg', alt: 'Shirdi Temple' },
  { src: '/states/mumbai/3.jpg', alt: 'Triambakeshwar Temple' },
  { src: '/states/mumbai/4.jpg', alt: 'Ajanta Caves' },
  { src: '/states/mumbai/5.jpg', alt: 'Ellora Caves' },
  { src: '/states/mumbai/6.jpg', alt: 'Daulatabad Fort' },
];

const MumbaiAurangabadTour = () => {
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
      <h1>Mumbai – Aurangabad – Ajanta – Ellora Tour Package</h1>
      <h2>4 Nights / 5 Days</h2>
      <p className="location">Destinations: Mumbai – Aurangabad – Ajanta Caves – Aurangabad</p>

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
        <p>Explore the rich culture, historical architecture, and beautiful landscapes of Maharashtra on this 5-day tour.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrive in Mumbai</h3>
          {selectedDay === 0 && (
            <p>
              Arrive at Mumbai Airport and travel to Shirdi. Visit the famous Sai Baba Temple, and Triambakeshwar Temple en route. Don't miss the Panchavati Wildlife Sanctuary, home to tigers, leopards, and diverse bird species. Overnight in Nashik.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Aurangabad Tour</h3>
          {selectedDay === 1 && (
            <p>
              Visit Shani Shingnapur Temple, where homes lack doors due to the villagers' belief in Lord Shani’s protective powers. Spend the night in Nashik.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Ajanta and Ellora Caves</h3>
          {selectedDay === 2 && (
            <p>
              Take a scenic drive to the Ajanta and Ellora Caves, UNESCO World Heritage Sites. Discover the 30 Buddhist monuments dating back to the 5th century BCE. Return to Nashik for the night.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Aurangabad City Tour</h3>
          {selectedDay === 3 && (
            <p>
              Visit the Ellora Caves, including the impressive Kailasa Temple. Explore the Grishneshwar Temple, Bibi-ka-Maqbara, and Daulatabad Fort. Overnight in Nashik.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(4)}>Day 5: Departure</h3>
          {selectedDay === 4 && (
            <p>
              Head back to Mumbai. Spend the day exploring Mumbai City before catching your return flight or train.
            </p>
          )}
        </div>

        <p className="duration">Duration: 4 Nights / 5 Days</p>
      </section>
    </div>
  );
};

export default MumbaiAurangabadTour;
