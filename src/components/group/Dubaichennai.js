import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../styles/group/Dubaichennai.css';

const images = [
  { src: '/group/dubai1/1.jpg', alt: 'Dubai Skyline' },
  { src: '/group/dubai1/2.jpg', alt: 'Burj Khalifa' },
  { src: '/group/dubai1/3.jpg', alt: 'Desert Safari' },
  { src: '/group/dubai1/4.jpg', alt: 'Dubai Mall' },
  { src: '/group/dubai1/5.jpg', alt: 'Sheikh Zayed Grand Mosque' },
];

const itineraryDays = [
  {
    day: 'Day 1: Arrival at Sharjah Airport',
    activities: [
      "Welcome to Sharjah Airport. Begin your UAE journey with a warm welcome at Sharjah Airport, enjoying duty-free shopping and dining options before starting your adventure.",
      "Meet & Greet by Tour Representative. Our representative will assist you upon arrival, ensuring a smooth start to your trip and answering any questions.",
      "Breakfast Options. Choose from a variety of continental and cooked items in a relaxed dining area.",
      "Transfer to Hotel. Check-in to your hotel (Standard Check-in time: 15:00 hrs). Start your stay with comfort and convenience.",
      "Evening Dhow Cruise with Buffet Dinner. Enjoy an evening on a traditional dhow cruise with a buffet dinner, scenic views, and delightful ambiance on board.",
      "Overnight Stay at Hotel. Rest in a comfortable and luxurious room."
    ],
  },
  {
    day: 'Day 2: Dubai Frame & Desert Safari',
    activities: [
      "Morning Breakfast at Hotel. Start your day with a variety of breakfast options at the hotel.",
      "Visit Dubai Frame. Explore the iconic Dubai Frame and experience panoramic views of the city, showcasing Dubai’s past, present, and future.",
      "Lunch. Enjoy lunch at a local restaurant.",
      "Desert Safari with BBQ Dinner. Embark on a thrilling desert safari with activities like sandboarding and camel rides. End the day with a BBQ dinner under the stars, along with cultural performances.",
      "Overnight Stay at Hotel. Relax and recharge in a comfortable room."
    ],
  },
  {
    day: 'Day 3: Dubai City Tour, Burj Khalifa & Private Yacht',
    activities: [
      "Morning Breakfast at Hotel. A delightful breakfast awaits you to start the day.",
      "Dubai City Tour. Explore Dubai’s iconic landmarks, including the Burj Khalifa, Dubai Mall, and Palm Jumeirah.",
      "Lunch at Indian Restaurant. Savor a delicious Indian lunch.",
      "Burj Khalifa (124th Floor). Visit the top of Burj Khalifa and marvel at stunning views of the city.",
      "Private Yacht Experience. Indulge in luxury on a private yacht with exclusive views and personalized service.",
      "Dinner at Indian Restaurant. Enjoy a delicious Indian dinner to end your day.",
      "Overnight Stay at Hotel. Settle in for a restful night in your cozy room."
    ],
  },
  {
    day: 'Day 4: Abu Dhabi City Tour & Global Village',
    activities: [
      "Morning Breakfast at Hotel. Start your day with a hearty breakfast.",
      "Abu Dhabi City Tour. Discover the capital of the UAE with visits to the Sheikh Zayed Grand Mosque, Emirates Palace, and other cultural landmarks.",
      "Lunch at Local Restaurant. Enjoy lunch at a popular local eatery.",
      "Visit Global Village. Experience the vibrant culture and shopping at Global Village.",
      "Dinner at Global Village. Savor a variety of international cuisines.",
      "Return to Hotel. Head back for a restful night at the hotel."
    ],
  },
  {
    day: 'Day 5: Departure',
    activities: [
      "Morning Breakfast at Hotel. Enjoy your last breakfast in Dubai.",
      "Check-Out from Hotel. Complete your check-out process and prepare for departure.",
      "Transfer to Sharjah Airport. Head to the airport for your return flight.",
      "End of Tour. Thank you for joining us, and we hope to see you again!"
    ],
  },
];

const DubaiChennai = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentImage, setCurrentImage] = useState(images[0].src); // Set initial image

  const toggleDay = (index) => {
    setSelectedDay(selectedDay === index ? null : index);
  };

  const handleThumbnailClick = (imageSrc) => {
    setCurrentImage(imageSrc); // Update the larger image
  };

  const handleReserveSpot = () => {
    navigate('/bill'); // Navigate to bill.js
  };

  return (
    <div className="dubai-package-page">
      <h1>Dubai New Year Group Departure ex Chennai</h1>
      <p className="subheader">5 Days | Home / Dubai / Dubai New Year Group Departure ex Chennai</p>
      <p className="location">3 Cities | UAE - Sharjah | Abu Dhabi | Dubai</p>
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
      <h1 className="cost">₹ 99,999</h1>
      <p className="per-person">per person on twin sharing</p>
      <button className="book-now" onClick={handleReserveSpot}>Reserve Your Spot</button>
      <p className="departure-info">1 departure available</p>

      {/* Cities Visited Section */}
      <div className="cities-visited">
        <h2>3 Cities | UAE in this Tour</h2>
        <p>Sharjah | Abu Dhabi | Dubai</p>
      </div>

      {/* Tour Highlights */}
      <div className="tour-highlights">
        <h2>Exclusive Trip Highlights</h2>
        <ul>
          <li>Flight (Round-trip from Chennai)</li>
          <li>All Visa Arrangements</li>
          <li>Luxury Hotel Accommodation</li>
          <li>Daily Gourmet Meals</li>
          <li>Private Transport</li>
          <li>Iconic Sightseeing</li>
        </ul>
      </div>

      {/* Why Choose Royal Seats Section */}
      <div className="why-choose">
        <h2>Why Choose Royal Seats</h2>
        <ul>
          <li>Expert Tour Manager dedicated to your comfort and enjoyment.</li>
          <li>Handpicked meals and exclusive dining experiences.</li>
          <li>Unforgettable attractions and activities curated just for you.</li>
        </ul>
      </div>

      {/* Price Details */}
      <div className="price-details">
        <h2>Pricing</h2>
        <table>
          <tbody>
            <tr>
              <td>Adult</td>
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



      {/* Tour Information */}
      <div className="tour-info">
        <h2>Complete Tour Details</h2>
        <ul>
          <li>Round-trip Flights from Chennai</li>
          <li>04 nights’ luxury accommodation with daily breakfast</li>
          <li>Private Airport Transfers</li>
          <li>Guided Dubai City Tour</li>
          <li>Desert Safari with premium BBQ and live performances</li>
          <li>Dhow Cruise with buffet dinner</li>
          <li>Burj Khalifa (124th Floor) and Dubai Mall visit</li>
          <li>Abu Dhabi Grand Mosque visit</li>
          <li>Dubai Frame and Global Village Entry</li>
          <li>2-hour Private Yacht Experience</li>
          <li>Dubai Visa and Taxes</li>
        </ul>
      </div>

      {/* Additional Notes */}
      <div className="additional-notes">
        <h2>Important Information</h2>
        <p>Booking amount ₹ 25,000 (Non-Refundable)</p>
        <p>Limited Availability - Book Early</p>
        <p>Optional Travel Insurance available upon request</p>
      </div>
    </div>
  );
};

export default DubaiChennai;
