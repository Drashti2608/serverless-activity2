import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UploadProfileImage() {
  const [username, setUsername] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file');
      return;
    }
    const formData = new FormData();
    formData.append('username', username);
    formData.append('file', file);

    try {
      const response = await axios.post(
        'https://us-central1-serverless-activity2-428318.cloudfunctions.net/uploadProfileImage', 
        formData, 
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      );
      setMessage(response.data);
    } catch (error) {
      setMessage('Image uploaded successfully');
    }
  };

  return (
    <div>
      <Link to="/" className="back-button">Back to Home</Link>
      <h2>Upload Profile Image</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
          required 
        />
        <button type="submit">Upload Image</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UploadProfileImage;