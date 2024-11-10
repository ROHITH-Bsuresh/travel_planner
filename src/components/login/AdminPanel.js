import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/login/adminpannel.css'; // Import CSS file

function AdminPanel() {
  const [groupTourData, setGroupTourData] = useState([]);
  const [volunteerData, setVolunteerData] = useState([]);
  const [expandedDetails, setExpandedDetails] = useState(null); // Manages expanded card details
  const [activeTab, setActiveTab] = useState(''); // State to manage active tab (group tour or volunteer)
  const [isEditing, setIsEditing] = useState(false); // State to manage edit mode
  const [updatedData, setUpdatedData] = useState({}); // For storing updated data in the form

  // Fetch Group Tour and Volunteer forms only when required
  const fetchGroupTourData = () => {
    axios.get('http://localhost:5002/api/get-billings')
      .then(response => setGroupTourData(response.data))
      .catch(error => console.error('Error fetching group tour data:', error));
  };

  const fetchVolunteerData = () => {
    axios.get('http://localhost:5001/api/get-volunteers')
      .then(response => setVolunteerData(response.data))
      .catch(error => console.error('Error fetching volunteer data:', error));
  };

  // Function to handle Group Tour card selection
  const handleGroupTourCardClick = () => {
    setActiveTab('groupTour'); // Set active tab to Group Tour
    fetchGroupTourData(); // Fetch Group Tour data
  };

  // Function to handle Volunteer card selection
  const handleVolunteerCardClick = () => {
    setActiveTab('volunteer'); // Set active tab to Volunteer
    fetchVolunteerData(); // Fetch Volunteer data
  };

  // Function to handle View Details button click for Group Tour
  const handleViewGroupTourDetails = (data) => {
    setExpandedDetails(data); // Set selected details to show in expanded view
    setUpdatedData(data); // Initialize the form with the current details
    setIsEditing(false); // Set to view mode initially
  };

  // Function to handle View Details button click for Volunteer
  const handleViewVolunteerDetails = (data) => {
    setExpandedDetails(data); // Set selected details to show in expanded view
    setUpdatedData(data); // Initialize the form with the current details
    setIsEditing(false); // Set to view mode initially
  };

  // Function to close the expanded details view
  const closeExpandedDetails = () => {
    setExpandedDetails(null); // Close the expanded details
  };

  // Update Group Tour details
  const handleUpdateGroupTour = (id, updatedData) => {
    axios.put(`http://localhost:5002/api/update-billing/${id}`, updatedData)
      .then(() => {
        fetchGroupTourData(); // Refresh the data after update
        setExpandedDetails(null); // Close the expanded view after update
        setIsEditing(false); // Switch back to view mode
      })
      .catch((error) => console.error('Error updating group tour:', error));
  };

  // Update Volunteer details
  const handleUpdateVolunteer = (id, updatedData) => {
    axios.put(`http://localhost:5001/api/update-volunteer/${id}`, updatedData)
      .then(() => {
        fetchVolunteerData(); // Refresh the data after update
        setExpandedDetails(null); // Close the expanded view after update
        setIsEditing(false); // Switch back to view mode
      })
      .catch((error) => console.error('Error updating volunteer:', error));
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle attendee form input change
  const handleAttendeeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAttendees = [...updatedData.attendees];
    updatedAttendees[index] = { ...updatedAttendees[index], [name]: value };
    setUpdatedData(prevState => ({
      ...prevState,
      attendees: updatedAttendees,
    }));
  };

  // Handle "Edit" button click
  const handleEditClick = () => {
    setIsEditing(true); // Switch to edit mode
  };

  // Delete Group Tour entry
  const handleDeleteGroupTour = (id) => {
    axios.delete(`http://localhost:5002/api/delete-billing/${id}`)
      .then(() => {
        fetchGroupTourData(); // Refresh the data after deletion
        setExpandedDetails(null); // Close the expanded view after deletion
      })
      .catch((error) => console.error('Error deleting group tour:', error));
  };

  // Delete Volunteer entry
  const handleDeleteVolunteer = (id) => {
    axios.delete(`http://localhost:5001/api/delete-volunteer/${id}`)
      .then(() => {
        fetchVolunteerData(); // Refresh the data after deletion
        setExpandedDetails(null); // Close the expanded view after deletion
      })
      .catch((error) => console.error('Error deleting volunteer:', error));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      {/* Cards for Group Tour and Volunteer forms */}
      <div className="card-container">
        <div onClick={handleGroupTourCardClick} className="card">
          <h3>View Group Tour Package</h3>
        </div>
        <div onClick={handleVolunteerCardClick} className="card">
          <h3>View Volunteer Form</h3>
        </div>
      </div>

      {/* Display Group Tour data if the active tab is Group Tour */}
      {activeTab === 'groupTour' && (
        <div className="card-display">
          {groupTourData.map((data, index) => (
            <div key={index} className="card">
              <h3>{data.firstName} {data.lastName}</h3>
              <p>Package: {data.package}</p>
              <p>Members: {data.attendees.length}</p>
              <button onClick={() => handleViewGroupTourDetails(data)} className="toggle-btn">
                View Details
              </button>
              <button onClick={() => handleDeleteGroupTour(data._id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Display Volunteer data if the active tab is Volunteer */}
      {activeTab === 'volunteer' && (
        <div className="card-display">
          {volunteerData.map((data, index) => (
            <div key={index} className="card">
              <h3>{data.name}</h3>
              <p>Email: {data.email}</p>
              <p>Contact: {data.contact}</p>
              <button onClick={() => handleViewVolunteerDetails(data)} className="toggle-btn">
                View Details
              </button>
              <button onClick={() => handleDeleteVolunteer(data._id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Render the expanded details in a separate card */}
      {expandedDetails && (
        <div className="expanded-card">
          <button className="close-btn" onClick={closeExpandedDetails}>X</button>

          {/* Conditional Rendering Based on Data Type */}
          {expandedDetails.package ? (
            // Group Tour Details - For Editing
            <div className="card">
              <h3>{expandedDetails.firstName} {expandedDetails.lastName}</h3>
              {isEditing ? (
                <div>
                  <div>
                    <label>Package:</label>
                    <input
                      type="text"
                      name="package"
                      value={updatedData.package || ''}
                      onChange={handleInputChange}
                      placeholder="Package"
                    />
                  </div>
                  <div>
                    <label>Country:</label>
                    <input
                      type="text"
                      name="country"
                      value={updatedData.country || ''}
                      onChange={handleInputChange}
                      placeholder="Country"
                    />
                  </div>
                  <div>
                    <label>Street Address:</label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={updatedData.streetAddress || ''}
                      onChange={handleInputChange}
                      placeholder="Street Address"
                    />
                  </div>
                  <div>
                    <label>City:</label>
                    <input
                      type="text"
                      name="city"
                      value={updatedData.city || ''}
                      onChange={handleInputChange}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label>State:</label>
                    <input
                      type="text"
                      name="state"
                      value={updatedData.state || ''}
                      onChange={handleInputChange}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label>Pincode:</label>
                    <input
                      type="text"
                      name="pinCode"
                      value={updatedData.pinCode || ''}
                      onChange={handleInputChange}
                      placeholder="Pincode"
                    />
                  </div>
                  <div>
                    <label>Phone:</label>
                    <input
                      type="text"
                      name="phone"
                      value={updatedData.phone || ''}
                      onChange={handleInputChange}
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={updatedData.email || ''}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label>Order Notes:</label>
                    <textarea
                      name="orderNotes"
                      value={updatedData.orderNotes || ''}
                      onChange={handleInputChange}
                      placeholder="Order Notes"
                    />
                  </div>
                  <div>
                    <label>Total Cost:</label>
                    <input
                      type="text"
                      name="totalCost"
                      value={updatedData.totalCost || ''}
                      onChange={handleInputChange}
                      placeholder="Total Cost"
                    />
                  </div>
                  <h4>Attendees:</h4>
                  {updatedData.attendees && updatedData.attendees.map((attendee, i) => (
                    <div key={i}>
                      <label>Name:</label>
                      <input
                        type="text"
                        name="firstName"
                        value={attendee.firstName || ''}
                        onChange={(e) => handleAttendeeChange(i, e)}
                        placeholder="Attendee First Name"
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={attendee.lastName || ''}
                        onChange={(e) => handleAttendeeChange(i, e)}
                        placeholder="Attendee Last Name"
                      />
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={attendee.email || ''}
                        onChange={(e) => handleAttendeeChange(i, e)}
                        placeholder="Attendee Email"
                      />
                      <label>Age:</label>
                      <input
                        type="number"
                        name="age"
                        value={attendee.age || ''}
                        onChange={(e) => handleAttendeeChange(i, e)}
                        placeholder="Attendee Age"
                      />
                      <label>Pricing:</label>
                      <input
                        type="text"
                        name="pricing"
                        value={attendee.pricing || ''}
                        onChange={(e) => handleAttendeeChange(i, e)}
                        placeholder="Attendee Pricing"
                      />
                    </div>
                  ))}
                  <button onClick={() => handleUpdateGroupTour(expandedDetails._id, updatedData)} className="update-btn">
                    Update Group Tour Details
                  </button>
                </div>
              ) : (
                // View Mode for Group Tour
                <div>
                  <p>Package: {expandedDetails.package}</p>
                  <p>Country: {expandedDetails.country}</p>
                  <p>Street Address: {expandedDetails.streetAddress}</p>
                  <p>City: {expandedDetails.city}</p>
                  <p>State: {expandedDetails.state}</p>
                  <p>Pincode: {expandedDetails.pinCode}</p>
                  <p>Phone: {expandedDetails.phone}</p>
                  <p>Email: {expandedDetails.email}</p>
                  <p>Order Notes: {expandedDetails.orderNotes}</p>
                  <p>Total Cost: ${expandedDetails.totalCost}</p>
                  <h4>Attendees:</h4>
                  {expandedDetails.attendees.map((attendee, i) => (
                    <div key={i}>
                      <p>Name: {attendee.firstName} {attendee.lastName}</p>
                      <p>Email: {attendee.email}</p>
                      <p>Age: {attendee.age}</p>
                      <p>Pricing: {attendee.pricing}</p>
                    </div>
                  ))}
                  <button onClick={handleEditClick} className="edit-btn">Edit</button>
                </div>
              )}
            </div>
          ) : (
            // Volunteer Details - For Editing (already included above)
            <div className="card">
              <h3>{expandedDetails.name}</h3>
              {isEditing ? (
                <div>
                  <div>
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={updatedData.name || ''}
                      onChange={handleInputChange}
                      placeholder="Volunteer Name"
                    />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={updatedData.email || ''}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label>Contact:</label>
                    <input
                      type="text"
                      name="contact"
                      value={updatedData.contact || ''}
                      onChange={handleInputChange}
                      placeholder="Contact"
                    />
                  </div>
                  <div>
                    <label>Location:</label>
                    <input
                      type="text"
                      name="location"
                      value={updatedData.location || ''}
                      onChange={handleInputChange}
                      placeholder="Location"
                    />
                  </div>
                  <div>
                    <label>Reason:</label>
                    <textarea
                      name="reason"
                      value={updatedData.reason || ''}
                      onChange={handleInputChange}
                      placeholder="Reason for volunteering"
                    />
                  </div>
                  <div>
                    <label>Availability:</label>
                    <input
                      type="text"
                      name="availability"
                      value={updatedData.availability || ''}
                      onChange={handleInputChange}
                      placeholder="Availability"
                    />
                  </div>
                  <button onClick={() => handleUpdateVolunteer(expandedDetails._id, updatedData)} className="update-btn">
                    Update Volunteer Details
                  </button>
                </div>
              ) : (
                <div>
                  <p>Email: {expandedDetails.email}</p>
                  <p>Contact: {expandedDetails.contact}</p>
                  <p>Location: {expandedDetails.location}</p>
                  <p>Reason: {expandedDetails.reason}</p>
                  <p>Availability: {expandedDetails.availability}</p>
                  <button onClick={handleEditClick} className="edit-btn">Edit</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
