import React from "react";
import { useState } from 'react';
import medicineData from './medinfo.json/medinfo.json';
import Calamox1 from './Images/Calamox1.jpg';
import PulmonalSyp from './Images/Pulmonal Syp.jpg';
import Novidat from './Images/Novidat.webp';
import "./style.css";
// import axios from 'axios';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = () => {
        const results = medicineData.filter(
        (medicine) =>
            medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            medicine.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            medicine.formula.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (results.length > 0) {
        const formula = results[0].formula;
        const competitors = medicineData.filter(
            (medicine) => medicine.formula === formula && medicine.name !== results[0].name
        );
        setSearchResults([...results, ...competitors]);
        } else {
        setSearchResults([]);
        }

        setShowResults(true);
    };
    // useEffect(() => {
    //         const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:4000/api/products?formula=${searchTerm}`);
    //             const data = response.data;
        
    //             if (data.length > 0) {
    //             const formula = data[0].formula;
    //             const filteredResults = data.filter((medicine) => medicine.formula === formula);
        
    //             if (filteredResults.length > 0) {
    //                 setSearchResults(filteredResults);
    //             } else {
    //                 setSearchResults([]);
    //             }
    //             } else {
    //             setSearchResults([]);
    //             }
        
    //             setShowResults(true);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //         };
        
    //         if (searchTerm) {
    //         fetchData();
    //         }
    //     }, [searchTerm]);



    const featuredItems = [
        {
            id: 1,
            name: "Calamox",
            formula: "amoxicillin",
            company: "Bosch",
            image: Calamox1,
            Price : "390"
        },
        {
            id: 2,
            name: "Pulmonal Syp",
            formula: "bextromethorphan",
            company: "CCL",
            image:PulmonalSyp,
            Price : 120
        },
        {
            id: 3,
            name: "Novidat",
            formula: "Ciprofloxacin",
            company: "Sami",
            image: Novidat,
            Price : 300
        },
    ];
    return (
        <>
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="heroheading">Welcome to Med-Info</h1>
                <p className="herotext">A Prevention is Better than Cure!</p>
                <a className="btn-primary" href="#Search-Section" >Get Started</a>
            </div>
        </div>
        <div className="featured-items-container">
            <h2>Featured Items</h2>
            <div className="featured-items-grid">
                {featuredItems.map((item) => (
                <div key={item.id} className="featured-item">
                    <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Formula: {item.formula}</p>
                        <p>Company: {item.company}</p>
                        <p>Price: {item.Price}</p>
                    </div>
                ))}
            </div>
        </div>
        <section id="Search-Section">
            <div className="search-section">
                <div className="background-image"></div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for a medicine..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn-primary2"  onClick={handleSearch}>Search</button>
                    {/* <button className="btn-primary2"  onClick={() => setSearchTerm(searchTerm)}>Search</button> */}
                </div>
                {showResults && (
                    <div className="search-results">
                        {searchResults.length > 0 ? (
                            <ul>
                            {searchResults.map((result) => (
                                <li key={result.name}>
                                {/* <img src={result.imgUrl} alt={result.name} /> */}
                                <h3>{result.name}</h3>
                                <p>Formula:{result.formula}</p>
                                <p>Company:{result.company}</p>
                                <p>{`Price: ${result.price}`}</p>
                                </li>
                            ))}
                            </ul>
                        ) : (
                            <p>No results found.</p>
                        )}
                    </div>
                )}
            </div>
        </section>
        </>
    );
};

export default Home;