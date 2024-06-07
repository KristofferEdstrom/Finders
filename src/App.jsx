// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServiceCategories from './components/ServiceCategories';
import FeaturedServices from './components/FeaturedServices';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ServiceCategories />
            <FeaturedServices />
          </>
        } />
        <Route path="/services" element={<ServiceCategories />} />
        <Route path="/about" element={<FeaturedServices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
