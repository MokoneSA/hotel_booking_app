import React from 'react';
import '../../styles/home.css'
import Navbar from '../../components/Navbar';
import Header from '../../components/HeroSec';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import room1 from '../../images/rooms/room1.jpg';
import room2 from '../../images/rooms/room2.jpg';

export const Home = () => {
  return (
    <div className='home-container'>
      <div className="navbarsection">
        <Navbar />
      </div>
      <div className='hero-section'>
        <Header />
      </div>
      <div className="main-section">
        <div className="card-list">
          <div className="card">
            <Cards
              title="Card"
              imageUrl={room1}
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
          <div className="card">
            <Cards
              title="Card"
              imageUrl={room2}
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
          <div className="card">
            <Cards
              title="Card"
              imageUrl={room2}
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
          <div className="card">
            <Cards
              title="Card"
              imageUrl={room2}
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
          <div className="card">
            <Cards
              title="Card"
              imageUrl={room2}
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
          <div className="card">
            <Cards
              title="Card"
              imageUrl={room2}
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
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
