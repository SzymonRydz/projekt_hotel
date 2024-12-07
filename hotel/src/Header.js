import React from "react";
import { Link } from "react-router-dom";
import logo from './home.png';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Platforma Hotelowa Logo" className="logo" />
      </Link>
      <nav className="main-menu">
        <Link to="/hotel-list">Oferta hoteli</Link>
        <Link to="/collaboration">Współpraca</Link>
        <Link to="/login">Logowanie</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}

export default Header;
