// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Dashboard from './Components/Dashboard';

import Header from './Header';
import AuthService from './Authservice';
import About from './Components/About';


const PrivateRoute = ({ element }) => {
  const isAuthenticated = AuthService.getCurrentUser() !== null;
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

function App() {  

  const isAuthenticated = AuthService.getCurrentUser() !== null;
  return (
    <>
    
    <Router>
    <Header/> 
      <Routes>
        
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {}
        <Route path="/login" element={<Login />} />
          {isAuthenticated ? (
            <Route path="/dashboard/*" element={<PrivateRoute element={<Dashboard />} />} />
          ) : (
            <Route path="/login" element={<Login/>} />
          )}
        {}

      </Routes>
    </Router>
    </>
    
  );
}

export default App;
