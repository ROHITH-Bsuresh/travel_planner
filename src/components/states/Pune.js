import React, { useState } from 'react';
import '../../styles/states/Pune.css';

const images = [
  { src: '/states/pune/1.jpg', alt: 'Lonavala' },
  { src: '/states/pune/2.jpg', alt: 'Venna Lake' },
  { src: '/states/pune/3.jpg', alt: 'Mapro Garden' },
  { src: '/states/pune/4.jpg', alt: 'Pratapgadh Fort' },
  { src: '/states/pune/5.jpg', alt: 'Panchgani Viewpoint' },
];

const PuneMahabaleshwarTour = () => {
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
      <h1>4 Days Pune Mahabaleshwar Holiday Package</h1>
      <h2>3 Nights / 4 Days</h2>
      <p className="location">Destinations: Pune – Mahabaleshwar</p>

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
        <p>Experience Maharashtra’s beautiful hill stations, lush hills, and historic sites on this scenic holiday tour.</p>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(0)}>Day 1: Arrive in Pune</h3>
          {selectedDay === 0 && (
            <p>
              Arrive at Pune Railway Station or Airport, and meet the tour manager who will assist with your transfer to Lonavala. After check-in, explore nearby attractions before spending the night in Lonavala.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(1)}>Day 2: Mahabaleshwar Day Tour</h3>
          {selectedDay === 1 && (
            <p>
              After breakfast, check out and head to Mahabaleshwar, enjoying views of the Sahyadri Mountains en route. Visit Venna Lake for boating, horseback riding, and shopping. Later, explore Mapro Garden, Mahabaleshwar Temple, Krishnabai Temple, and Panchganga Temple.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(2)}>Day 3: Mahabaleshwar Day 2</h3>
          {selectedDay === 2 && (
            <p>
              Visit Pratapgadh Fort, a 17th-century fort with historic significance, and explore Mahabaleshwar’s Mapro Garden, temples, and scenic spots.
            </p>
          )}
        </div>

        <div className="itinerary-day">
          <h3 onClick={() => toggleDay(3)}>Day 4: Depart to Pune</h3>
          {selectedDay === 3 && (
            <p>
              After checkout, drive back to Pune with a stopover at Panchgani, a charming hill station with lush green hills and beautiful viewpoints.
            </p>
          )}
        </div>

        <p className="duration">Duration: 3 Nights / 4 Days</p>
      </section>
      <section className="booking-info">
  <h3>Booking Information</h3>
  <p>
    To book your next adventure with <strong>Royal Seats</strong>, please call the number: <strong>9344733072</strong>.
  </p>
  <p>
    The booking process is exclusively available via phone call or at one of our nearby offices.
  </p>
  <p>
    Kindly ensure that you have all your travel details ready when calling, so our team can assist you promptly and ensure a smooth booking experience.
  </p>
  <p>
    For any further inquiries, feel free to reach out to us during business hours. We are happy to assist you with any questions you may have.
  </p>
  <p>
    Our dedicated office staff will guide you through the entire booking process, ensuring that all your preferences are taken into account for a personalized experience.
  </p>
  <p>
    At <strong>Royal Seats</strong>, we are committed to making your travel dreams come true and providing you with an unforgettable experience.
  </p>
</section>

    </div>
  );
};

export default PuneMahabaleshwarTour;
