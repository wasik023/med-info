import React from 'react';
import WasikRehman from './Images/WasikRehman.jpeg';
import SameerQureshi from './Images/SameerQureshi.jpeg';
import AamirKhan from './Images/AamirKhan.jpeg';
import AsimAfridi from './Images/AsimAfridi.jpeg';
import HaseebUllah from './Images/HaseebUllah.jpeg';
import FaizanAhmed from './Images/FaizanAhmed.jpg';
import Usman from './Images/Usman.jpg';
import './style.css'; // Import the CSS file

const About = () => {
    const services = [
        {
        title: 'Genuine Medicines',
        description: 'Med-Info not just provide information regarding medicines but it also ensures the safety of the user too by providing best Medicines out there.',
        },
        {
        title: 'Vast Variety',
        description: 'Med-Info provides information not just for local medicines but also for International prodcts too.',
        },
        {
        title: 'Easily Accessible',
        description: 'It is user friendly and anyone can accesss directly to access medicine information according to their needs.',
        },
    ];

    const teamMembers = [
        { name: 'Wasik Rehman', role: 'Project Manager', image: WasikRehman }, 
        { name: 'Smaeer Qureshi', role: 'Back-End Developer', image: SameerQureshi }, 
        { name: 'Aamir khan', role: 'Sofware Tester', image: AamirKhan },
        { name: 'Asim Orakzai', role: 'Fronte-End & UI/UX', image: AsimAfridi },
        { name: 'Haseeb Ullah Khan', role: 'Database Manager', image: HaseebUllah },
        { name: 'Faizan Ahmed', role: 'Back-End Developer', image: FaizanAhmed }, 
        { name: 'Muhammad Usman', role: 'Front-End Developer', image: Usman },
    ];

    return (
        <div className="about-us-container">
            <h2>Our Services</h2>
            <div className="services">
                {services.map((service, index) => (
                    <div key={index} className="service">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="team">
                <h2>Our Team</h2>
                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
