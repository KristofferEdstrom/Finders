// src/components/Dashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Dashboard = () => {
  const { currentUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {currentUser.email}</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded mt-4" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
