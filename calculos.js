// src/utils/calculos.js

// Calcula "misiones"
export function calcularMisiones(data = []) {
  return data.map(row => {
    const cant_funcionarios = row.cant_funcionarios || 0;
    const costo_pasaje = row.costo_pasaje || 0;
    const dias = row.dias || 0;
    const alojamiento = row.alojamiento || 0;
    const perdiem_otros = row.perdiem_otros || 0;
    const movilidad = row.movilidad || 0;

    const total_pasaje = cant_funcionarios * costo_pasaje;
    const total_alojamiento = cant_funcionarios * dias * alojamiento;
    const total_perdiem_otros = cant_funcionarios * dias * perdiem_otros;
    const total_movilidad = cant_funcionarios * movilidad;

    const total = total_pasaje + total_alojamiento + total_perdiem_otros + total_movilidad;

    return {
      ...row,
      total_pasaje,
      total_alojamiento,
      total_perdiem_otros,
      total_movilidad,
      total
    };
  });
}

// Calcula "consultorías"
export function calcularConsultores(data = []) {
  return data.map(row => {
    const cantidad_funcionarios = row.cantidad_funcionarios || 0;
    const cantidad_meses = row.cantidad_meses || 0;
    const monto_mensual = row.monto_mensual || 0;

    const total = cantidad_funcionarios * cantidad_meses * monto_mensual;
    return { ...row, total };
  });
}

// Dar formato con 2 decimales
export function formatTwoDecimals(value) {
  if (typeof value !== 'number') return '0.00';
  return value.toLocaleString('es-CL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Ejemplo para colorear diferencias
export function getColorDiferencia(val) {
  return val !== 0 ? 'bg-orange text-white' : 'bg-green text-white';
}
