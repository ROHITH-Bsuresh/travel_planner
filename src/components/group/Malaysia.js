import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/group/Malaysia.css';

const images = [
  { src: '/group/malaysia/1.jpg', alt: 'Petronas Towers' },
  { src: '/group/malaysia/2.jpg', alt: 'Langkawi Beach' },
  { src: '/group/malaysia/3.jpg', alt: 'Kuala Lumpur' },
  { src: '/group/malaysia/4.jpg', alt: 'Cameron Highlands' },
  { src: '/group/malaysia/5.jpg', alt: 'Batu Caves' },
];

const itineraryDays = [
  {
    day: 'Day 1: Arrival in Kuala Lumpur',
    activities: [
      'Arrive at Kuala Lumpur International Airport.',
      'Transfer to hotel and check-in.',
      'Welcome dinner and orientation with tour guide.',
      'Overnight stay in Kuala Lumpur.',
    ],
  },
  {
    day: 'Day 2: Kuala Lumpur City Tour',
    activities: [
      'Breakfast at the hotel.',
      'Visit iconic landmarks: Petronas Towers, Merdeka Square, and Batu Caves.',
      'Lunch at a local restaurant.',
      'Explore Chinatown and Little India.',
      'Evening free for shopping at Bukit Bintang.',
      'Overnight stay in Kuala Lumpur.',
    ],
  },
  {
    day: 'Day 3: Kuala Lumpur to Langkawi',
    activities: [
      'Breakfast at the hotel.',
      'Flight to Langkawi.',
      'Check-in at the resort.',
      'Relaxing afternoon on Pantai Cenang Beach.',
      'Dinner by the beach.',
      'Overnight stay in Langkawi.',
    ],
  },
  {
    day: 'Day 4: Langkawi Island Tour',
    activities: [
      'Breakfast at the resort.',
      'Cable car ride to the top of Gunung Mat Cincang.',
      'Visit the Sky Bridge and take a boat tour around the island.',
      'Lunch at a beachside restaurant.',
      'Evening free for shopping or leisure activities.',
      'Overnight stay in Langkawi.',
    ],
  },
  {
    day: 'Day 5: Langkawi to Cameron Highlands',
    activities: [
      'Breakfast at the resort.',
      'Transfer to Cameron Highlands.',
      'Visit tea plantations and butterfly gardens.',
      'Lunch in the highlands.',
      'Explore local markets and flower gardens.',
      'Overnight stay in Cameron Highlands.',
    ],
  },
  {
    day: 'Day 6: Cameron Highlands to Penang',
    activities: [
      'Breakfast at the hotel.',
      'Drive to Penang.',
      'Check-in and lunch at the hotel.',
      'Explore George Town, a UNESCO World Heritage site.',
      'Evening at the Penang Hill.',
      'Overnight stay in Penang.',
    ],
  },
  {
    day: 'Day 7: Penang Island Tour',
    activities: [
      'Breakfast at the hotel.',
      'Visit Kek Lok Si Temple and the Penang Botanic Gardens.',
      'Lunch at a local hawker center.',
      'Explore the Penang National Park.',
      'Overnight stay in Penang.',
    ],
  },
  {
    day: 'Day 8: Penang to Kuala Lumpur',
    activities: [
      'Breakfast at the hotel.',
      'Return flight to Kuala Lumpur.',
      'Free time for shopping or sightseeing.',
      'Farewell dinner.',
      'Overnight stay in Kuala Lumpur.',
    ],
  },
  {
    day: 'Day 9: Departure from Kuala Lumpur',
    activities: [
      'Breakfast at the hotel.',
      'Transfer to the airport for your flight back home.',
      'End of the Malaysia tour.',
    ],
  },
];

const Malaysia = () => {
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
    <div className="malaysia-package-page">
      <h1>Malaysia Grand Tour Group Departure</h1>
      <p className="subheader">9 Days | Malaysia Tour</p>
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

export default Malaysia;
