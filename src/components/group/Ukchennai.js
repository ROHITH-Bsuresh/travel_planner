import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/group/Ukchennai.css';

const images = [
  { src: '/group/uk/1.jpg', alt: 'Big Ben' },
  { src: '/group/uk/2.jpg', alt: 'Edinburgh Castle' },
  { src: '/group/uk/3.jpg', alt: 'London Eye' },
  { src: '/group/uk/4.jpg', alt: 'Lake District' },
  { src: '/group/uk/5.jpg', alt: 'Tower of London' },
];

const itineraryDays = [
  {
    day: 'Day 1: Arrival in London',
    activities: [
      "Arrive in London and transfer to the hotel.",
      "Welcome dinner and orientation with the tour guide.",
      "Overnight stay at the hotel in London."
    ],
  },
  {
    day: 'Day 2: London City Tour',
    activities: [
      "Breakfast at the hotel.",
      "Visit iconic sites: Big Ben, the Houses of Parliament, and Westminster Abbey.",
      "Thames River Cruise for panoramic views of the city.",
      "Tour the British Museum and enjoy lunch nearby.",
      "Evening at the West End for a musical (optional).",
      "Overnight stay at the hotel."
    ],
  },
  {
    day: 'Day 3: Windsor & Oxford Day Trip',
    activities: [
      "Breakfast at the hotel.",
      "Visit Windsor Castle, the official residence of the Queen.",
      "Explore the university city of Oxford and its historic colleges.",
      "Lunch at a traditional English pub.",
      "Return to London for an overnight stay."
    ],
  },
  {
    day: 'Day 4: London to Cardiff, Wales',
    activities: [
      "Breakfast at the hotel and check-out.",
      "Travel to Cardiff, the capital of Wales.",
      "Guided tour of Cardiff Castle and the National Museum Cardiff.",
      "Lunch and shopping at Cardiff Bay.",
      "Overnight stay at the hotel in Cardiff."
    ],
  },
  {
    day: 'Day 5: Cardiff to Bath & Stonehenge',
    activities: [
      "Breakfast at the hotel.",
      "Drive to Bath and explore the Roman Baths and Georgian architecture.",
      "Lunch in Bath, followed by a visit to the mystical Stonehenge.",
      "Return to Cardiff for an overnight stay."
    ],
  },
  {
    day: 'Day 6: Cardiff to Edinburgh, Scotland',
    activities: [
      "Breakfast at the hotel and check-out.",
      "Fly to Edinburgh, the capital of Scotland.",
      "Check into the hotel and enjoy a scenic drive through Edinburgh.",
      "Visit Edinburgh Castle and the Royal Mile.",
      "Dinner and overnight stay at the hotel in Edinburgh."
    ],
  },
  {
    day: 'Day 7: Edinburgh & Loch Ness Day Trip',
    activities: [
      "Breakfast at the hotel.",
      "Full-day trip to Loch Ness and the Scottish Highlands.",
      "Enjoy scenic views and stop at famous landmarks, including Urquhart Castle.",
      "Lunch by Loch Ness with opportunities to spot 'Nessie.'",
      "Return to Edinburgh for an overnight stay."
    ],
  },
  {
    day: 'Day 8: Edinburgh to Lake District, England',
    activities: [
      "Breakfast at the hotel and check-out.",
      "Drive to the beautiful Lake District in England.",
      "Enjoy a scenic boat ride on Lake Windermere.",
      "Explore charming villages like Ambleside and Grasmere.",
      "Overnight stay at a local hotel in the Lake District."
    ],
  },
  {
    day: 'Day 9: Lake District to Manchester',
    activities: [
      "Breakfast at the hotel and check-out.",
      "Travel to Manchester and take a guided city tour.",
      "Visit the Manchester Cathedral, Museum of Science and Industry.",
      "Lunch in the city center and free time for shopping.",
      "Overnight stay at the hotel in Manchester."
    ],
  },
  {
    day: 'Day 10: Departure from Manchester',
    activities: [
      "Breakfast at the hotel and check-out.",
      "Transfer to Manchester Airport for the return flight.",
      "End of the UK Grand Tour. Thank you for joining us!"
    ],
  },
];

const Ukchennai = () => {
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
    <div className="uk-package-page">
      <h1>UK Grand Tour Group Departure ex Chennai</h1>
      <p className="subheader">10 Days | Home / UK / UK Grand Tour Group Departure ex Chennai</p>
      <p className="location">England | Scotland | Wales</p>
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
      <h1 className="cost">₹ 1,59,999</h1>
      <p className="per-person">per person on twin sharing</p>
      <button className="book-now" onClick={handleReserveSpot}>Reserve Your Spot</button>
      <p className="departure-info">1 departure available</p>

      {/* Cities Visited Section */}
      <div className="cities-visited">
        <h2>Countries in this Tour</h2>
        <p>England | Scotland | Wales</p>
      </div>

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

      {/* Why Choose Royal Seats Section */}
      <div className="why-choose">
        <h2>Why Choose Royal Seats</h2>
        <ul>
          <li>Dedicated Tour Manager for your comfort and enjoyment.</li>
          <li>Handpicked meals and dining experiences.</li>
          <li>Curated attractions and activities.</li>
        </ul>
      </div>

      {/* Price Details */}
      <div className="price-details">
        <h2>Pricing</h2>
        <table>
          <tbody>
            <tr>
              <td>Adult</td>
              <td>₹ 1,59,999</td>
            </tr>
            <tr>
              <td>Child With Bed</td>
              <td>₹ 1,49,999</td>
            </tr>
            <tr>
              <td>Child No Bed</td>
              <td>₹ 1,30,999</td>
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

export default Ukchennai;
