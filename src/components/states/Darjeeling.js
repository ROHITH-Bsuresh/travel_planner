import React, { useState } from 'react';
import '../../styles/states/Darjeeling.css'; // Make sure to create/update the corresponding CSS file

const images = [
  { src: '/states/darjeeling/1.jpg', alt: 'Gangtok View' },
  { src: '/states/darjeeling/2.jpeg', alt: 'Darjeeling Tea Gardens' },
  { src: '/states/darjeeling/3.jpg', alt: 'Tiger Hills' },
  { src: '/states/darjeeling/4.jpg', alt: 'Enchey Monastery' },
  { src: '/states/darjeeling/5.jpg', alt: 'Ban Jhakri Falls' },
];

const GangtokDarjeelingTour = () => {
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
      <h1>Amazing Gangtok Darjeeling Tour</h1>
      <h2>Duration: 3 Nights / 4 Days</h2>
      <p className="location">Gangtok, Darjeeling</p>
      <p>Tour Type: Daily Tour | Group Size: Unlimited | Languages: English</p>

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
        <p>Explore the breathtaking landscapes of Gangtok and Darjeeling, renowned for their stunning views and rich cultural heritage.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrive In Gangtok</h3>
          {selectedDay === 0 && (
            <p>Upon arrival at Bagdogra Airport, you will be welcomed by our tour manager who will assist you in transferring to Gangtok. Enjoy a scenic journey of 4 to 5 hours and check into your hotel. Spend the rest of the day exploring the local area.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Gangtok Full Day Tour</h3>
          {selectedDay === 1 && (
            <p>After breakfast, visit iconic attractions including Hanuman Tok, Ban Jhakri Falls, Sikkim Himalayan Zoological Park, and more. Don't miss the ropeway ride for a panoramic view of Gangtok City.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Gangtok - Darjeeling</h3>
          {selectedDay === 2 && (
            <p>Check out of your hotel in Gangtok and travel to Darjeeling. Visit Tiger Hills, Peace Pagoda, and more before checking into your hotel in Darjeeling.</p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Depart Darjeeling</h3>
          {selectedDay === 3 && (
            <p>After breakfast, check out of your hotel and head to Bagdogra Airport for your departure, concluding your amazing tour.</p>
          )}
        </div>

        <p className="duration">Duration: 3 Nights / 4 Days</p>
      </section>
    </div>
  );
};

export default GangtokDarjeelingTour;
