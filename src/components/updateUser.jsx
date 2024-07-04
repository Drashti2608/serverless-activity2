import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UpdateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://us-central1-serverless-activity2-428318.cloudfunctions.net/updateUser",
        { username, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage(response.data);
    } catch (error) {
      setMessage(
        "Error updating user: " + error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="New Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Update User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateUser;
