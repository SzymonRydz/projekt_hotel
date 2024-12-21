import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import hotel1 from "./hotel1.png";
import hotel2 from "./hotel2.jpg";
import { AuthContext } from "./AuthContext";


const hotelsData = [
  {
    id: 1,
    name: "Raffles Europejski Warsaw",
    location: "Warszawa",
    category: "Luxury",
    rating: 9.5,
    price: 1775,
    features: ["Darmowe WiFi", "Basen", "Przyjazny dla zwierząt", "Klimatyzacja"],
    image: hotel1
  },
  {
    id: 2,
    name: "DS1 Olimp",
    location: "Kraków",
    category: "Economy",
    rating: 9.0,
    price: 40,
    features: ["Darmowe WiFi", "Ogrzewanie", "Komfort"],
    image: hotel2,
  },
  // Możesz dodać więcej hoteli tutaj
];

function HotelList() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const { setIsLoggedIn, checkLoginStatus, isLoggedIn } = useContext(AuthContext);

  // Filtrowanie hoteli na podstawie stanu
  const filteredHotels = hotelsData.filter((hotel) => {
    return (
      (search === "" || hotel.name.toLowerCase().includes(search.toLowerCase())) &&
      (locationFilter === "" || hotel.location === locationFilter) &&
      (categoryFilter === "" || hotel.category === categoryFilter)
    );
  });

  return (
    <div className="hotel-list-container">
      <h2>Polecane hotele</h2>

      {/* Wyszukiwarka i filtry */}
      <div className="filters">
        <input
          type="text"
          placeholder="Szukaj hotelu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">Wszystkie lokalizacje</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Kraków">Kraków</option>
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Wszystkie kategorie</option>
          <option value="Luxury">Luksusowe</option>
          <option value="Economy">Ekonomiczne</option>
        </select>
      </div>

      {/* Lista hoteli */}
      <div className="hotel-list">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="hotel-image"
            />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p>
                <strong>Ocena: {hotel.rating} Wyjątkowy</strong>
              </p>
              <ul className="hotel-features">
                {hotel.features.map((feature, index) => (
                  <li key={index}>✅ {feature}</li>
                ))}
              </ul>
            </div>
            <div className="hotel-price">
              <p>{hotel.price} zł / noc</p>
              {isLoggedIn ?(
                <button className="manage-button">Zarezerwuj</button>
              ) : (
                <Link to="/login" className="manage-button" >Zaloguj się aby zarezerwować</Link>
              )}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelList;
