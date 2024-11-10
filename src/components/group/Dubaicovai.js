import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/group/Dubaicovai.css';

const images = [
    { src: '/group/dubai1/1.jpg', alt: 'Dubai Skyline' },
    { src: '/group/dubai1/2.jpg', alt: 'Burj Khalifa' },
    { src: '/group/dubai1/3.jpg', alt: 'Desert Safari' },
    { src: '/group/dubai1/4.jpg', alt: 'Dubai Mall' },
    { src: '/group/dubai1/5.jpg', alt: 'Sheikh Zayed Grand Mosque' },
  ];

const itineraryDays = [
  {
    day: 'Day 1: Arrival at Sharjah Airport - Dhow Cruise',
    activities: [
      "Meet & Greet by Tour Representative upon arrival.",
      "Breakfast with continental and cooked items.",
      "Transfer to hotel for check-in (Standard Check-in time: 15:00 hrs).",
      "Evening Dhow Cruise with Buffet Dinner.",
      "Overnight stay at hotel.",
    ],
  },
  {
    day: 'Day 2: Abu Dhabi City Tour & Global Village',
    activities: [
      "Morning Breakfast at Hotel.",
      "Visit iconic Abu Dhabi sites like the Sheikh Zayed Grand Mosque.",
      "Lunch at an Indian Restaurant.",
      "Explore Global Village with international pavilions.",
      "Dinner at Global Village.",
      "Overnight stay at hotel.",
    ],
  },
  {
    day: 'Day 3: Dubai Frame & Desert Safari',
    activities: [
      "Morning Breakfast at Hotel.",
      "Visit Dubai Frame for panoramic city views.",
      "Lunch at a local restaurant.",
      "Desert Safari with BBQ Dinner and live performances.",
      "Overnight stay at hotel.",
    ],
  },
  {
    day: 'Day 4: Dubai City Tour, Burj Khalifa & Private Yacht',
    activities: [
      "Morning Breakfast at Hotel.",
      "Dubai City Tour including Burj Khalifa and Dubai Mall.",
      "Lunch at Indian Restaurant.",
      "Private Yacht Experience with stunning views.",
      "Dinner at Indian Restaurant.",
      "Overnight stay at hotel.",
    ],
  },
  {
    day: 'Day 5: Departure',
    activities: [
      "Morning Breakfast at Hotel.",
      "Free time for shopping.",
      "Transfer to Sharjah Airport for return flight.",
      "End of tour with Royal Seats.",
    ],
  },
];

const Dubaicovai = () => {
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
    <div className="dubai-package-page">
      <h1>Dubai New Year Group Departure ex Coimbatore</h1>
      <p className="subheader">5 Days | Home / Dubai / Dubai New Year Group Departure ex Coimbatore</p>
      <p className="location">3 Cities | UAE</p>
      <h2 className="tour-type">Group Tour</h2>

      <div className="large-image-container">
        <img src={currentImage} alt="Current View" className="large-image" />
      </div>

      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleThumbnailClick(image.src)}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      <h2 className="price">SUPER DEAL PRICE</h2>
      <h3>STARTS FROM</h3>
      <h1 className="cost">₹ 99,999</h1>
      <p className="per-person">per person on twin sharing</p>
      <button className="book-now" onClick={handleReserveSpot}>Book Now</button>
      <p className="departure-info">1 departure available</p>

      <div className="cities-visited">
        <h2>3 Cities | UAE you will visit</h2>
        <p>Sharjah | Abu Dhabi | Dubai</p>
      </div>

      <div className="tour-highlights">
        <h2>Speciality of This Trip</h2>
        <ul>
          <li>Flight</li>
          <li>Visa</li>
          <li>Hotel</li>
          <li>Meals</li>
          <li>Transport</li>
          <li>Sightseeing</li>
        </ul>
      </div>

      <div className="why-choose">
        <h2>Why Choose Royal Seats</h2>
        <ul>
          <li>Super Friendly Tour Manager throughout the Trip.</li>
          <li>Mouth Watering Indian Food included in the Trip.</li>
          <li>Amazing Attractions and Sightseeings in the Trip.</li>
        </ul>
      </div>

      <div className="price-details">
        <h2>Package Cost</h2>
        <table>
          <tbody>
            <tr>
              <td>Adult Cost</td>
              <td>₹ 99,999</td>
            </tr>
            <tr>
              <td>Child With Bed</td>
              <td>₹ 96,999</td>
            </tr>
            <tr>
              <td>Child No Bed</td>
              <td>₹ 90,999</td>
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


      <div className="tour-info">
        <h2>Tour Information</h2>
        <ul>
          <li>Round-trip Flights from Coimbatore with Air Arabia.</li>
          <li>4 nights’ accommodation with daily breakfast.</li>
          <li>Private Airport Transfers.</li>
          <li>Guided Dubai and Abu Dhabi Tours.</li>
          <li>Desert Safari with BBQ Dinner.</li>
          <li>Dhow Cruise with buffet dinner.</li>
          <li>Burj Khalifa Entry (124th Floor) & Dubai Mall visit.</li>
          <li>Dubai Frame and Global Village Entry.</li>
          <li>Private Yacht Experience.</li>
          <li>Dubai Visa and Taxes.</li>
        </ul>
      </div>

      <div className="additional-notes">
        <h2>Important Information</h2>
        <p>Reservation amount ₹ 25,000 (Non-Refundable)</p>
        <p>Only for online booking</p>
        <p>Optional Travel Insurance available</p>
      </div>
    </div>
  );
};

export default Dubaicovai;
