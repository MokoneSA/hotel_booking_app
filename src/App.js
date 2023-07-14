import AdminHome from './pages/admin/AdminHome';
import Home from './pages/Home';
import Bookings from './pages/client/Bookings'
import NoPage from './pages/NoPage';
import NewRoom from './pages/admin/NewRoom';
import LoginModal from '../src/components/modal/LoginModal';
import RegistModal from '../src/components/modal/RegistModal';
import ClientHome from './pages/client/ClientHome';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/context/ProtectedRoute';

function App() {

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegistModal />} />

        <Route path='/clienthome' element={<ProtectedRoute><ClientHome /></ProtectedRoute>} />
        <Route path='/bookings' element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
        <Route path="/adminhome" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
        <Route path='/newroom' element={<ProtectedRoute><NewRoom /></ProtectedRoute>} />


        <Route path="*" element={<NoPage />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;