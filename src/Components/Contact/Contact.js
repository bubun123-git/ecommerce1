import React, { useState } from 'react';
import axios from 'axios';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
        };

        try {
            const response = await axios.post(
                'https://ecommerce-e1b1e-default-rtdb.firebaseio.com/contactForm.json',
                formData, // Just pass the formData directly
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log('Response Data:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form className="about-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    className="form-control"
                />
            </div> <br/>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default Contact;
    