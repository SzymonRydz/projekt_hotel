import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import HotelList from "./HotelList";
import Dashboard from "./Dashboard";
import Collaboration from "./Collaboration";
import Header from "./Header";
import Footer from "./Footer";



function App() {
  return (
    <Router>
      <Header />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hotel-list" element={<HotelList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
