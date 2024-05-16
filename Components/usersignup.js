import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './login.css';
import axios from 'axios';

const Signup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
        const response = await axios.post('http://localhost:4000/api/signup', {
            firstname,
            lastname,
            email,
            mobile,
            password,
        });


        // Handle successful signup
        console.log(response.data);
        setSuccessMessage('User registered successfully');
        
        // Redirect to SignIn component after a brief delay
        setTimeout(() => {
            navigate('/signin');
        }, 2000);
        } catch (error) {
        // Handle signup errors
        if (error.response && error.response.data) {
            setErrors(error.response.data.errors);
        } else {
            console.error('Error signing up:', error.message);
        }
        }
    };


    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form>
                <label>
                First Name:
                <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                </label>
                <br />
                <label>
                Last Name:
                <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
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
                Mobile:
                <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                </label>
                <br />
                <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                <p>
                    Already have an account? <Link to="/signin">Login Here</Link>
                </p>
                <br />
                <button type="button" onClick={handleSignup}>
                Sign Up
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
    );
};

export default Signup;
