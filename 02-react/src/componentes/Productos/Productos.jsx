import './Productos.css'
import React, { useState, useEffect } from 'react';

function Productos() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false
  });

  useEffect(() => {
    const todosSeleccionados = Object.values(checkboxes).every(val => val === true);
    if (todosSeleccionados) {
      alert('¡Completaste las compras!');
    }
  }, [checkboxes]);

  const manejarCambio = (event) => {
    setCheckboxes({...checkboxes, [event.target.name]: event.target.checked});
  };

  const resetear = () => {
    setCheckboxes({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false
    });
  };

  return (
    <div className='lista-div'>

<h1 className='titulo-h1'>Lista de Supermercado</h1>

      <label className='lista-l'>
       PAN
        <input className='lista-c' type="checkbox" name="checkbox1" checked={checkboxes.checkbox1} onChange={manejarCambio} />
        
      </label>

      <label className='lista-l'>
       AZUCAR
        <input className='lista-c' type="checkbox" name="checkbox2" checked={checkboxes.checkbox2} onChange={manejarCambio} />
      </label>

      <label className='lista-l'>
       ARROZ
        <input className='lista-c' type="checkbox" name="checkbox3" checked={checkboxes.checkbox3} onChange={manejarCambio} />
        
      </label>

      <label className='lista-l'>
       CARNE
        <input className='lista-c' type="checkbox" name="checkbox4" checked={checkboxes.checkbox4} onChange={manejarCambio} />
        
      </label>

      <label className='lista-l'>
       LECHE
        <input className='lista-c' type="checkbox" name="checkbox5" checked={checkboxes.checkbox5} onChange={manejarCambio} />
        
      </label>

      <button className='btn btn-primary' onClick={resetear}>Resetear</button>

    </div>
  );
}

export default Productos;
