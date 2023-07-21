import React, { useState } from 'react';

// Components and pages
import Navbar from '../components/Navbar';
import Header from '../components/HeroSec';
import Footer from '../components/Footer';
import Cards from '../components/cards/Cards';
import LoginModal from '../components/modal/LoginModal';
import RegistModal from '../components/modal/RegistModal';

// import Contact from '../components/Contact';
import Service from '../components/Service';
import FeaturedRooms from '../components/FeaturedRooms';
// import Search from '../components/Search';


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
    <div>
      <div className="navbarsection">
        {openLoginModal && <LoginModal closeLogin={closeLogin} />}
        {openRegistModal && <RegistModal closeRegister={closeRegister} />}
        <Navbar login={login} register={register} />
      </div>
      <div className='hero-section'>
        <Header />
      </div>
      <div className="main flex flex-col justify-center items-center w-[1024px] m-auto">
        {/* <div className=" bg-gray-500 w-[1024px] h-[60px] flex justify-center items-center">
          <Search />
        </div> */}
        <div>
          <FeaturedRooms />
        </div>
        <div className=" flex flex-row h-auto ">
          <div class="mapouter my-5">
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
          <div className="flex flex-col justify-start ml-5 my-3">
            <ul className="flex flex-col justify-between">
              <li><Cards /></li>
            </ul>
          </div>
        </div>
        <div>
          <Service />
        </div>
        {/* <div>
          <Contact />
        </div> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;
