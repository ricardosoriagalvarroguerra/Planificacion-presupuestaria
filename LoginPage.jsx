// src/pages/LoginPage.jsx
import React, { useState } from 'react';

function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validUsers = ["mcalvino", "ajustinianon", "vgonzales", "vmoreira"];
  const validPassword = "2025presupuesto";

  const handleLogin = () => {
    if (validUsers.includes(username) && password === validPassword) {
      onLoginSuccess();
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h2>Login - Presupuesto 2025</h2>
      <div>
        <label>Usuario: </label>
        <input
          style={{ marginBottom: "1rem" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña: </label>
        <input
          style={{ marginBottom: "1rem" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default LoginPage;
