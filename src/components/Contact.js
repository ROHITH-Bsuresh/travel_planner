import React from 'react';
import '../styles/Contact.css'; // Make sure this path is correct

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-details">
                <h2>Contact Information</h2>
                <p><strong>Phone:</strong> +1 (234) 567-8900</p>
                <p><strong>Landline:</strong> +1 (234) 567-8901</p>
                <p><strong>Email:</strong> info@yourcompany.com</p>
            </div>

            <div className="social-media">
                <h2>Follow Us</h2>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
