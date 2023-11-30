import './Productos.css'

const Productos = () => {


  return (

    <div className='Productos lista-compras'>
      <h1 className='titulo-compras'>Lista de Supermercado</h1>

      <label className='lista-label' for="cbox1">PAN</label>
      <input className='lista-check' type="checkbox" id="cbox1" value="second_checkbox" />

      <label className='lista-label' for="cbox2">ARROZ</label>
      <input className='lista-check' type="checkbox" id="cbox2" value="check" />


      <label className='lista-label' for="cbox3">AZUCAR</label>
      <input className='lista-check' type="checkbox" id="cbox3" value="check" />


      <label className='lista-label' for="cbox4">SAL</label>
      <input className='lista-check' type="checkbox" id="cbox4" value="check" />


      <label className='lista-label' for="cbox5">FIDEOS</label>
      <input className='lista-check' type="checkbox" id="cbox5" value="second_checkbox" />

      <label className='lista-label' for="cbox6">CARNE</label>
      <input className='lista-check' type="checkbox" id="cbox6" value="second_checkbox" />

      <label className='lista-label' for="cbox7">POLLO</label>
      <input className='lista-check' type="checkbox" id="cbox7" value="second_checkbox" />

    </div>



  );
}


export default Productos;