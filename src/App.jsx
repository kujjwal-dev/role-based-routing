import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import User from "./User";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {

  const Users = {

    Registered : "registered",
    Public : "public",
    Admin : "admin",
    
  }

// fetch it from database
  const Current_user = Users.Registered;


  return (
    <BrowserRouter>
    <Navbar Current_user={Current_user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin Current_user={Current_user} />} />
        <Route path="/user" element={<User Current_user={Current_user} />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
