import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../styles/group/Europechennai.css';

const images = [
  { src: '/group/europe/1.jpg', alt: 'Eiffel Tower' },
  { src: '/group/europe/2.jpg', alt: 'Colosseum' },
  { src: '/group/europe/3.jpg', alt: 'Venice' },
  { src: '/group/europe/4.jpg', alt: 'Swiss Alps' },
  { src: '/group/europe/5.jpg', alt: 'Paris Skyline' },
];

const itineraryDays = [
  {
    day: 'Day 1: Arrival in Paris',
    activities: [
      "Welcome to Paris. Arrive at Charles de Gaulle Airport and enjoy a warm welcome.",
      "Transfer to Hotel. Check-in and relax after your journey.",
      "Evening Seine River Cruise. Enjoy a scenic boat ride along the Seine River with stunning views of Paris landmarks.",
      "Overnight Stay at Hotel. Rest comfortably in a luxurious room."
    ],
  },
  {
    day: 'Day 2: Paris City Tour',
    activities: [
      "Breakfast at Hotel. Start your day with a delightful breakfast.",
      "Eiffel Tower Visit. Explore the iconic Eiffel Tower and enjoy panoramic views of the city.",
      "Lunch at Local Restaurant. Enjoy a delicious meal at a Parisian restaurant.",
      "Louvre Museum Tour. Visit the famous Louvre Museum and see world-renowned artworks.",
      "Dinner at Local Restaurant. Savor exquisite French cuisine.",
      "Overnight Stay at Hotel. Relax and recharge."
    ],
  },
  {
    day: 'Day 3: Day Trip to Versailles',
    activities: [
      "Breakfast at Hotel. Enjoy a hearty breakfast.",
      "Versailles Palace Tour. Explore the grandiose Versailles Palace and its beautiful gardens.",
      "Lunch. Enjoy lunch near the Palace of Versailles.",
      "Return to Paris. Head back to Paris in the evening.",
      "Overnight Stay at Hotel. Rest in your comfortable room."
    ],
  },
  {
    day: 'Day 4: Travel to Rome',
    activities: [
      "Breakfast at Hotel. Begin the day with a delicious breakfast.",
      "Flight to Rome. Transfer to the airport for your flight to Rome.",
      "Arrival in Rome. Arrive in Rome and check-in to your hotel.",
      "Evening at Leisure. Enjoy the evening exploring Rome at your own pace.",
      "Overnight Stay at Hotel. Rest after your journey."
    ],
  },
  {
    day: 'Day 5: Rome City Tour',
    activities: [
      "Breakfast at Hotel. Start your day with a filling breakfast.",
      "Colosseum Tour. Explore the ancient Colosseum and learn about its history.",
      "Lunch at Local Restaurant. Enjoy a traditional Italian meal.",
      "Roman Forum & Pantheon. Visit the Roman Forum and Pantheon for a glimpse into ancient Rome.",
      "Dinner at Italian Restaurant. Indulge in authentic Italian cuisine.",
      "Overnight Stay at Hotel. Return to your hotel for a restful night."
    ],
  },
  {
    day: 'Day 6: Vatican City Tour',
    activities: [
      "Breakfast at Hotel. Enjoy your morning meal.",
      "Vatican Museums & Sistine Chapel. Visit the Vatican Museums and the breathtaking Sistine Chapel.",
      "St. Peter\'s Basilica. Explore St. Peter\'s Basilica, the heart of the Vatican.",
      "Lunch at Local Restaurant. Savor traditional Roman dishes.",
      "Evening at Leisure. Explore the city or relax.",
      "Overnight Stay at Hotel."
    ],
  },
  {
    day: 'Day 7: Travel to Venice',
    activities: [
      "Breakfast at Hotel. Enjoy a relaxed breakfast.",
      "Travel to Venice. Head to Venice via train or flight.",
      "Gondola Ride. Experience Venice’s canals with a scenic gondola ride.",
      "Lunch by the Grand Canal. Enjoy a meal overlooking the beautiful canals.",
      "Evening at Leisure. Explore the charming streets of Venice.",
      "Overnight Stay at Hotel."
    ],
  },
  {
    day: 'Day 8: Venice Sightseeing',
    activities: [
      "Breakfast at Hotel.",
      "St. Mark\'s Basilica & Doge\'s Palace. Visit the historical St. Mark\'s Basilica and Doge’s Palace.",
      "Lunch at Local Restaurant. Enjoy Venetian delicacies.",
      "Explore Rialto Bridge. Walk through the famous Rialto Bridge and its surrounding markets.",
      "Dinner in Venice. Enjoy Italian cuisine in a traditional restaurant.",
      "Overnight Stay at Hotel."
    ],
  },
  {
    day: 'Day 9: Travel to Zurich',
    activities: [
      "Breakfast at Hotel.",
      "Train to Zurich. Travel to Zurich, Switzerland, by train.",
      "Swiss Alps Day Tour. Take a scenic tour of the Swiss Alps, with breathtaking views.",
      "Lunch in the Alps. Enjoy a hearty meal with a view of the mountains.",
      "Evening at Leisure. Explore Zurich or relax.",
      "Overnight Stay at Hotel."
    ],
  },
  {
    day: 'Day 10: Departure from Zurich',
    activities: [
      "Breakfast at Hotel. Enjoy your last breakfast in Europe.",
      "Check-Out from Hotel. Prepare for check-out and departure.",
      "Transfer to Zurich Airport. Head to Zurich Airport for your flight back.",
      "End of Tour. Thank you for joining us, and we hope to see you again!"
    ],
  },
];

const EuropeChennai = () => {
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
      <h1>Europe Grand Tour Group Departure ex Chennai</h1>
      <p className="subheader">10 Days | Home / Europe / Europe Grand Tour Group Departure ex Chennai</p>
      <p className="location">4 Countries | France | Italy | Switzerland | Vatican</p>
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
      <h1 className="cost">₹ 1,49,999</h1>
      <p className="per-person">per person on twin sharing</p>
      <button className="book-now" onClick={handleReserveSpot}>Reserve Your Spot</button>
      <p className="departure-info">1 departure available</p>

      {/* Cities Visited Section */}
      <div className="cities-visited">
        <h2>4 Countries in this Tour</h2>
        <p>France | Italy | Switzerland | Vatican</p>
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
              <td>₹ 1,49,999</td>
            </tr>
            <tr>
              <td>Child With Bed</td>
              <td>₹ 1,39,999</td>
            </tr>
            <tr>
              <td>Child No Bed</td>
              <td>₹ 1,20,999</td>
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
          <li>Price is subject to change based on availability.</li>
        </ul>
      </div>
    </div>
  );
};

export default EuropeChennai;
