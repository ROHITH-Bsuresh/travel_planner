import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/group/Baku.css';

const images = [
  { src: '/group/baku/1.jpg', alt: 'Flame Towers' },
  { src: '/group/baku/2.jpg', alt: 'Baku Boulevard' },
  { src: '/group/baku/3.jpg', alt: 'Old City Baku' },
  { src: '/group/baku/4.jpg', alt: 'Azerbaijan Carpet Museum' },
  { src: '/group/baku/5.jpg', alt: 'Heydar Aliyev Center' },
];

const itineraryDays = [
  {
    day: 'Day 1: Arrival in Baku',
    activities: [
      'Arrive at Baku International Airport.',
      'Transfer to hotel and check-in.',
      'Welcome dinner and orientation with the tour guide.',
      'Overnight stay in Baku.',
    ],
  },
  {
    day: 'Day 2: Baku City Tour',
    activities: [
      'Breakfast at the hotel.',
      'Visit iconic landmarks: Flame Towers, Baku Boulevard, and the Old City.',
      'Lunch at a local restaurant.',
      'Explore Fountain Square and local bazaars.',
      'Overnight stay in Baku.',
    ],
  },
  {
    day: 'Day 3: Gobustan National Park',
    activities: [
      'Breakfast at the hotel.',
      'Visit Gobustan National Park and Mud Volcanoes.',
      'Lunch at a local restaurant.',
      'Explore petroglyphs and the Gobustan Museum.',
      'Overnight stay in Baku.',
    ],
  },
  {
    day: 'Day 4: Baku to Sheki',
    activities: [
      'Breakfast at the hotel.',
      'Drive to Sheki.',
      'Visit the Sheki Khan’s Palace and the local markets.',
      'Overnight stay in Sheki.',
    ],
  },
  {
    day: 'Day 5: Sheki to Gabala',
    activities: [
      'Breakfast at the hotel.',
      'Transfer to Gabala.',
      'Explore Tufandag Mountain Resort and enjoy scenic views.',
      'Overnight stay in Gabala.',
    ],
  },
  {
    day: 'Day 6: Gabala to Baku',
    activities: [
      'Breakfast at the hotel.',
      'Return to Baku.',
      'Explore Heydar Aliyev Center.',
      'Overnight stay in Baku.',
    ],
  },
  {
    day: 'Day 7: Baku Free Day',
    activities: [
      'Breakfast at the hotel.',
      'Free day for leisure, shopping, and personal exploration.',
      'Overnight stay in Baku.',
    ],
  },
  {
    day: 'Day 8: Departure from Baku',
    activities: [
      'Breakfast at the hotel.',
      'Transfer to the airport for your flight back home.',
      'End of the Baku tour.',
    ],
  },
];

const Baku = () => {
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
    <div className="baku-package-page">
      <h1>Baku Grand Tour Group Departure</h1>
      <p className="subheader">8 Days | Baku Tour</p>
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
      <h1 className="cost">₹ 1,09,999</h1>
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
              <td>₹ 1,09,999</td>
            </tr>
            <tr>
              <td>Child With Bed</td>
              <td>₹ 99,999</td>
            </tr>
            <tr>
              <td>Child No Bed</td>
              <td>₹ 89,999</td>
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

export default Baku;
