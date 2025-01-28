// src/pages/ActualizacionPage.jsx
import React from 'react';
import { formatTwoDecimals } from '../utils/calculos';

function ActualizacionPage() {
  // Datos de ejemplo
  const misionesUpdate = [
    {
      "Unidad Organizacional": "VPD",
      "Requerimiento del Área": 150000,
      "Monto DPP 2025": 168000
    },
    {
      "Unidad Organizacional": "VPO",
      "Requerimiento del Área": 450000,
      "Monto DPP 2025": 434707
    }
  ];

  return (
    <div>
      <h1>Actualización</h1>
      <h2>Tabla de Misiones</h2>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Unidad Organizacional</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Requerimiento del Área</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Monto DPP 2025</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Diferencia</th>
          </tr>
        </thead>
        <tbody>
          {misionesUpdate.map((row, i) => {
            const diff = row["Monto DPP 2025"] - row["Requerimiento del Área"];
            const styleDiff = {
              backgroundColor: diff !== 0 ? "#fb8500" : "green",
              color: "white"
            };

            return (
              <tr key={i}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row["Unidad Organizacional"]}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{formatTwoDecimals(row["Requerimiento del Área"])}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{formatTwoDecimals(row["Monto DPP 2025"])}</td>
                <td style={{ ...styleDiff, border: '1px solid #ccc', padding: '8px' }}>{formatTwoDecimals(diff)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ActualizacionPage;
