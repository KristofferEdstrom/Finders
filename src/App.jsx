// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServiceCategories from './components/ServiceCategories';
import FeaturedServices from './components/FeaturedServices';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import ServiceList from './components/ServiceList';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';  // Import Dashboard component
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ServiceCategories />
            <FeaturedServices />
          </>
        } />
        <Route path="/services" element={<ServiceList />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
