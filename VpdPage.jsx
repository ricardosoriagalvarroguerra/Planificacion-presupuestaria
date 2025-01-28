// src/pages/VpdPage.jsx
import React, { useState, useEffect } from 'react';
import {
  calcularMisiones,
  calcularConsultores,
  formatTwoDecimals
} from '../utils/calculos';
import { DPP_VALORES } from '../constants/dppValores';
import TableEditable from '../components/TableEditable';
import ValueBox from '../components/ValueBox';

function VpdPage() {
  // Ejemplo de datos "iniciales"
  const [misionesData, setMisionesData] = useState([
    { cant_funcionarios: 2, costo_pasaje: 100, dias: 5, alojamiento: 80, perdiem_otros: 30, movilidad: 10 },
    { cant_funcionarios: 1, costo_pasaje: 200, dias: 3, alojamiento: 120, perdiem_otros: 20, movilidad: 15 }
  ]);

  const [consultoresData, setConsultoresData] = useState([
    { cantidad_funcionarios: 2, cantidad_meses: 6, monto_mensual: 5000 },
    { cantidad_funcionarios: 1, cantidad_meses: 12, monto_mensual: 10000 }
  ]);

  // Vista actual: "Misiones" o "Consultorías"
  const [view, setView] = useState("Misiones");
  // Mostrar sección "Requerimiento del Área" (solo lectura)
  const [showAreaRequirement, setShowAreaRequirement] = useState(true);

  const [totalMisiones, setTotalMisiones] = useState(0);
  const [totalConsultorias, setTotalConsultorias] = useState(0);

  // Valores DPP
  const dppValueMisiones = DPP_VALORES.VPD.misiones;
  const dppValueConsultorias = DPP_VALORES.VPD.consultorias;

  useEffect(() => {
    const calc = calcularMisiones(misionesData);
    const sum = calc.reduce((acc, row) => acc + (row.total || 0), 0);
    setTotalMisiones(sum);
  }, [misionesData]);

  useEffect(() => {
    const calc = calcularConsultores(consultoresData);
    const sum = calc.reduce((acc, row) => acc + (row.total || 0), 0);
    setTotalConsultorias(sum);
  }, [consultoresData]);

  return (
    <div>
      <h1>Sección VPD</h1>
      <button onClick={() => { setView("Misiones"); setShowAreaRequirement(true); }}>Misiones</button>
      <button onClick={() => { setView("Consultorías"); setShowAreaRequirement(true); }}>Consultorías</button>

      <div style={{ marginTop: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={showAreaRequirement}
            onChange={() => setShowAreaRequirement(!showAreaRequirement)}
          />
          Mostrar solo "Requerimiento del Área"
        </label>
      </div>

      {view === "Misiones" && (
        <div>
          <h2>VPD > Misiones</h2>
          {showAreaRequirement ? (
            // Modo "Requerimiento del Área" (solo lectura)
            <div>
              <p>Requerimiento del Área (solo lectura)</p>
              <p>Total Misiones: <strong>{formatTwoDecimals(totalMisiones)}</strong></p>
              <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f2f2f2' }}>
                    <th>cant_funcionarios</th>
                    <th>costo_pasaje</th>
                    <th>dias</th>
                    <th>alojamiento</th>
                    <th>perdiem_otros</th>
                    <th>movilidad</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                  {calcularMisiones(misionesData).map((row, i) => (
                    <tr key={i}>
                      <td>{row.cant_funcionarios}</td>
                      <td>{row.costo_pasaje}</td>
                      <td>{row.dias}</td>
                      <td>{row.alojamiento}</td>
                      <td>{row.perdiem_otros}</td>
                      <td>{row.movilidad}</td>
                      <td>{formatTwoDecimals(row.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Modo "DPP 2025" (editable)
            <div>
              <h3>Editar Misiones (DPP 2025)</h3>
              <ValueBox label="Suma total" value={formatTwoDecimals(totalMisiones)} />
              <ValueBox label="Monto DPP 2025" value={formatTwoDecimals(dppValueMisiones)} />
              <ValueBox
                label="Diferencia"
                value={formatTwoDecimals(dppValueMisiones - totalMisiones)}
                bgColor={(dppValueMisiones - totalMisiones) === 0 ? "green" : "#fb8500"}
              />
              <TableEditable
                data={calcularMisiones(misionesData)}
                onUpdate={setMisionesData}
                disabledFields={[
                  "total_pasaje",
                  "total_alojamiento",
                  "total_perdiem_otros",
                  "total_movilidad",
                  "total"
                ]}
              />
            </div>
          )}
        </div>
      )}

      {view === "Consultorías" && (
        <div>
          <h2>VPD > Consultorías</h2>
          {showAreaRequirement ? (
            // Modo "Requerimiento del Área" (solo lectura)
            <div>
              <p>Requerimiento del Área (solo lectura)</p>
              <p>Total Consultorías: <strong>{formatTwoDecimals(totalConsultorias)}</strong></p>
              <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f2f2f2' }}>
                    <th>cantidad_funcionarios</th>
                    <th>cantidad_meses</th>
                    <th>monto_mensual</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                  {calcularConsultores(consultoresData).map((row, i) => (
                    <tr key={i}>
                      <td>{row.cantidad_funcionarios}</td>
                      <td>{row.cantidad_meses}</td>
                      <td>{row.monto_mensual}</td>
                      <td>{formatTwoDecimals(row.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Modo "DPP 2025" (editable)
            <div>
              <h3>Editar Consultorías (DPP 2025)</h3>
              <ValueBox label="Suma total" value={formatTwoDecimals(totalConsultorias)} />
              <ValueBox label="Monto DPP 2025" value={formatTwoDecimals(dppValueConsultorias)} />
              <ValueBox
                label="Diferencia"
                value={formatTwoDecimals(dppValueConsultorias - totalConsultorias)}
                bgColor={(dppValueConsultorias - totalConsultorias) === 0 ? "green" : "#fb8500"}
              />
              <TableEditable
                data={calcularConsultores(consultoresData)}
                onUpdate={setConsultoresData}
                disabledFields={["total"]}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default VpdPage;
