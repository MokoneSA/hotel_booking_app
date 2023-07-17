import React from 'react';
import '../../styles/navbar.css';
import { faBellConcierge, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Navbar = ({signOut}) => {

    return (
        <div className="navbar bg-gray-200 w-[1024px] m-auto items-center justify-center">
            <div className='navContainer flex flex-row justify-between  h-[40px]'>
                <span className='logo'>HOTEL <FontAwesomeIcon icon={faBellConcierge} /> BOOKINGS</span>
                <nav className="navItems">
                    <Link to='/bookings'>Bookings</Link>
                    <Link to="/" className="logout-link" onClick={signOut}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;