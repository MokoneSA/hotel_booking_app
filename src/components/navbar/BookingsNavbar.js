import React from 'react';
import '../../styles/navbar.css';
import { faBellConcierge, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Navbar = ({signOut}) => {

    return (
        <div className="navbar bg-gray-200">
            <div className='navContainer'>
                <span className='logo'>HOTEL <FontAwesomeIcon icon={faBellConcierge} /> BOOKINGS</span>
                <nav className="navItems">
                    <Link to='/bookings'>Home</Link>
                    <Link to="/" className="logout-link" onClick={signOut}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;