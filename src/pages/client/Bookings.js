import React, {useContext, useEffect} from 'react';
import BookingsNavbar from '../../components/navbar/BookingsNavbar';
import HeroSec from '../../components/HeroSec';
import Service from '../../components/Service';
import Footer from '../../components/Footer';
import { CartContext } from '../../components/context/CartContext';
import { useHistory } from 'react-router-dom';
import {auth} from '../../config/firebase';

const Bookings = () => {

  const history = useHistory();

  const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
  console.log('Checking ',data);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(!user) {
        history.push('/login');
      }
    })
  })

  return (
    <div className="flex flex-col">
      <header>
        <BookingsNavbar />
        <HeroSec />
      </header>
      <main className="m-auto w-[1024px] h-[400px]">
        {shoppingCart && shoppingCart.map(cart => (
          <div key={cart.id}>
            <div>
              <img src={cart.imageUrl} alt="not found" />
            </div>
            <div>{cart.title}</div>
            <div>{cart.description}</div>
            <div>R {cart.price}.00</div>
            <button>Delete</button>
          </div>
        ))}
        <div className=" my-5">
          <h3 className="text-center text-xl font-bold">Your Reservation</h3>
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