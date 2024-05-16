import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
// import Login from './Loginform';
import Signup from './usersignup';
import SignIn from './usersignin';
import './style.css';
import { useState } from 'react';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <h2 className="logo">MED-INFO</h2>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About Us</a></li>
                <li><a href="/Contact">Contact Us</a></li>
                <li><a href="/SignIn">Login</a></li>
            </ul>
            </nav>

            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact Us />} />
            <Route path="/Signup" element={<Signup />}/>
                <Route path="/Signin" element={<SignIn />} />
            </Routes>
        </div>
    );
};

export default NavBar;


