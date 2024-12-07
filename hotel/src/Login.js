import React from "react";

function Login() {
  return (
    <div className="login-container">
      <h2>Logowanie</h2>
      <form>
        <label htmlFor="username">Nazwa użytkownika:</label>
        <input type="text" id="username" required />
        <label htmlFor="password">Hasło:</label>
        <input type="password" id="password" required />
        <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
}

export default Login;
