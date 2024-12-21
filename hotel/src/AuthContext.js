import React, { createContext, useState, useEffect } from "react";

// Tworzenie kontekstu
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funkcja do sprawdzania statusu logowania
  const checkLoginStatus = async () => {
    try {
      const response = await fetch("https://example.com/api/check-session", {
        method: "GET",
        credentials: "include", // Wysyłanie cookies do backendu
      });
      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Błąd podczas sprawdzania statusu logowania:", error);
      setIsLoggedIn(false);
    }
  };

  const handleLogout = async() => {
    try {
      const response = await fetch("https://example.com/api/logout", {
        method: "POST",
        credentials: "include", // Wysyłanie cookies do backendu
      });
      if(response.ok){
        setIsLoggedIn(false);
        alert("Wylogowano pomyślnie!");
      } else {
        alert("Wystąpił problem podczas wylogowywania.");
      }
    }
    catch(error){
      console.error("Błąd podczas wylogowania:", error);
      alert("Nie udało się połączyć z serwerem.");
    }
  };

  // Sprawdzenie statusu logowania przy załadowaniu aplikacji
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Udostępnienie funkcji i stanu w kontekście
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, checkLoginStatus, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
