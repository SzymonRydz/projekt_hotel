import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import hotel1 from "./hotel1.png";

const AddReservationForm = ({ setIsFormVisible }) => {
  const [hotels, setHotels] = useState([]); // Lista hoteli
  const [selectedHotel, setSelectedHotel] = useState(""); // Wybrany hotel
  const [hotelDetails, setHotelDetails] = useState(null); // Szczegóły wybranego hotelu
  const [rooms, setRooms] = useState([]); // Lista pokoi dla wybranego hotelu
  const [selectedRoom, setSelectedRoom] = useState(""); // Wybrany pokój
  const [reservationData, setReservationData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });
  const [currentImage, setCurrentImage] = useState(null);
  const [currentGallery, setCurrentGallery] = useState(null);

  // Przykładowe dane hoteli i pokoi
  const exampleHotels = [
    {
      id: "1",
      name: "Hotel Kraków",
      location: "Kraków",
      rating: 9.2,
      features: ["Darmowe WiFi", "Basen", "Śniadanie", "Parking"],
      image: hotel1,
      gallery: [
        {
          original: hotel1,
          thumbnail: hotel1,
        },
        {
          original: hotel1,
          thumbnail: hotel1,
        },
        {
          original: hotel1,
          thumbnail: hotel1,
        },
      ],
    },
    {
      id: "2",
      name: "Hotel Wrocław",
      location: "Wrocław",
      rating: 8.7,
      features: ["Darmowe WiFi", "Śniadanie", "Siłownia"],
      image: "https://via.placeholder.com/150",
      gallery: [
        {
          original: "https://via.placeholder.com/800x400",
          thumbnail: "https://via.placeholder.com/150x100",
        },
        {
          original: "https://via.placeholder.com/800x401",
          thumbnail: "https://via.placeholder.com/150x101",
        },
        {
          original: "https://via.placeholder.com/800x402",
          thumbnail: "https://via.placeholder.com/150x102",
        },
      ],
    },
    {
      id: "3",
      name: "Hotel Warszawa",
      location: "Warszawa",
      rating: 9.5,
      features: ["Klimatyzacja", "Przyjazny dla zwierząt", "Spa"],
      image: "https://via.placeholder.com/150",
      gallery: [
        {
          original: "https://via.placeholder.com/800x400",
          thumbnail: "https://via.placeholder.com/150x100",
        },
        {
          original: "https://via.placeholder.com/800x401",
          thumbnail: "https://via.placeholder.com/150x101",
        },
        {
          original: "https://via.placeholder.com/800x402",
          thumbnail: "https://via.placeholder.com/150x102",
        },
      ],
    },
  ];

  const exampleRooms = {
    "1": [
      { id: "101", type: "Standard", price: 200 },
      { id: "102", type: "Deluxe", price: 300 },
    ],
    "2": [
      { id: "201", type: "Standard", price: 180 },
      { id: "202", type: "Suite", price: 400 },
    ],
    "3": [
      { id: "301", type: "Economy", price: 150 },
      { id: "302", type: "Premium", price: 350 },
    ],
  };

  // Symulacja pobierania hoteli
  useEffect(() => {
    setHotels(exampleHotels);
  }, []);

  // Obsługa zmiany hotelu
  const handleHotelChange = (e) => {
    const hotelId = e.target.value;
    setSelectedHotel(hotelId);

    // Pobranie szczegółów hotelu
    const selectedHotelDetails = exampleHotels.find(
      (hotel) => hotel.id === hotelId
    );
    setHotelDetails(selectedHotelDetails);

    // Pobranie pokoi dla hotelu
    setRooms(exampleRooms[hotelId] || []);
    setSelectedRoom("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...reservationData,
      hotelId: selectedHotel,
      roomId: selectedRoom,
    };
    console.log("Rezerwacja wysłana:", finalData);
    alert("Rezerwacja została dodana pomyślnie!");

    // Reset formularza
    setReservationData({ name: "", date: "", time: "", guests: 1 });
    setSelectedHotel("");
    setSelectedRoom("");
    setRooms([]);
    setHotelDetails(null);
  };

  return (
    <div className="add-reservation-form">
        <button onClick={() => setIsFormVisible(false)}>Zamknij</button>
      <h2>Nowa rezerwacja</h2>
      <form onSubmit={handleSubmit}>
        {/* Wybór hotelu */}
        <div>
          <label>Wybierz hotel:</label>
          <select className="reservation-select" value={selectedHotel} onChange={handleHotelChange} required>
            <option value="">-- Wybierz hotel --</option>
            {hotels.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* Szczegóły hotelu */}
      {hotelDetails && (
  <div className="reservation-hotel-details">

    {/* Pojedyncze zdjęcie */}
    <div className="hotel-main-image">
      <div
        className="image-container"
        onClick={() => setCurrentGallery(hotelDetails.gallery)} // Obsługa kliknięcia
      >
        {/* Obraz */}
        <img
          src={hotelDetails.gallery[0].original} // Pierwsze zdjęcie
          alt={`${hotelDetails.name} - główne zdjęcie`}
          className="hotel-main-thumbnail"
        />
        <div className="image-overlay-text">Kliknij, aby zobaczyć galerię</div>
      </div>
    </div>

    <div className="reservation-hotel-info">
      <h3>{hotelDetails.name}</h3>
      <p><strong>Lokalizacja:</strong> {hotelDetails.location}</p>
      <p>
        <strong>Ocena:</strong> {hotelDetails.rating} Wyjątkowy
      </p>
      <ul>
        {hotelDetails.features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>
    </div>
  </div>
)}

      {/* Wybór pokoju */}
      {rooms.length > 0 && (
        <div>
          <label>Wybierz pokój:</label>
          <select className="reservation-select"
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            required
          >
            <option value="">-- Wybierz pokój --</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.type} - {room.price} PLN
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Formularz rezerwacji */}
      {selectedRoom && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Imię i nazwisko:</label>
            <input
              type="text"
              name="name"
              value={reservationData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Data:</label>
            <input
              type="date"
              name="date"
              value={reservationData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Godzina zakwaterowania:</label>
            <input
              type="time"
              name="time"
              value={reservationData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Liczba gości:</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={reservationData.guests}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Dodaj rezerwację</button>
        </form>
      )}

      {/* Pełna galeria - otwierana po kliknięciu */}
    {currentGallery && (
      <div
        className="fullscreen-overlay"
        onClick={() => setCurrentGallery(null)} // Zamknij galerię
      >
        <div className="gallery-container">
          {currentGallery.map((image, index) => (
            <img
              key={index}
              src={image.original}
              alt={`Galeria - zdjęcie ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    )}
    </div>
  );
};

export default AddReservationForm;
