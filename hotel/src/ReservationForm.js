import React, { useState } from "react";

const AddReservationForm = ({ setIsFormVisible }) => {
  const [reservationData, setReservationData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://example.com/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        alert("Rezerwacja została dodana pomyślnie!");
        setReservationData({ name: "", date: "", time: "", guests: 1 }); // Reset formularza
      } else {
        alert("Wystąpił problem podczas dodawania rezerwacji.");
      }
    } catch (error) {
      console.error("Błąd:", error);
      alert("Nie udało się połączyć z serwerem.");
    }
  };

  return (
    <div className="add-reservation-form">
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
            <label>Godzina zakwateorwania:</label>
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
    </div>

  );
};

export default AddReservationForm;
