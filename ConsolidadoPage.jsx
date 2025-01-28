// src/pages/ConsolidadoPage.jsx
import React from 'react';
import { formatTwoDecimals } from '../utils/calculos';

function ConsolidadoPage() {
  // Datos de ejemplo para el "cuadro 9"
  const cuadro9 = [
    { Concepto: "Sueldo base 2024", Monto: 100000 },
    { Concepto: "Sueldo base 2025", Monto: 120000 }
  ];

  return (
    <div>
      <h1>Consolidado</h1>

      <h2>Cuadro 9</h2>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Concepto</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Monto</th>
          </tr>
        </thead>
        <tbody>
          {cuadro9.map((item, i) => (
            <tr key={i}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.Concepto}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{formatTwoDecimals(item.Monto)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Aquí podrías añadir más tablas (Cuadro 10, 11, etc.)</p>
    </div>
  );
}

export default ConsolidadoPage;
