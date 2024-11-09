import React from 'react';
import '../styles/Contact.css'; // Ensure this path is correct

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-details">
                <h2>Contact Information</h2>
                <p><strong>Address:</strong> 123 Explorer's Lane, Heritage Street, Coimbatore, Tamil Nadu, 641001, India</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Email:</strong> support@travelplanner.com</p>
            </div>

            <div className="social-media">
                <h2>Follow Us</h2>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </li>
                </ul>
            </div>

            <div className="support-hours">
                <h2>Customer Support Hours</h2>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
        </div>
    );
};

export default Contact;