import React, { useState } from 'react';
import '../../styles/states/Himachal.css';

const images = [
  { src: '/states/himachal/1.jpg', alt: 'Delhi City' },
  { src: '/states/himachal/2.jpg', alt: 'Shimla Christ Church' },
  { src: '/states/himachal/3.jpg', alt: 'Manali Valley' },
  { src: '/states/himachal/4.jpg', alt: 'Rohtang Pass' },
  { src: '/states/himachal/5.jpg', alt: 'Solang Valley' },
  { src: '/states/himachal/6.jpg', alt: 'Chandigarh Rock Garden' },
];

const HimachalTourPackage = () => {
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
      <h1>Enchanting Himachal Tour</h1>
      <h2>6 Nights / 7 Days</h2>
      <p className="location">Destinations: Delhi – Shimla – Manali – Chandigarh</p>

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
        <p>Discover Himachal's scenic beauty, adventurous activities, and cultural heritage with this 7-day tour.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Delhi - Shimla</h3>
          {selectedDay === 0 && (
            <p>
              Upon arrival in Delhi, transfer to Shimla through scenic views of the Shivalik ranges. Check in and enjoy exploring Shimla's local spots. Overnight in Shimla.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Shimla Day Tour</h3>
          {selectedDay === 1 && (
            <p>
              Visit Shimla's Christ Church, Hanuman Temple, Viceregal Lodge, and more. Enjoy shopping at Mall Road in the evening. Overnight in Shimla.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Shimla - Manali</h3>
          {selectedDay === 2 && (
            <p>
              Drive to Manali, a scenic town in the Kullu District, known for its valleys and breathtaking views. Overnight in Manali.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Manali</h3>
          {selectedDay === 3 && (
            <p>
              Explore Manali's attractions, including Hadimba Devi Temple, Vashist Kund, and local Tibetan monasteries. Overnight in Manali.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(4)}>Day 5: Manali – Snow Point Excursions</h3>
          {selectedDay === 4 && (
            <p>
              Visit Kothi Snowpoint, Gulaba Viewpoint, Marhi, Rohtang Pass, and Solang Valley for an adventurous day in the snow. Overnight in Manali.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(5)}>Day 6: Manali - Chandigarh</h3>
          {selectedDay === 5 && (
            <p>
              Transfer to Chandigarh and visit Rock Garden, Rose Garden, and Sukhna Lake. Overnight in Chandigarh.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(6)}>Day 7: Chandigarh - Delhi</h3>
          {selectedDay === 6 && (
            <p>
              Check out and return to Delhi, where your journey concludes as you head to the airport or railway station for departure.
            </p>
          )}
        </div>

        <p className="duration">Duration: 6 Nights / 7 Days</p>
      </section>
    </div>
  );
};

export default HimachalTourPackage;
