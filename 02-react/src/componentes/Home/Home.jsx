import './Home.css'
import logo from '../assets/React.png'
import boot from '../assets/Bootstrap.png'
import vite from '../assets/Vite.png'



function Home () {
    return(

        <>

        <h1>Bienvenidos a mi proyecto final</h1>

        <h2>En este breve curso descubrimos las siguientes herramientas</h2>

        <section class="section-art">

          <article class="article-art">

          <img src= {logo} className="App-logo" alt="logo" />

            <p>
            React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. 
            </p>
            
          </article>

          <article class="article-art">

          <img src= {boot} className="App-logo" alt="logo" />

            <p>
            Bootstrap es un framework que permite a los desarrolladores web construir páginas web responsives de una forma más rápida y sencilla.<details> En este sentido, proporciona un conjunto de componentes y plantillas CSS, HTML y JavaScript que cualquiera puede utilizar o modificar de manera gratuita. </details>
            </p>
            
          </article>

          <article class="article-art">

          <img src= {vite} className="App-logo" alt="logo" />

            <p>
            Es una herramienta para Frontend, creada por Evan You, <details class="vermas">mismo creador de Vuejs, esta herramienta nos permitirá crear aplicaciones de Javascript usando algún framework o libreria como ReactJs, Vuejs, Angular ya sea con algún framework especifico o ya sea Vanillajs.</details>
            </p>
            
          </article>
          
        </section>
  
        </>

    );
}


export default Home;