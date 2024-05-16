import React from 'react';
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            {/* <li><a href="">About Us</a></li> */}
                            <li><Link to="/About">About Us</Link></li>
                            <li><Link to="/Contact">Contact Us</Link></li>
                            <li><Link to="/About">Our Services</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="">FAQ</Link></li>
                            <li><Link to="">shipping</Link></li>
                            <li><Link to="">returns</Link></li>
                            <li><Link to="">order status</Link></li>
                            <li><Link to="">payment options</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <Link to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link to=""><i className="fab fa-twitter"></i></Link>
                            <Link to=""><i className="fab fa-instagram"></i></Link>
                            <Link to=""><i className="fab fa-linkedin-in"></i></Link>
                            <p>&copy; All Rights Reserved By Med-Info.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;