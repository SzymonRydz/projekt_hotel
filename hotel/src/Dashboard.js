import React, { useState } from "react";

function ClientDashboard() {
  const [showReservations, setShowReservations] = useState(false);

  // Przykładowe dane rezerwacji
  const reservations = [
    { id: 1, name: "Rezerwacja 1 (Hotel Warszawa)" },
    { id: 2, name: "Rezerwacja 2 (Hotel Kraków)" },
    { id: 3, name: "Rezerwacja 3 (Hotel Wrocław)" },
  ];

  const toggleReservations = (e) => {
    e.preventDefault(); // Zablokowanie przeładowania strony
    setShowReservations(!showReservations);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Menu</h3>
        <ul>
          {/* Moje rezerwacje */}
          <li>
            <a
              href="#"
              onClick={toggleReservations}
              className="menu-item"
              id="toggle-reservations"
            >
              Moje rezerwacje
            </a>
            {showReservations && (
              <ul id="reservation-list">
                {reservations.map((reservation) => (
                  <li key={reservation.id}>
                    <a
                      href="#"
                      data-reservation-id={reservation.id}
                      className="reservation-link"
                    >
                      {reservation.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Historia rezerwacji */}
          <li>
            <a href="#" className="menu-item" id="history">
              Historia rezerwacji
            </a>
          </li>

          {/* Wyloguj się */}
          <li>
            <a href="#" className="menu-item">
              Wyloguj się
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default ClientDashboard;
