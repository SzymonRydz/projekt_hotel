import React, { useState } from "react";

function Collaboration() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="collaboration-container">
      {/* Nagłówek z tłem */}
      <div className="header-with-background">
        <h2>Dołącz do naszej platformy i zarządzaj swoim hotelem w prosty sposób!</h2>
        <p>
          Oferujemy kompleksowe narzędzie do zarządzania Twoim obiektem – od
          rezerwacji, przez zarządzanie personelem, aż po raportowanie wyników
          finansowych.
        </p>
      </div>

      {/* Sekcja funkcji */}
      <div className="collab_features">
        <div className="collab_feature">
          <i className="icon-dashboard"></i>
          <h3>Intuicyjny Dashboard</h3>
          <p>
            Wszystkie najważniejsze dane w jednym miejscu – pełna kontrola nad
            Twoim hotelem.
          </p>
        </div>
        <div className="collab_feature">
          <i className="icon-reservation"></i>
          <h3>Rezerwacje online</h3>
          <p>Zarządzaj rezerwacjami swoich gości w czasie rzeczywistym.</p>
        </div>
        <div className="collab_feature">
          <i className="icon-stats"></i>
          <h3>Raporty i statystyki</h3>
          <p>
            Analizuj wyniki finansowe i operacyjne, aby podejmować trafne
            decyzje biznesowe.
          </p>
        </div>
        <div className="collab_feature">
          <i className="icon-team"></i>
          <h3>Zarządzanie zespołem</h3>
          <p>
            Harmonogramy, delegowanie zadań, kontrola pracy – wszystko w zasięgu
            ręki.
          </p>
        </div>
      </div>

      {/* Sekcja oferty */}
      <div className="offer">
        <h3>Dlaczego warto wybrać naszą platformę?</h3>
        <ul>
          <li>✅ Proste w obsłudze narzędzia dla każdego właściciela hotelu.</li>
          <li>✅ Zwiększenie wydajności operacyjnej i oszczędność czasu.</li>
          <li>✅ Łatwy dostęp do danych z dowolnego miejsca na świecie.</li>
          <li>✅ Dedykowane wsparcie techniczne 24/7.</li>
        </ul>
      </div>

      {/* Sekcja wezwania do działania */}
      <div className="cta">
        <h3>Nie czekaj – zarejestruj swój hotel już dziś!</h3>
        <button id="contact-us" onClick={toggleContactInfo}>
          Skontaktuj się z nami
        </button>
        {showContactInfo && (
          <div id="contact-info">
            <p>
              <strong>Email:</strong> kontakt@myhotelweb.pl
            </p>
            <p>
              <strong>Telefon:</strong> +48 123 456 789
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collaboration;
