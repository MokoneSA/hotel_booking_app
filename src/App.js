import AdminHome from './pages/admin/AdminHome';
import Home from './pages/Home';
import Bookings from './pages/client/Bookings'
import NoPage from './pages/NoPage';
import NewRoom from './pages/admin/NewRoom';
import LoginModal from '../src/components/modal/LoginModal';
import RegistModal from '../src/components/modal/RegistModal';
import ClientHome from './pages/client/ClientHome';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/context/ProtectedRoute';
import { CartContextProvider } from './components/context/CartContext';
import { UserAuthContextProvider } from './components/context/UserAuthContext';

function App() {

  return (
    <UserAuthContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/register" element={<RegistModal />} />

          {/* <Route path='/clienthome' element={<ClientHome />} />
          <Route path='/bookings' element={<Bookings  />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path='/newroom' element={<NewRoom />} /> */}

          <Route path='/clienthome' element={<ProtectedRoute><ClientHome /></ProtectedRoute>} />
          <Route path='/bookings' element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
          <Route path="/adminhome" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
          <Route path='/newroom' element={<ProtectedRoute><NewRoom /></ProtectedRoute>} />


          <Route path="*" element={<NoPage />} />
        </Routes>
      </CartContextProvider>
    </UserAuthContextProvider>
  );
}

export default App;