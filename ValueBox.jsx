// src/components/ValueBox.jsx
import React from 'react';

function ValueBox({ label, value, bgColor = "#6c757d" }) {
  const boxStyle = {
    display: "inline-block",
    backgroundColor: bgColor,
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
    color: "white",
    fontWeight: "bold",
  };
  const labelStyle = { fontSize: "14px" };
  const valueStyle = { fontSize: "20px" };

  return (
    <div style={boxStyle}>
      <div style={labelStyle}>{label}</div>
      <div style={valueStyle}>{value}</div>
    </div>
  );
}

export default ValueBox;
