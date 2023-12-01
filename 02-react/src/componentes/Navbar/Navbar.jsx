import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar">

            <p class="titulo.p"> 

            <Link className='nav-link' to='/Home'>Mi Proyecto</Link> 

            </p>

            <div class="nav-container">

                <div class="nav-list">
                    <ul class="navbar-ul">

                        <li class="nav-li">
                            <Link className='nav-link' to={'/Formulario'}>Formulario</Link>
                        </li>

                        <li class="nav-li">
                            <Link className='nav-link' to={'/Productos'}>Productos</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;