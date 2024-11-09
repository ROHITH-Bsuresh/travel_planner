import React, { useState, useEffect } from 'react';
import '../../styles/group/Bill.css';

// Pricing data for each package
const pricingData = {
    "Dubai New Year Group Departure ex Chennai": {
        adult: 99999,
        childWithBed: 96999,
        childNoBed: 90999
    },
    "Dubai New Year Group Departure ex Coimbatore": {
        adult: 99999,
        childWithBed: 96999,
        childNoBed: 90999
    },
    "Europe Grand Tour Group Departure ex Chennai": {
        adult: 149999,
        childWithBed: 139999,
        childNoBed: 120999
    },
    "Eastern Europe Group Departure ex Chennai": {
        adult: 149999,
        childWithBed: 129999,
        childNoBed: 109999
    },
    "Scenic UK Group Tour ex Chennai": {
        adult: 274999,
        childWithBed: 239999,
        childNoBed: 204999
    },
    "Malaysia and Singapore Group Departure ex Chennai": {
        adult: 99999,
        childWithBed: 94999,
        childNoBed: 89999
    },
    "Blissful Baku Group Tour ex Chennai": {
        adult: 79999,
        childWithBed: 73500,
        childNoBed: 63499
    },
    "Remarkable Turkey Group Tour ex Chennai": {
        adult: 164999,
        childWithBed: 148999,
        childNoBed: 137500
    }
};

const Bill = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        package: '',
        country: '',
        streetAddress: '',
        apartment: '',
        city: '',
        state: '',
        pinCode: '',
        phone: '',
        email: '',
        orderNotes: '',
        attendees: [{ firstName: '', lastName: '', email: '', dob: '', gender: '', age: '', pricing: '' }],
        totalCost: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAttendeeChange = (index, e) => {
        const { name, value } = e.target;
        const newAttendees = [...formData.attendees];
        newAttendees[index][name] = value;

        if (name === 'dob') {
            const dob = new Date(value);
            const age = new Date().getFullYear() - dob.getFullYear();
            newAttendees[index].age = age;
        }

        setFormData(prev => ({
            ...prev,
            attendees: newAttendees,
        }));
    };

    const handlePricingChange = (index, e) => {
        const { value } = e.target;
        const newAttendees = [...formData.attendees];
        newAttendees[index].pricing = value;
        setFormData(prev => ({
            ...prev,
            attendees: newAttendees,
        }));
        updateTotalCost();
    };

    const addAttendee = () => {
        setFormData(prev => ({
            ...prev,
            attendees: [...prev.attendees, { firstName: '', lastName: '', email: '', dob: '', gender: '', age: '', pricing: '' }],
        }));
    };

    const updateTotalCost = () => {
        let total = 0;
        formData.attendees.forEach((attendee) => {
            if (attendee.pricing && pricingData[formData.package]) {
                total += pricingData[formData.package][attendee.pricing];
            }
        });
        setFormData(prev => ({
            ...prev,
            totalCost: total
        }));
    };

    useEffect(() => {
        // Recalculate total cost when package or attendee changes
        updateTotalCost();
    }, [formData.attendees, formData.package]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/submit-bill', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
            } else {
                console.error('Form submission failed');
                alert('There was a problem submitting the form.');
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('Network error. Please try again later.');
        }
    };

    return (
        <div className="billing-form-container">
            <h2>Billing Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <label>First Name *</label>
                    <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />

                    <label>Last Name *</label>
                    <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />

                    <label>Company Name (optional)</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />

                    <label>Package</label>
                    <select name="package" value={formData.package} onChange={handleChange}>
                        <option value="">Select Package</option>
                        {Object.keys(pricingData).map((packageName) => (
                            <option key={packageName} value={packageName}>
                                {packageName}
                            </option>
                        ))}
                    </select>

                    <label>Country / Region *</label>
                    <input type="text" name="country" required value={formData.country} onChange={handleChange} />

                    <label>Street Address *</label>
                    <input type="text" name="streetAddress" required value={formData.streetAddress} onChange={handleChange} />

                    <label>Apartment, suite, etc. (optional)</label>
                    <input type="text" name="apartment" value={formData.apartment} onChange={handleChange} />

                    <label>Town / City *</label>
                    <input type="text" name="city" required value={formData.city} onChange={handleChange} />

                    <label>State *</label>
                    <input type="text" name="state" required value={formData.state} onChange={handleChange} />

                    <label>PIN Code *</label>
                    <input type="text" name="pinCode" required value={formData.pinCode} onChange={handleChange} />

                    <label>Phone *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />

                    <label>Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} />

                    <label>Order Notes (optional)</label>
                    <textarea name="orderNotes" value={formData.orderNotes} onChange={handleChange} />
                </div>

                <h3>Attendees Info</h3>
                {formData.attendees.map((attendee, index) => (
                    <div key={index} className="attendee-section">
                        <h4>Passenger {index + 1}</h4>
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={attendee.firstName}
                            onChange={(e) => handleAttendeeChange(index, e)}
                        />
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={attendee.lastName}
                            onChange={(e) => handleAttendeeChange(index, e)}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={attendee.email}
                            onChange={(e) => handleAttendeeChange(index, e)}
                        />
                        <label>Date of Birth *</label>
                        <input
                            type="date"
                            name="dob"
                            required
                            value={attendee.dob}
                            onChange={(e) => handleAttendeeChange(index, e)}
                        />
                        <label>Age</label>
                        <input
                            type="number"
                            value={attendee.age}
                            readOnly
                            className="age-field"
                        />
                        <label>Category</label>
                        <select
                            name="pricing"
                            value={attendee.pricing}
                            onChange={(e) => handlePricingChange(index, e)}
                        >
                            <option value="">Select Pricing</option>
                            {attendee.age < 10 ? (
                                <>
                                    <option value="childWithBed">Child With Bed</option>
                                    <option value="childNoBed">Child No Bed</option>
                                </>
                            ) : (
                                <>
                                    <option value="adult">Adult</option>
                                    <option value="childWithBed">Child With Bed</option>
                                    <option value="childNoBed">Child No Bed</option>
                                </>
                            )}
                        </select>

                        <label>Gender</label>
                        <select
                            name="gender"
                            value={attendee.gender}
                            onChange={(e) => handleAttendeeChange(index, e)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                ))}
                <button type="button" onClick={addAttendee} className="add-attendee-btn">Add Another Attendee</button>

                {/* Total Cost Display */}
                <h4>Total Cost: ₹{formData.totalCost}</h4>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Bill;
