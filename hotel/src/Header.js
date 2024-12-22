import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from './home.png';
import userStatusFunction from "./userStatus";
import { AuthContext } from "./AuthContext"; // Import kontekstu

var userStatus = 'user';   // admin, staff, guest - do testów, potem ma być modyfikowane przez BE


function Header() {
  const { isLoggedIn, setIsLoggedIn, checkLoginStatus, handleLogout } = useContext(AuthContext); // Pobranie funkcji z kontekstu
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
        .then(response => {
            console.log('API response:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API data:', data);
            setApiData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

  useEffect(() => {
    checkLoginStatus();
  }, []);
    

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Platforma Hotelowa Logo" className="logo" />
      </Link>
      {apiData ? (
                <div className="api-data">
                    <p>API Response: {apiData.message}</p>
                </div>
            ) : (
                <p>Loading data from API...</p>
            )}
      <nav className="main-menu">
        <Link to="/hotel-list">Oferta hoteli</Link>
        <Link to="/collaboration">Współpraca</Link>
{isLoggedIn ? (
    <a href="#" onClick={handleLogout}>Wyloguj się </a>
) : (
  <Link to="/login">Logowanie</Link>
)}
{userStatusFunction(userStatus)}
      </nav>
    </div>
  );
}

export default Header;
