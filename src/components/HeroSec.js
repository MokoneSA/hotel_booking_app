import React from 'react';
import '../styles/header.css';
import heropic from '../images/hero-pic.jpg'



const Header = () => {
    return (
        <div className="hero-section">
            <div className="hr-rule bg-sky-800 "></div>
            <div className="img-div">
                <img src={heropic} alt='banner' className="hero-image" />
            </div>
        </div>
    )
}

export default Header;