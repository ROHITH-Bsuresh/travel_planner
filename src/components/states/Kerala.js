import React, { useState } from 'react';
import '../../styles/states/Kerala.css'; // Correct path to the Kerala.css file

const images = [
  { src: '/states/kerala/1.jpg', alt: 'Kerala Tour' },
  { src: '/states/kerala/2.jpg', alt: 'Beautiful Kerala Landscape' },
  { src: '/states/kerala/3.jpg', alt: 'Kerala Backwaters' },
  { src: '/states/kerala/4.jpg', alt: 'Munnar Hills' },
  { src: '/states/kerala/5.jpg', alt: 'Houseboat in Alleppey' },
  { src: '/states/kerala/6.jpg', alt: 'Sunset at a Kerala Beach' }
];

const TourPackage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSize, setImageSize] = useState('large'); // For toggling image size
  const [selectedDay, setSelectedDay] = useState(null); // For toggling itinerary content

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
      <h1>Royal seats</h1>
      <h1>Enchanting Kerala 6 Days / 7 Nights</h1>
      <p className="location">Kerala, Cochin, India</p>

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
        <p>Kerala is a pristine jewel of the Western Ghats, attracting tourists for its idyllic beaches, tranquil backwaters, delectable cuisine, and rich culture.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrive in Cochin</h3>
          {selectedDay === 0 && <p>Upon arrival at the Cochin International Airport, our tour manager will guide you to the hotel. Enjoy a relaxing evening and a city tour.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Cochin – Munnar</h3>
          {selectedDay === 1 && <p>After breakfast, check out of the hotel and head to Munnar. The journey takes around 4 hours and is often considered the Kashmir of South India. The hill station is famous for its sprawling tea estates, spice plantations, waterfalls, and beautiful valleys. Check into your hotel and spend the rest of the day exploring places around the hotel and enjoying the scenic views.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Munnar</h3>
          {selectedDay === 2 && <p>Enjoy a sumptuous breakfast before driving out to explore the tea estates and other places of attractions, including the Pothamedu View Point, Mattupetty Dam, Tea Museum, Kolukkumalai Tea Estate, Kundala Dam, Echo Point, Anamudi, and the Eravikulam National Park. Spend the night at a luxury hotel in Munnar.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Munnar – Kumarakom</h3>
          {selectedDay === 3 && <p>After breakfast, check out of the hotel and head to Kumarakom. The journey takes around 4 hours and is exceedingly beautiful. Complete the check-in formalities at a resort on the banks of the Vembanad Lake. Later, join the tour manager for a relaxing backwater cruise. Spend the night in Kumarakom.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(4)}>Day 5: Kumarakom – Alleppey</h3>
          {selectedDay === 4 && <p>After breakfast, head out to Alleppey for a houseboat experience. Check into the houseboat to spend the night enjoying the views of the tranquil backwaters. This is a luxury accommodation with a living area, air-conditioned bedrooms, and viewing decks. The experience also includes sampling freshly made vegetarian and non-vegetarian food made by chefs inside the houseboat. Spend the night in the houseboat.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(5)}>Day 6: Alleppey – Cochin</h3>
          {selectedDay === 5 && <p>On the last day of your Kerala travel package, head out to Cochin. The journey takes around 1.5 hours. Bid adieu to the city as you board your plane/train to return home.</p>}
        </div>

        <p className="duration">Duration: 7 Nights / 6 Days</p>
      </section>
      

    </div>
  );
};

export default TourPackage;
