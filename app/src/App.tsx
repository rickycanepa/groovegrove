import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Dashboard from './components/dashboard';
import NotFound from './components/NotFound'
import './App.css';
// import Navbar from './components/navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App;