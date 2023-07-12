import React from 'react';
import '../../styles/navbar.css';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Navbar = ({signOut}) => {

    return (
        <div className="navbar">
            <div className='navContainer'>
                <span className='logo'>HOTEL <FontAwesomeIcon icon={faBellConcierge} /> BOOKINGS</span>
                <nav className="navItems">
                    <Link to="/">Home</Link>
                    <Link to="/" className="logout-link" onClick={signOut}>Log out</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;