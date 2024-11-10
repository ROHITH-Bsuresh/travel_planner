// Volunteer.js (Frontend)
import React, { useState } from 'react';
import '../../styles/activities/Volunteer.css';

const VolunteerPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    location: '',
    reason: '',
  });

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:5001/api/volunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Application submitted successfully!');
            closeForm();
        } else {
            alert('Error submitting the application');
        }
    } catch (error) {
        alert('Error submitting the application');
    }
};


  return (
    <div className="volunteer-page">
      <header className="volunteer-header">
        <h1>Volunteer With Us</h1>
        <p>Make a difference while exploring new places and cultures!</p>
      </header>

      {/* Introduction Section */}
      <section className="volunteer-intro">
        <h2>Why Volunteer?</h2>
        <p>
          Volunteering is a great way to give back to the community, learn new skills, and make lifelong friends. Join us and experience the joy of helping others while immersing yourself in vibrant local cultures. Everyone wants to explore the world, expand their minds, and discover new cultures. We learn so much about ourselves and life while experiencing different places. Travelling can help us develop in wonderful ways. However, travelling is not always everything it’s cracked up to be. It can be tough.
        </p>
      </section>

      {/* Volunteer Activities Section */}
      <section className="activities-section">
        <h2>Our Volunteer Activities</h2>
        <div className="activity-card">
          <h3>Teaching English</h3>
          <p>Help locals improve their English language skills, opening doors to new opportunities.</p>
        </div>
        <div className="activity-card">
          <h3>Environmental Conservation</h3>
          <p>Participate in beach clean-ups, tree planting, and other eco-friendly initiatives.</p>
        </div>
        <div className="activity-card">
          <h3>Healthcare Support</h3>
          <p>Assist medical staff in rural areas by supporting healthcare initiatives.</p>
        </div>
        <div className="activity-card">
          <h3>Other Activities</h3>
          <p>Others such as wall artist, photographer, video editing, content creator.</p>
        </div>
      </section>

      {/* Volunteer Packages Section */}
      <section className="packages-section">
  <h2>Volunteer Packages</h2>
  <div className="card-container">
    {/* Volunteer Cards */}
    <div className="card">
      <img src="vol-tamil.jpeg" alt="Volunteer in Tamil Nadu" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Volunteer in Tamil Nadu</h5>
        <p className="card-text">Stay with locals and support community projects in Tamil Nadu.</p>
        <p><strong>Duration:</strong> 2 weeks</p>
        <p><strong>Skill Required:</strong> Basic English, teaching or community outreach skills</p>
        <p><strong>Description:</strong> Work with local schools to support educational programs and community development.</p>
        <p><strong>Important Note:</strong> You cannot participate as a team. We have already fixed the teams on our side.</p>
        <p><strong>Accommodation:</strong> Includes all expenses, ranging from ₹8,000.</p>
        <p><strong>About Royal Seats:</strong> Royal Seats offers unique volunteer travel experiences that blend cultural immersion with social impact. Join us to make a difference while exploring new places!</p>
        <button onClick={openForm} className="apply-button">Apply Now</button>
      </div>
    </div>

    <div className="card">
      <img src="vol-kerala.avif" alt="Volunteer in Kerala" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Volunteer in Kerala</h5>
        <p className="card-text">Experience Kerala’s culture and contribute to local causes.</p>
        <p><strong>Duration:</strong> 3 weeks</p>
        <p><strong>Skill Required:</strong> Environmental awareness, basic conservation techniques</p>
        <p><strong>Description:</strong> Engage in environmental conservation projects, including beach clean-ups and tree planting initiatives.</p>
        <p><strong>Important Note:</strong> You cannot participate as a team. We have already fixed the teams on our side.</p>
        <p><strong>Accommodation:</strong> Includes all expenses, ranging from ₹10,000.</p>
        <p><strong>About Royal Seats:</strong> Royal Seats offers curated volunteer experiences that allow you to explore the beauty of nature and culture while giving back to communities. Join us on a transformative journey.</p>
        <button onClick={openForm} className="apply-button">Apply Now</button>
      </div>
    </div>

    <div className="card">
      <img src="vol-raja.jpeg" alt="Volunteer in Rajasthan" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Volunteer in Rajasthan</h5>
        <p className="card-text">Experience the vibrant culture of Rajasthan while helping local artisans.</p>
        <p><strong>Duration:</strong> 4 weeks</p>
        <p><strong>Skill Required:</strong> Craftsmanship, communication skills</p>
        <p><strong>Description:</strong> Support artisans in promoting traditional crafts and engage in community-based tourism initiatives.</p>
        <p><strong>Important Note:</strong> You cannot participate as a team. We have already fixed the teams on our side.</p>
        <p><strong>Accommodation:</strong> Includes all expenses, ranging from ₹15,000.</p>
        <p><strong>About Royal Seats:</strong> With Royal Seats, you can contribute to community development while experiencing the rich heritage of Rajasthan. Join us in supporting local artisans and preserving traditions.</p>
        <button onClick={openForm} className="apply-button">Apply Now</button>
      </div>
    </div>

    <div className="card">
      <img src="vol-raja.jpeg" alt="Volunteer in Rajasthan" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Volunteer in Rajasthan</h5>
        <p className="card-text">Support local community development projects and promote sustainable tourism.</p>
        <p><strong>Duration:</strong> 3 weeks</p>
        <p><strong>Skill Required:</strong> Community development, basic project management</p>
        <p><strong>Description:</strong> Work on projects aimed at improving local infrastructure and promoting responsible tourism.</p>
        <p><strong>Important Note:</strong> You cannot participate as a team. We have already fixed the teams on our side.</p>
        <p><strong>Accommodation:</strong> Includes all expenses, ranging from ₹12,000.</p>
        <p><strong>About Royal Seats:</strong> With Royal Seats, you'll not only experience Rajasthan’s majestic landscapes but also actively contribute to the betterment of local communities. Volunteer with us for an enriching experience.</p>
        <button onClick={openForm} className="apply-button">Apply Now</button>
      </div>
    </div>

    <div className="card">
      <img src="vol-maha.jpeg" alt="Volunteer in Maharashtra" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Volunteer in Maharashtra</h5>
        <p className="card-text">Engage with rural communities in Maharashtra through educational programs.</p>
        <p><strong>Duration:</strong> 2 weeks</p>
        <p><strong>Skill Required:</strong> Teaching, basic leadership</p>
        <p><strong>Description:</strong> Conduct workshops for children and support community-based educational initiatives.</p>
        <p><strong>Important Note:</strong> You cannot participate as a team. We have already fixed the teams on our side.</p>
        <p><strong>Accommodation:</strong> Includes all expenses, ranging from ₹9,000.</p>
        <p><strong>About Royal Seats:</strong> Royal Seats is dedicated to creating life-changing travel experiences, combining education, adventure, and volunteerism to leave a lasting impact. Join us in Maharashtra for an unforgettable journey!</p>
        <button onClick={openForm} className="apply-button">Apply Now</button>
      </div>
    </div>
  </div>
</section>


      {/* Form Section */}
      {isFormOpen && (
        <div className="form-modal">
          <div className="form-container">
            <h2>Volunteer Application Form</h2>
            <button onClick={closeForm} className="close-button">X</button>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              <br />

              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <br />

              <label>Contact Number:</label>
              <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
              <br />

              <label>Preferred Volunteer Location:</label>
<select
    name="location"
    value={formData.location}
    onChange={handleChange}
    required
>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Kerala">Kerala</option>
    <option value="Jammu">Jammu</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Assam">Assam</option>
    <option value="Maharashtra">Maharashtra</option>
</select>

              <br />

              <label>Why do you want to volunteer?</label>
              <textarea name="reason" value={formData.reason} onChange={handleChange} required />
              <br />

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerPage;
