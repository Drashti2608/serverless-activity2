import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to User Management</h2>
      <div className="button-container">
        <Link to="/add" className="button">Add User</Link>
        <Link to="/get" className="button">Get User</Link>
        <Link to="/update" className="button">Update User</Link>
        <Link to="/upload" className="button">Upload Profile Image</Link>
      </div>
    </div>
  );
}

export default Home;