import './App.css';
import AdminHome from './pages/admin/AdminHome';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import ViewRooms from './pages/admin/ViewRooms';
import Login from './pages/client/Login';
import Register from './pages/client/Register';
import ClientHome from './pages/client/ClientHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register  />} />
        <Route path='/clientHome' element={<ClientHome />} />
        <Route path="/adminHome" element={<AdminHome />}/>
        <Route path='/viewRooms' element={<ViewRooms />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;