import React, { useState } from "react";
import AddReservationForm from "./ReservationForm2";


function ClientDashboard() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showReservations, setShowReservations] = useState(false);
  const [activeReservation, setActiveReservation] = useState(null); // Aktualnie wybrana rezerwacja
  const [showOptions, setShowOptions] = useState({}); // Dla rozwijania podmenu
  const [selectedEvent, setSelectedEvent] = useState(""); // Wybrana opcja w "Zdarzeniach"
  const [expandedHistory, setExpandedHistory] = useState({}); // Rozwinięte elementy historii
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [history, setHistory] = useState([
    // Przykładowe dane rezerwacji
    {
      id: 1,
      name: "Rezerwacja 1 (Hotel Warszawa)",
      date: "2024-12-07",
      cost: 450,
      room: "Pokój 101",
    },
    {
      id: 2,
      name: "Rezerwacja 2 (Hotel Kraków)",
      date: "2024-12-05",
      cost: 300,
      room: "Pokój 202",
    },
    {
      id: 3,
      name: "Rezerwacja 3 (Hotel Wrocław)",
      date: "2024-12-03",
      cost: 500,
      room: "Pokój 303",
    },
  ]);

  // Przykładowe dane rezerwacji
  const reservations = [
    { id: 1, name: "Rezerwacja 1 (Hotel Warszawa)" },
    { id: 2, name: "Rezerwacja 2 (Hotel Kraków)" },
    { id: 3, name: "Rezerwacja 3 (Hotel Wrocław)" },
  ];

   // Czyszczenie starej zawartości
   const resetMainContent = () => {
    setActiveReservation(null);
    setShowOptions({});
    setExpandedHistory({});
    setSelectedEvent("");
  };

  const toggleReservations = (e) => {
    e.preventDefault();
    setShowReservations(!showReservations);
  };

  // Zarządzanie historią rezerwacji
  const handleHistoryClick = () => {
    resetMainContent(); // Czyszczenie zawartości
    setActiveMenu("history"); // Ustaw menu historii rezerwacji
  };

  const handleReservationClick = (id) => {
    resetMainContent(); // Czyszczenie zawartości
    if (activeReservation === id) {
      // Jeśli kliknięto ponownie tę samą rezerwację, resetuj tylko stan wyświetlania
      setActiveReservation(null);
      setActiveMenu(null); // Czyszczenie menu
    } else {
      // Ustaw nową aktywną rezerwację
      setActiveReservation(id);
      setActiveMenu("reservations");
    }
    //setActiveMenu("reservations"); // Ustaw menu historii rezerwacji
    //setActiveReservation(id === activeReservation ? null : id);
    setShowOptions({}); // Resetuj podmenu, gdy zmieniasz aktywną rezerwację
  };

  const toggleOption = (option) => {
    setShowOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const toggleHistoryDetails = (id) => {
    resetMainContent(); // Czyszczenie zawartości
    setActiveMenu("history"); // Ustaw menu historii rezerwacji
    setExpandedHistory((prev) => ({
      ...prev,
      [id]: !prev[id], // Przełącz rozwinięcie dla danego rekordu
    }));
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      reservationId: activeReservation,
      event: selectedEvent,
    };

    fetch("https://example.com/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Zgłoszenie wysłane pomyślnie!");
        setSelectedEvent(""); // Resetuj pole wyboru
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania zgłoszenia:", error);
        alert("Wystąpił błąd podczas wysyłania zgłoszenia.");
      });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Menu</h3>
        <ul>
          {/* Rezerwacje */}
          <li>
            <a
              href="#"
              onClick={toggleReservations}
              className="menu-item"
              id="toggle-reservations"
            >
              Aktualne rezerwacje
            </a>
            {showReservations && (
              <ul id="reservation-list">
                {reservations.length > 0 ? (
                  // Jeśli są rezerwacje, wyświetl listę
                  reservations.map((reservation) => (
                    <li key={reservation.id}>
                      <a
                        href="#"
                        onClick={() => handleReservationClick(reservation.id)}
                        className="reservation-link"
                      >
                        &bull;  {reservation.name}
                      </a>
                    </li>
                  ))
                ) : (
                  // Jeśli brak rezerwacji, wyświetl komunikat
                  <li className="reservation-link">Brak rezerwacji</li>
                )}
              </ul>
            )}
            
          </li>

          {/* Dodaj nową rezerwację */}
          <li>
                  <a
                    href="#"
                    onClick={() => setIsFormVisible(true)}
                    className="reservation-link"
                  >
                  Dodaj rezerwację
                  </a>
                </li>
          

           {/* Historia rezerwacji */}
          <li>
            <a
              href="#"
              className="menu-item"
              onClick={handleHistoryClick}
            >
              Historia rezerwacji
            </a>
          </li>

          {/* Wyloguj się */}
          <li>
            <a
              href="#"
              className="menu-item"
              onClick={() => {
                // Wywołanie endpointu wylogowania
                fetch("https://example.com/api/logout", {  // do api
                  method: "POST",
                  credentials: "include", // Wysyłanie cookies
                })
                  .then((response) => {
                    if (response.ok) {
                      // Zresetowanie stanu aplikacji
                      //localStorage.removeItem("token"); localStorage wersja
                      alert("Wylogowano pomyślnie.");
                      window.location.href = "/login"; // Przekierowanie na stronę logowania
                    } else {
                      alert("Wystąpił problem podczas wylogowania.");
                    }
                  })
                  .catch((error) => {
                    console.error("Błąd podczas wylogowania:", error);
                    alert("Błąd podczas łączenia z serwerem.");
                  });
              }}
            >
              Wyloguj się
            </a>
          </li>

        </ul>
      </aside>

      {/* Główna zawartość */}
      <main className="main-content">
        {activeMenu=="reservations"&& (
          <div className="reservation-details">
            <h2>{`Szczegóły ${reservations.find(
              (r) => r.id === activeReservation
            ).name}`}</h2>

            {/* Informacje */}
            <div>
              <a
                href="#"
                onClick={() => toggleOption("info")}
                className="option-link"
              >
                Informacje
              </a>
              {showOptions.info && (
                <div className="submenu">Szczegóły rezerwacji...</div>
              )}
            </div>

            {/* Zdarzenia */}
            <div>
              <a
                href="#"
                onClick={() => toggleOption("events")}
                className="option-link"
              >
                Zdarzenia
              </a>
              {showOptions.events && (
                <div className="submenu">
                  <form onSubmit={handleEventSubmit}>
                    <select
                      value={selectedEvent}
                      onChange={(e) => setSelectedEvent(e.target.value)}
                    >
                      <option value="">Wybierz zdarzenie...</option>
                      <option value="broken_air_conditioner">Zepsuta klimatyzacja</option>
                      <option value="broken_fridge">Zepsuta lodówka</option>
                      <option value="no_hot_water">Brak ciepłej wody</option>
                      <option value="other">Inne</option>
                    </select>
                    <button type="submit">Zgłoś</button>
                  </form>
                </div>
              )}
            </div>

            {/* Zarządzanie */}
            <div>
              <a
                href="#"
                onClick={() => toggleOption("manage")}
                className="option-link"
              >
                Zarządzanie
              </a>
              {showOptions.manage && (
                <div className="submenu">Opcje zarządzania...</div>
              )}
            </div>
          </div>
        ) 
        }

          {activeMenu === "history" && (
          <div>
            <h2>Historia rezerwacji</h2>
            <div className="history">
              {history.map((item) => (
                <div key={item.id} className="history-item">
                  <a
                    href="#"
                    onClick={() => toggleHistoryDetails(item.id)}
                    className="history-title"
                  >
                    {item.name} ({item.date})
                  </a>
                  {expandedHistory[item.id] && (
                    <div className="history-details">
                      <p>Data: {item.date}</p>
                      <p>Koszt: {item.cost} zł</p>
                      <p>Pokój: {item.room}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {isFormVisible && (
          <div className="modal">
            <div className="add-reservation-format">
                <AddReservationForm setIsFormVisible={setIsFormVisible} />
            </div>
          </div>
      )}
      </main>
    </div>
  );

  
}

export default ClientDashboard;
