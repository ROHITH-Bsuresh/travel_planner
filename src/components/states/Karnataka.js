import React, { useState } from 'react';
import '../../styles/states/Karnataka.css'; // Ensure correct path to Karnataka.css

const images = [
  { src: '/states/karnataka/1.jpg', alt: 'Bangalore City' },
  { src: '/states/karnataka/2.jpg', alt: 'Mysore Palace' },
  { src: '/states/karnataka/3.jpg', alt: 'Coorg Landscape' },
  { src: '/states/karnataka/4.jpg', alt: 'Brindavan Gardens' },
  { src: '/states/karnataka/5.jpg', alt: 'Abbey Falls in Coorg' }
];

const KarnatakaTourPackage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSize, setImageSize] = useState('large'); // Toggle image size
  const [selectedDay, setSelectedDay] = useState(null); // Toggle itinerary content

  // Toggle between large and small image size
  const toggleImageSize = () => {
    setImageSize((prevSize) => (prevSize === 'large' ? 'small' : 'large'));
  };

  // Toggle function to show/hide itinerary content
  const toggleDay = (index) => {
    setSelectedDay(selectedDay === index ? null : index);
  };

  return (
    <div className="tour-package-page">
      {/* Tour Title and Location */}
      <h1>Super Saver Holiday Package</h1>
      <h1>Karnataka 5 Nights / 6 Days</h1>
      <p className="location">Bangalore, Mysore, Coorg, Karnataka, India</p>

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
        <p>Karnataka is a beautiful state offering a blend of scenic beauty, historical sites, and vibrant culture. This tour will take you through its most iconic destinations.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrive in Bangalore</h3>
          {selectedDay === 0 && <p>Explore the best of Bangalore, including Cubbon Park, Lalbagh Botanical Garden, Tipu Sultan's Summer Palace, and more.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Bangalore – Mysore</h3>
          {selectedDay === 1 && <p>After breakfast, depart for Mysore, the city of palaces. Check into your hotel and explore Mysore at your own pace.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Mysore City Tour</h3>
          {selectedDay === 2 && <p>Visit Mysore’s top attractions including Chamundi Hills, Brindavan Gardens, Mysore Zoo, and St. Philomena's Cathedral.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Mysore - Coorg</h3>
          {selectedDay === 3 && <p>Depart from Mysore and head to Coorg. Check into your hotel and enjoy the scenic surroundings.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(4)}>Day 5: Coorg</h3>
          {selectedDay === 4 && <p>Explore Coorg’s tea and coffee plantations, Omkareshwara Temple, Abbey Falls, Raja's Seat, and Nagarahole Tiger Reserve.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(5)}>Day 6: Coorg – Bangalore – Depart</h3>
          {selectedDay === 5 && <p>Return to Bangalore for your departure. Bid farewell to Karnataka with wonderful memories.</p>}
        </div>

        <p className="duration">Duration: 5 Nights / 6 Days</p>
      </section>
    </div>
  );
};

export default KarnatakaTourPackage;
