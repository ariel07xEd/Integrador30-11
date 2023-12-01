import './Form.css'
import { useState } from "react";

const Form = () => {

    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [check, setCheck] = useState();

    const imprimirDatos = () => {
        console.log(nombre, email, password, check);
        console.log('Gracias!');
        alert('Gracias!');

        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
    }

    const borrarDatos = () => {
        setEmail('');
        setNombre('');
        setPassword('');
    }

    return (

        <form class="formulario">

            <h2 class="titulo-form">Formulario</h2>

            <div class="mb-3">
                <label for="nombre" class="form-label"></label>
                <input
                    type="text"
                    placeholder='Su nombre aqui..'
                    class="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label"></label>
                <input
                    type="email"
                    placeholder='Su email aqui..'
                    class="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label"></label>
                <input
                    type="password"
                    placeholder='Su contraseña aqui..'
                    class="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>



            <div class="mb-3 form-check">

                <label class="form-check-label" for="exampleCheck1">
                    Acepto "terminos y condiciones"
                    <input
                    type="checkbox"
                    class="form-check-input"
                    id='checkbox'
                    placeholder='hola'
                    value={check}
                    onChange={(e) => setCheck(e.target.value)}
                    required
                />
                    
                </label>

            </div>

            <button onClick={imprimirDatos} type="submit" class="btn btn-primary">Enviar</button>
            <button onClick={borrarDatos} type="reset" class="btn btn-secondary">Borrar Todo</button>

        </form>


    );


}

export default Form;