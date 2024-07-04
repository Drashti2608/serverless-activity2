import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        " https://us-central1-serverless-activity2-428318.cloudfunctions.net/addUser",
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
        "Error creating user: " + error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
      <h2>Add User</h2>
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
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddUser;
