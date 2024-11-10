import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/group/Easteurope.css';

const images = [
  { src: '/group/easteurope/1.jpg', alt: 'Prague Castle' },
  { src: '/group/easteurope/2.jpg', alt: 'Budapest Parliament' },
  { src: '/group/easteurope/3.jpg', alt: 'Vienna Opera House' },
  { src: '/group/easteurope/4.jpg', alt: 'Auschwitz Memorial' },
  { src: '/group/easteurope/5.jpg', alt: 'Lake Bled' },
];

const itineraryDays = [
  {
    day: 'Day 1: Arrival in Prague',
    activities: [
      "Welcome to Prague! Arrive at Václav Havel Airport and transfer to your hotel.",
      "Meet & Greet by Tour Representative. Our representative will welcome you to the Czech Republic.",
      "Hotel Check-in. Settle into your hotel and enjoy your first evening in Prague.",
      "Evening at Leisure. Explore the local area at your own pace.",
    ],
  },
  {
    day: 'Day 2: Prague City Tour',
    activities: [
      "Breakfast at Hotel. Start the day with a delicious breakfast.",
      "Prague City Tour. Visit landmarks like Prague Castle, Charles Bridge, and the Old Town Square.",
      "Lunch at Local Restaurant. Enjoy a traditional Czech meal.",
      "Vltava River Cruise. Relax with a scenic boat ride along the Vltava River.",
      "Overnight Stay at Hotel. Rest and prepare for the next day's adventure.",
    ],
  },
  {
    day: 'Day 3: Travel to Vienna',
    activities: [
      "Breakfast at Hotel. Enjoy your meal before traveling to Vienna.",
      "Travel to Vienna. Scenic coach ride to the capital of Austria.",
      "Vienna City Tour. Visit the Schönbrunn Palace, St. Stephen’s Cathedral, and the Ringstrasse.",
      "Dinner at Local Restaurant. Savor Austrian specialties in a charming restaurant.",
      "Overnight Stay at Hotel. Relax in your Vienna hotel.",
    ],
  },
  {
    day: 'Day 4: Budapest City Tour',
    activities: [
      "Breakfast at Hotel. Enjoy a hearty breakfast before heading to Budapest.",
      "Travel to Budapest. Scenic journey to Hungary's capital.",
      "Budapest City Tour. Visit the Buda Castle, Parliament Building, and Fisherman’s Bastion.",
      "Lunch at Local Restaurant. Enjoy Hungarian cuisine.",
      "Evening Danube River Cruise. Cruise along the Danube with stunning views of the illuminated city.",
      "Overnight Stay at Hotel. Rest at your hotel in Budapest.",
    ],
  },
  {
    day: 'Day 5: Auschwitz Memorial',
    activities: [
      "Breakfast at Hotel. Start your day with breakfast.",
      "Travel to Auschwitz. Journey to the Auschwitz-Birkenau Memorial and Museum.",
      "Auschwitz Tour. Take a guided tour through the historical site, learning about its significance.",
      "Return to Budapest. Head back to Budapest for an evening at leisure.",
      "Overnight Stay at Hotel. Relax and unwind in Budapest.",
    ],
  },
  {
    day: 'Day 6: Bratislava Day Trip',
    activities: [
      "Breakfast at Hotel. Enjoy your breakfast before traveling to Slovakia.",
      "Day Trip to Bratislava. Explore the Old Town, Bratislava Castle, and the UFO Tower.",
      "Lunch in Bratislava. Enjoy a traditional Slovakian meal.",
      "Return to Budapest. After a full day of sightseeing, return to Budapest.",
      "Overnight Stay at Hotel. Rest for the night.",
    ],
  },
  {
    day: 'Day 7: Travel to Lake Bled',
    activities: [
      "Breakfast at Hotel. Breakfast at your hotel.",
      "Travel to Lake Bled. Scenic journey to the beautiful Lake Bled in Slovenia.",
      "Lake Bled Tour. Visit Bled Castle, take a traditional Pletna boat to Bled Island.",
      "Lunch by the Lake. Enjoy lunch with a view of the lake.",
      "Overnight Stay at Hotel. Enjoy the serene atmosphere of Lake Bled.",
    ],
  },
  {
    day: 'Day 8: Ljubljana City Tour',
    activities: [
      "Breakfast at Hotel. Start your day with a great breakfast.",
      "Travel to Ljubljana. Head to Slovenia’s charming capital.",
      "Ljubljana City Tour. Explore Ljubljana Castle, Triple Bridge, and the Old Town.",
      "Lunch at Local Restaurant. Enjoy traditional Slovenian dishes.",
      "Evening at Leisure. Spend your evening at your own pace in Ljubljana.",
      "Overnight Stay at Hotel. Rest and enjoy a peaceful night.",
    ],
  },
  {
    day: 'Day 9: Travel Back to Prague',
    activities: [
      "Breakfast at Hotel. Enjoy breakfast before departing for Prague.",
      "Travel Back to Prague. Return to the Czech capital after an enriching journey.",
      "Free Day in Prague. Enjoy your free day exploring Prague at your leisure.",
      "Overnight Stay at Hotel. Spend your last night in Prague.",
    ],
  },
  {
    day: 'Day 10: Departure',
    activities: [
      "Breakfast at Hotel. Enjoy your final breakfast in Prague.",
      "Hotel Check-Out. Complete your check-out and prepare for departure.",
      "Transfer to Airport. Head to Václav Havel Airport for your return flight.",
      "End of Tour. Thank you for joining us on this memorable journey through Eastern Europe!",
    ],
  },
];

const EastEurope = () => {
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
    <div className="easteurope-package-page">
      <h1>Eastern Europe Group Departure ex Chennai</h1>
      <p className="subheader">10 Days | Home / Eastern Europe / Eastern Europe Group Departure ex Chennai</p>
      <p className="location">5 Countries | Czech Republic | Austria | Hungary | Slovakia | Slovenia</p>
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
        <h2>5 Countries | Eastern Europe in this Tour</h2>
        <p>Czech Republic | Austria | Hungary | Slovakia | Slovenia</p>
      </div>

      {/* Tour Highlights */}
      <div className="tour-highlights">
        <h2>Exclusive Trip Highlights</h2>
        <ul>
          <li>Round-trip Flights from Chennai</li>
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
              <td>₹ 1,29,999</td>
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


      {/* Tour Information */}
      <div className="tour-info">
        <h2>Complete Tour Details</h2>
        <ul>
          <li>Round-trip Flights from Chennai</li>
          <li>09 nights’ luxury accommodation with daily breakfast</li>
          <li>Private Airport Transfers</li>
          <li>Guided City Tours</li>
          <li>Visit to UNESCO Sites</li>
          <li>Luxury Coach Travel</li>
          <li>All Entrance Fees Included</li>
        </ul>
      </div>

      {/* Additional Notes */}
      <div className="additional-notes">
        <h2>Important Information</h2>
        <p>Booking amount ₹ 30,000 (Non-Refundable)</p>
        <p>Limited Availability - Book Early</p>
        <p>Optional Travel Insurance available upon request</p>
      </div>
    </div>
  );
};

export default EastEurope;
