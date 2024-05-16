import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css'
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
        const response = await axios.post('http://localhost:4000/api/submit', {
            name,
            email,
            subject,
            message,
        });


        // Handle successful submit
        console.log(response.data);
        setSuccessMessage('Form Submitted successfully');
        
        // Redirect to Submit component after a brief delay
        setTimeout(() => {
            navigate('/Contact');
        }, 2000);
        } catch (error) {
        // Handle submit errors
        if (error.response && error.response.data) {
            setErrors(error.response.data.errors);
        } else {
            console.error('Error Submitting Form:', error.message);
        }
        }
    };
    return (
        <div className="contact-us">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Subject:
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Message:
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="button" onClick={handleSubmit}>
                    Submit
                    </button>
                </form>

                {errors.length > 0 && (
                    <div className="error-container">
                    <h3>Errors:</h3>
                    <ul>
                        {errors.map((error, index) => (
                        <li key={index}>{error.msg}</li>
                        ))}
                    </ul>
                    </div>
                )}
                {successMessage && (
                <div className="success-message">
                    <p>{successMessage}</p>
                </div>
                )}
            </div>
        </div>
        );
}
export default Contact;