import './Home.css'
import logo from '../assets/React.png'
import boot from '../assets/Bootstrap.png'
import vite from '../assets/Vite.png'



function Home() {
  return (

    <>

      <h1>Bienvenidos a mi proyecto final</h1>

      <h2>En este breve curso descubrimos las siguientes herramientas</h2>

      <section class="section-art">

        <article class="article-art">

          <img src={logo} className="App-logo" alt="logo" />


        </article>

        <article class="article-art">

          <img src={boot} className="App-logo" alt="logo" />



        </article>

        <article class="article-art">

          <img src={vite} className="App-logo" alt="logo" />



        </article>

      </section>

      <section class="section-art">

        <div className='roto'>

          <h2 className='art-h2'>REACT</h2>

          <p className='home-p'>
            <details className='art-deta'>es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.
            </details>
          </p>

        </div>


        <div className='roto'>

          <h2 className='art-h2'>BOOTSTRAP</h2>

          <p className='home-p'>
            <details> es un framework que permite a los desarrolladores web construir páginas web responsives de una forma más rápida y sencilla. En este sentido, proporciona un conjunto de componentes y plantillas CSS, HTML y JavaScript que cualquiera puede utilizar o modificar de manera gratuita. </details>
          </p>

        </div>


        <div className='roto'>

          <h2 className='art-h2'>VITE</h2>

          <p className='home-p'>
            <details>Es una herramienta para Frontend, creada por Evan You, mismo creador de Vuejs, esta herramienta nos permitirá crear aplicaciones de Javascript usando algún framework o libreria como ReactJs, Vuejs, Angular ya sea con algún framework especifico o ya sea Vanillajs.</details>
          </p>

        </div>



      </section>

    </>

  );
}


export default Home;