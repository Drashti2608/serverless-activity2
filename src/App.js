import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/addUser';
import GetUser from './components/getUser';
import Home from './components/home';
import UpdateUser from './components/updateUser';
import UploadProfileImage from './components/uploadProfileImage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>User Management System</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/get" element={<GetUser />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/upload" element={<UploadProfileImage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;