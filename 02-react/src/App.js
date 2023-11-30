import '../src/css/App.css';
import Form from './componentes/Form/Form';
import Home from './componentes/Home/Home';
import Navbar from './componentes/Navbar/Navbar';
import { Routes, Route} from 'react-router-dom';
import Productos from './componentes/Productos/Productos';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <>

    <Navbar />


      <Routes>

        <Route path='/home' element= {<Home />} />
        <Route path='/formulario' element= {<Form />} />
        <Route path='/productos' element= {<Productos />} />

      </Routes>

      <Footer />
    
    </>
  );
}

export default App;
