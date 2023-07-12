import React from 'react';
import '../../styles/navbar.css';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = ({login, register}) => {

    return (
        <div className="w-[1024px] h-[50px] flex items-center jusstify-center m-[auto]">
 
            <div className='navContainer w-[1024px] flex items-center justify-between decoration-white '>
                <span className='font-bold ml-4 decoration-black text-lg ' >HOTEL <FontAwesomeIcon icon={faBellConcierge} /> BOOKINGS</span>
                <nav className=" decoration-black flex items-center mr-[20px] ">
                    <a href="#" className="mr-[10px]">Rooms</a>
                    <button className="reg-link" onClick={() => {register(true)}}>Register</button>
                    <button className="login-link bg-sky-950" onClick={() => {login(true)}}>Login</button>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;