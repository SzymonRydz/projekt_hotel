import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext"; // Import kontekstu

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Dodano pole "Powtórz hasło"
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Dodano telefon
  const [city, setCity] = useState(""); // Dodano miasto
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const { setIsLoggedIn, checkLoginStatus } = useContext(AuthContext); // Pobranie funkcji z kontekstu

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Walidacja danych wejściowych
    if (!username || username.trim().length === 0) {
      setError("Nazwa użytkownika jest wymagana!");
      return;
    }

    if (!password || password.trim().length === 0) {
      setError("Hasło jest wymagane!");
      return;
    }

    if (isRegistering) {
      if (!email || email.trim().length === 0) {
        setError("Email jest wymagany do rejestracji!");
        return;
      }
      if (!phone || phone.trim().length === 0) {
        setError("Numer telefonu jest wymagany do rejestracji!");
        return;
      }
      if (!city || city.trim().length === 0) {
        setError("Miasto jest wymagane do rejestracji!");
        return;
      }
      if (password !== confirmPassword) {
        setError("Hasła nie są takie same!");
        return;
      }
    }

    try {
      const endpoint = isRegistering
        ? "https://example.com/api/register" // Endpoint rejestracji
        : "https://example.com/api/login"; // Endpoint logowania

      // Wysłanie danych do API
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          isRegistering
            ? { username, password, email, phone, city }
            : { username, password }
        ),
        credentials: "include",
      });

      if (response.ok) {
        alert(isRegistering ? "Zarejestrowano pomyślnie!" : "Zalogowano pomyślnie!");
        // Reset pól formularza
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        setPhone("");
        setCity("");
        setError("");

        if (isRegistering) {
          setIsRegistering(false); // Przełączenie do logowania po rejestracji
        } else {
          setIsLoggedIn(true); // Ustawienie globalnego stanu zalogowania
          await checkLoginStatus(); // Opcjonalne odświeżenie statusu logowania
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Wystąpił problem podczas przetwarzania żądania!");
      }
    } catch (err) {
      console.error("Błąd połączenia z serwerem:", err);
      setError("Wystąpił błąd podczas łączenia z serwerem!");
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Rejestracja" : "Logowanie"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nazwa użytkownika:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {isRegistering && (
          <>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="phone">Telefon:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label htmlFor="city">Miasto:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <label htmlFor="password">Hasło:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="confirmPassword">Powtórz hasło:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </>
        )}
        
        {error && <p className="error-message">{error}</p>}
        <button type="submit">{isRegistering ? "Zarejestruj się" : "Zaloguj się"}</button>
      </form>
      <p>
        {isRegistering ? (
          <>
            Masz już konto?{" "}
            <a href="#" onClick={() => setIsRegistering(false)}>
              Zaloguj się
            </a>
          </>
        ) : (
          <>
            Nie masz konta?{" "}
            <a href="#" onClick={() => setIsRegistering(true)}>
              Zarejestruj się
            </a>
          </>
        )}
      </p>
    </div>
  );
}

export default Login;
