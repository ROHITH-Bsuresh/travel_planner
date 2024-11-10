import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/group/Turkey.css';

const images = [
  { src: '/group/turkey/1.jpg', alt: 'Hagia Sophia' },
  { src: '/group/turkey/2.jpg', alt: 'Blue Mosque' },
  { src: '/group/turkey/3.jpg', alt: 'Cappadocia' },
  { src: '/group/turkey/4.jpg', alt: 'Pamukkale' },
  { src: '/group/turkey/5.jpg', alt: 'Ephesus' },
];

const itineraryDays = [
  {
    day: 'Day 1: Arrival in Istanbul',
    activities: [
      'Arrive at Istanbul Airport.',
      'Transfer to hotel and check-in.',
      'Welcome dinner with the tour guide.',
      'Overnight stay in Istanbul.',
    ],
  },
  {
    day: 'Day 2: Istanbul City Tour',
    activities: [
      'Breakfast at the hotel.',
      'Visit iconic landmarks: Hagia Sophia, Blue Mosque, and Topkapi Palace.',
      'Lunch at a local restaurant.',
      'Explore Grand Bazaar and Spice Bazaar.',
      'Overnight stay in Istanbul.',
    ],
  },
  {
    day: 'Day 3: Istanbul to Cappadocia',
    activities: [
      'Breakfast at the hotel.',
      'Fly to Cappadocia.',
      'Hot air balloon ride over the fairy chimneys.',
      'Visit Goreme Open Air Museum and Derinkuyu Underground City.',
      'Overnight stay in Cappadocia.',
    ],
  },
  {
    day: 'Day 4: Cappadocia to Pamukkale',
    activities: [
      'Breakfast at the hotel.',
      'Drive to Pamukkale.',
      'Explore the white travertine terraces and Hierapolis.',
      'Overnight stay in Pamukkale.',
    ],
  },
  {
    day: 'Day 5: Pamukkale to Ephesus',
    activities: [
      'Breakfast at the hotel.',
      'Drive to Ephesus.',
      'Visit the ancient ruins of Ephesus, including the Temple of Artemis and the Library of Celsus.',
      'Overnight stay in Ephesus.',
    ],
  },
  {
    day: 'Day 6: Ephesus to Istanbul',
    activities: [
      'Breakfast at the hotel.',
      'Fly back to Istanbul.',
      'Leisure day for shopping or relaxation.',
      'Overnight stay in Istanbul.',
    ],
  },
  {
    day: 'Day 7: Departure from Istanbul',
    activities: [
      'Breakfast at the hotel.',
      'Transfer to the airport for your flight back home.',
      'End of the Turkey tour.',
    ],
  },
];

const Turkey = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentImage, setCurrentImage] = useState(images[0].src);

  const toggleDay = (index) => {
    setSelectedDay(selectedDay === index ? null : index);
  };

  const handleThumbnailClick = (imageSrc) => {
    setCurrentImage(imageSrc);
  };

  const handleReserveSpot = () => {
    navigate('/bill');
  };

  return (
    <div className="turkey-package-page">
      <h1>Turkey Grand Tour Group Departure</h1>
      <p className="subheader">7 Days | Turkey Tour</p>
      <h2 className="tour-type">Royal Seats Group Tour</h2>

      {/* Large Image Section */}
      <div className="large-image-container">
        <img src={currentImage} alt="Current View" className="large-image" />
      </div>

      {/* Image Thumbnails Section */}
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleThumbnailClick(image.src)}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      <h2 className="price">EXCLUSIVE OFFER PRICE</h2>
      <h3>STARTING FROM</h3>
      <h1 className="cost">₹ 1,29,999</h1>
      <p className="per-person">per person on twin sharing</p>
      <button className="book-now" onClick={handleReserveSpot}>Reserve Your Spot</button>

      {/* Tour Highlights */}
      <div className="tour-highlights">
        <h2>Exclusive Trip Highlights</h2>
        <ul>
          <li>Round-trip flights from Chennai</li>
          <li>Visa Arrangements</li>
          <li>Luxury Hotel Accommodation</li>
          <li>Daily Gourmet Meals</li>
          <li>Private Transportation</li>
          <li>Exclusive Sightseeing</li>
        </ul>
      </div>

      {/* Price Details */}
      <div className="price-details">
        <h2>Pricing</h2>
        <table>
          <tbody>
            <tr>
              <td>Adult</td>
              <td>₹ 1,29,999</td>
            </tr>
            <tr>
              <td>Child With Bed</td>
              <td>₹ 1,19,999</td>
            </tr>
            <tr>
              <td>Child No Bed</td>
              <td>₹ 1,09,999</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Itinerary Section */}
      <div className="itinerary-section">
        <h2>Tour Itinerary</h2>
        {itineraryDays.map((day, index) => (
          <div
            key={index}
            className={`itinerary-day ${selectedDay === index ? 'active' : ''}`}
            onClick={() => toggleDay(index)}
          >
            <h3>{day.day}</h3>
            {selectedDay === index && (
              <ul>
                {day.activities.map((activity, activityIndex) => (
                  <li key={activityIndex}>{activity}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="additional-notes">
        <h2>Important Notes</h2>
        <ul>
          <li>Flights and hotels are subject to availability.</li>
          <li>Travel insurance is recommended.</li>
          <li>Prices are subject to change.</li>
        </ul>
      </div>
    </div>
  );
};

export default Turkey;
