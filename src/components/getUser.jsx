import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GetUser() {
  const [username, setUsername] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://us-central1-serverless-activity2-428318.cloudfunctions.net/getUser?username=${username}`);
      setUserDetails(response.data);
      setMessage('User details retrieved successfully');
    } catch (error) {
      setMessage('Error getting user: ' + error.response?.data || error.message);
      setUserDetails(null);
    }
  };

  return (
    <div>
      <Link to="/" className="back-button">Back to Home</Link>
      <h2>Get User</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <button type="submit">Get User</button>
      </form>
      {message && <p>{message}</p>}
      {userDetails && (
        <div>
          <h3>User Details</h3>
          <p>Username: {userDetails.username}</p>
          <p>Email: {userDetails.email}</p>
          <p>Profile Image: {userDetails.profile_image || 'Not set'}</p>
        </div>
      )}
    </div>
  );
}

export default GetUser;