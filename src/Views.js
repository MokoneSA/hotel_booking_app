import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Home from './pages/client/Home';

const Views = () => {
  return (
    
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
    </Routes>
  )
}

export default Views