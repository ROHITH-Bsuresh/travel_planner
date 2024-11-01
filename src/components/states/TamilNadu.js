import React, { useState } from 'react';
import '../../styles/states/TamilNadu.css'; // Correct path to the Tamilnadu.css file

const images = [
  { src: '/states/tamilnadu/7.jpg', alt: 'Madurai Temple' },
  { src: '/states/tamilnadu/8.jpg', alt: 'Kodaikanal Hill Station' },
  { src: '/states/tamilnadu/9.jpg', alt: 'Rameshwaram Beach' },
  { src: '/states/tamilnadu/10.jpg', alt: 'Kanyakumari Sunset' },
  { src: '/states/tamilnadu/11.jpg', alt: 'Thirumalai Nayak Palace' },
  { src: '/states/tamilnadu/12.jpg', alt: 'Padmanabhapuram Palace' }
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
      <h1>Exotic Tamil Nadu 6 Days / 7 Nights</h1>
      <p className="location">Tamil Nadu, India</p>

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
        <p>The state of Tamil Nadu offers a potpourri of destinations for visitors to explore. From the serenity of beaches and temples to the rich cultural history of world heritage sites, there are no limitations to the gems you can uncover. If you want to travel to Tamil Nadu, then do check out our Tamil Nadu tour package.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrive in Madurai</h3>
          {selectedDay === 0 && <p>Upon arriving in Madurai, our tour representatives will greet you and help you get to your hotel. Explore the city, starting with the Arulmigu Meenakshi Sundareswarar Temple and Thirumalai Nayak Palace.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Madurai - Kodaikanal</h3>
          {selectedDay === 1 && <p>Leave for the hill station of Kodaikanal. After checking in to your hotel, head out to Bryant Park and return to your hotel for the night.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Kodaikanal</h3>
          {selectedDay === 2 && <p>Explore popular sightseeing spots in Kodaikanal, such as Green Valley View Point, Coaker's Walk, Pillar Rocks, and various waterfalls.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Kodaikanal - Madurai</h3>
          {selectedDay === 3 && <p>Return to Madurai. Visit Alagar Kovil and the Gandhi Memorial Museum before returning to your hotel for the night.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(4)}>Day 5: Madurai – Rameshwaram</h3>
          {selectedDay === 4 && <p>Head to Rameshwaram. Visit temples like the Ramjharoka Temple, Ramanathaswamy Temple, and explore Dhanushkodi and Adam's Bridge.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(5)}>Day 6: Rameshwaram - Kanyakumari</h3>
          {selectedDay === 5 && <p>Travel to Kanyakumari and visit Kumari Amman Temple, Vivekananda Rock Memorial, and watch the sunset at Kanyakumari Beach.</p>}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(6)}>Day 7: Kanyakumari – Trivandrum</h3>
          {selectedDay === 6 && <p>On the last day, visit Padmanabhapuram Palace and Sree Padmanabhaswamy Temple before departing from Trivandrum.</p>}
        </div>

        <p className="duration">Duration: 7 Nights / 6 Days</p>
      </section>
    </div>
  );
};

export default TourPackage;
