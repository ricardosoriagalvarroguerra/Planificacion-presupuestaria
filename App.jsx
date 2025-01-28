// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importamos nuestras páginas
import LoginPage from './pages/LoginPage';
import VpdPage from './pages/VpdPage';
import VpoPage from './pages/VpoPage';
import VpfPage from './pages/VpfPage';
import VpePage from './pages/VpePage';
import PrePage from './pages/PrePage';
import ActualizacionPage from './pages/ActualizacionPage';
import ConsolidadoPage from './pages/ConsolidadoPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    // Mostrar la pantalla de Login si no está logueado
    return <LoginPage onLoginSuccess={() => setLoggedIn(true)} />;
  }

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Menú lateral */}
        <nav style={{
          width: '200px', 
          borderRight: '1px solid #ccc', 
          padding: '1rem',
          overflowY: 'auto'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/">Página Principal</Link></li>
            <li><Link to="/vpd">VPD</Link></li>
            <li><Link to="/vpo">VPO</Link></li>
            <li><Link to="/vpf">VPF</Link></li>
            <li><Link to="/vpe">VPE</Link></li>
            <li><Link to="/pre">PRE</Link></li>
            <li><Link to="/actualizacion">Actualización</Link></li>
            <li><Link to="/consolidado">Consolidado</Link></li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<h1>Página Principal</h1>} />
            <Route path="/vpd" element={<VpdPage />} />
            <Route path="/vpo" element={<VpoPage />} />
            <Route path="/vpf" element={<VpfPage />} />
            <Route path="/vpe" element={<VpePage />} />
            <Route path="/pre" element={<PrePage />} />
            <Route path="/actualizacion" element={<ActualizacionPage />} />
            <Route path="/consolidado" element={<ConsolidadoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
