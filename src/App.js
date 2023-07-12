import './App.css';
import AdminHome from './pages/admin/AdminHome';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import NewRoom from './pages/admin/NewRoom';
import LoginModal from '../src/components/modal/LoginModal';
import RegistModal from '../src/components/modal/RegistModal';
import ClientHome from './pages/client/ClientHome';
// import Layout from '../src/pages/Layout'
// import RequireAuth from './components/RequireAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     {/* public routes */}
    //     <Route index element={<Home />} />
    //     <Route path="/login" element={<LoginModal />} />
    //     <Route path="/register" element={<RegistModal />} />

    //     {/* protected routes */}
    //     <Route element={<RequireAuth />}>
    //       <Route path='/clientHome' element={<ClientHome />} />
    //       <Route path="/adminHome" element={<AdminHome />} />
    //       <Route path='/newroom' element={<NewRoom />} />
    //     </Route>
    //     {/* catch all */}
    //     <Route path="*" element={<NoPage />} />
    //   </Route>
    // </Routes>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegistModal  />} />
        <Route path='/clientHome' element={<ClientHome />}/>
        <Route path="/adminHome" element={<AdminHome />}/>
        <Route path='/newroom' element={<NewRoom />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;