import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
    {/* Sekcja Hero */}
    <div className="hero-section">
        <h1>Platforma Zarządzania Hotelami</h1>
        <p>Zarządzaj swoimi hotelami szybko i wygodnie z każdego miejsca na świecie.</p>
        <Link to="/hotel-list"> <button>Zobacz listę hoteli</button> </Link>
    </div>

    {/* Sekcja Funkcjonalności */}
    <div className="features-section">
        <h2>Co oferujemy?</h2>
        <div className="features">
            <div className="feature">
                <i className="icon-rezervacje"></i>
                <h3>Zarządzanie rezerwacjami</h3>
                <p>Prosta i szybka obsługa rezerwacji klientów.</p>
            </div>
            <div className="feature">
                <i className="icon-statystyki"></i>
                <h3>Statystyki i raporty</h3>
                <p>Monitoruj wyniki swoich hoteli w czasie rzeczywistym.</p>
            </div>
            <div className="feature">
                <i className="icon-pracownicy"></i>
                <h3>Harmonogramy pracowników</h3>
                <p>Łatwo zarządzaj zespołem i czasem pracy.</p>
            </div>
        </div>
    </div>

    {/* Sekcja Opinie */}
    <div className="testimonials-section">
        <h2>Opinie naszych użytkowników</h2>
        <blockquote>„Platforma pozwoliła mi usprawnić zarządzanie moim hotelem. Gorąco polecam!” – Jan Kowalski</blockquote>
        <blockquote>„Dzięki tej aplikacji nasz hotel oszczędza czas i pieniądze.” – Anna Nowak</blockquote>
    </div>

    {/* Sekcja Zachęcająca */}
    <div className="invite-section">
        <h2>Nie czekaj!</h2>
        <Link to="/collaboration"> <button>Sprawdź naszą ofertę!</button> </Link>
    </div>

    {/* Miejsce na dynamicznie ładowane treści */}
    <div id="content"></div>
</div>
  );
}

export default Home;
