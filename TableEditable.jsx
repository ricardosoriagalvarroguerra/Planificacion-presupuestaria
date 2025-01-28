// src/components/TableEditable.jsx
import React from 'react';

/**
 * @param {Array} data - array de objetos
 * @param {Function} onUpdate - callback para actualizar data
 * @param {Array} disabledFields - columnas que NO se pueden editar
 */
function TableEditable({ data, onUpdate, disabledFields = [] }) {
  if (!data || data.length === 0) {
    return <p>No hay datos para mostrar.</p>;
  }

  const columns = Object.keys(data[0]);

  const handleChange = (rowIndex, col, newValue) => {
    let parsedValue = newValue;
    if (!isNaN(parsedValue) && parsedValue.trim() !== "") {
      parsedValue = parseFloat(parsedValue);
    }
    const updated = [...data];
    updated[rowIndex] = { ...updated[rowIndex], [col]: parsedValue };
    onUpdate(updated);
  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2" }}>
          {columns.map((col) => (
            <th key={col} style={{ border: "1px solid #ccc", padding: "8px" }}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => {
              const isDisabled = disabledFields.includes(col);
              const value = row[col] ?? "";
              return (
                <td key={col} style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {isDisabled ? (
                    <span>{value}</span>
                  ) : (
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      value={value}
                      onChange={(e) => handleChange(rowIndex, col, e.target.value)}
                    />
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableEditable;
