import React from 'react'
import BookingsNavbar from '../../components/navbar/BookingsNavbar'
import HeroSec from '../../components/HeroSec'
import Service from '../../components/Service'
import Footer from '../../components/Footer'
import ReservationCard from '../../components/cards/ReservationCard'

const Bookings = () => {
  return (
    <div>
      <header>
        <BookingsNavbar />
        <HeroSec />
      </header>
      <main className="m-auto w-[1024px] h-[400px]">
        <div className=" my-5">
          <h3 className="text-center text-xl font-bold">Your Reservation</h3>
        </div>
        <div className="reservation card flex justify-center">
          <ReservationCard />
        </div>
        <div className="total">
          <h5 className="text-lg font-semibold">Total amount:</h5>
          <button>Place order</button>
        </div>
        <div>
          <Service />
        </div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Bookings