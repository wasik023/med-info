import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
        const response = await axios.post('http://localhost:4000/api/signin', {
            email,
            password,
        });

        // Handle successful sign-in
        console.log(response.data);
        setSuccessMessage('User Login successfully');

        // Redirect to Home component after successful sign-in
        navigate('/');

        // Display success message (you may customize this message)
        alert('Login successful');
        } catch (error) {
        // Handle sign-in errors
        if (error.response && error.response.status === 404) {
            setErrorMessage('User not found');
        } else if (error.response && error.response.status === 401) {
            setErrorMessage('Invalid password');
        } else {
            console.error('Error signing in:', error.message);
            setErrorMessage('Error signing in. Please try again.');
        }
        }
    };

    return (
        <div className="signup-container">
        <h2>Sign In</h2>
        <form>
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
            Password:
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            <p>
                Don't have an account? <Link to="/signup">SignUp Here</Link>
            </p>
            <br />
            <button type="button" onClick={handleSignIn}>
            Sign In
            </button>
        </form>

        {errorMessage && (
            <div className="error-container">
            <p>{errorMessage}</p>
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

export default SignIn;
