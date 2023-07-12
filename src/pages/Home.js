import React, { useState } from 'react';


// Components and pages
import Navbar from '../components/Navbar';
import Header from '../components/HeroSec';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import LoginModal from '../components/modal/LoginModal';
import RegistModal from '../components/modal/RegistModal';

// Icons
import { faPersonHiking, faPersonBiking, faCar, faVanShuttle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Images
import fimage1 from '../images/home-images/Feat-room1.jpg'
import fimage2 from '../images/home-images/Feat-room2.jpg'
import fimage3 from '../images/home-images/Feat-room3.jpg'


export const Home = () => {

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegistModal, setOpenRegistModal] = useState(false);
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)


  // Modal section
  const login = () => {
    setOpenLoginModal(true); // opens the login modal
  }

  const closeLogin = () => {
    setOpenLoginModal(false); // closes the login modal
  }

  const register = () => {
    setOpenRegistModal(true);  // opens the register modal
  }

  const closeRegister = () => {
    setOpenRegistModal(false); // closes the register modal
  }

  return (
    <div className='home-container'>
      <div className="navbarsection">
        {openLoginModal && <LoginModal closeLogin={closeLogin} />}
        {openRegistModal && <RegistModal closeRegister={closeRegister} />}
        <Navbar login={login} register={register} />
      </div>
      <div className='hero-section'>
        <Header />
      </div>
      <div className="main flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-[350px]">
          <div className="heading flex justify-center">
            <h2 className=" text-xl font-bold mt-2 text-sky-800  mb-8">Featured Rooms</h2>
          </div>
          <div className="flex flex-row justify-evenly items-center">
            <div className="h-[230px] w-[300px] bg-sky-800  rounded-md ">
              <img className="w-[300px] h-[200px]" src={fimage1} alt="" />
              <p className="text-center text-white font-semibold mt-1">Family Deluxe</p>
            </div>
            <div className="h-[230px] w-[300px] bg-sky-800  mx-10  rounded-md ">
              <img className="w-[300px] h-[200px]" src={fimage2} alt="" />
              <p className="text-center text-white font-semibold mt-1">Standard Deluxe</p>
            </div>
            <div className="h-[230px] w-[300px] bg-sky-800  rounded-md">
              <img className="w-[300px] h-[200px]" src={fimage3} alt="" />
              <p className="text-center text-white font-semibold mt-1">Couples Deluxe</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-row h-auto ">
          <div class="mapouter ml-1 my-5">
            <div class="gmap_canvas">
              <iframe class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=307&amp;height=600&amp;hl=en&amp;q=pretoria cbd&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe><a href="https://embed-googlemap.com" className='border-none'></a>
            </div>
          </div>
          <div className="card-list flex flex-col justify-start ml-10 my-3">
            <ul className="card flex flex-col justify-between">
              <li><Cards /></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="services-section flex flex-col h-[300px] w-[1024px] bg-slate-600">
          <div className="heading my-8 flex justify-center items-center">
            <h5 className="text-xl font-bold text-sky-600">Services</h5>
          </div>
          <div className='activities flex flex-row justify-evenly items-center'>
            <div className="flex flex-col items-center justify-center w-[200px]">
              <span className=" text-xl font-semibold mb-2 text-sky-600 "><FontAwesomeIcon icon={faCar} /></span>
              <h6 className=" text-lg font-semibold text-sky-600 ">Car Hire</h6>
              <p className=" text-center ">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  w-[200px]">
              <span className="  text-xl font-semibold mb-2 text-sky-600"><FontAwesomeIcon icon={faPersonHiking} /></span>
              <h6 className=" text-lg font-semibold text-sky-600 ">Free Hiking</h6>
              <p className=" text-center ">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[200px]">
              <span className="  text-xl font-semibold mb-2 text-sky-600"><FontAwesomeIcon icon={faVanShuttle} /></span>
              <h6 className=" text-lg font-semibold text-sky-600">Free Shuttle</h6>
              <p className=" text-center ">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[200px] ">
              <span className=" text-xl font-semibold mb-2 text-sky-600"><FontAwesomeIcon icon={faPersonBiking} /></span>
              <h6 className=" text-lg font-semibold text-sky-600 ">Free Biking</h6>
              <p className=" text-center ">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;
