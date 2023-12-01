import './Footer.css'

function linkFuncionando() {
    console.log('Este link funciona perfectamente!');
    alert('Este link funciona perfectamente!');
}


function Footer() {
    return (
        <>
            <div class="div-container">

                <footer class="contacto text-center text-white">

                    <section class="contacto" id="contacto">
                        <div class="contenido-seccion">
                            
                            <h2 class="titulo-seccion">CONTACTO</h2>

                            <div class="container">
                        <section class="section-container">
                            <a onClick={linkFuncionando} class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-facebook-f"></i></a>

                            <a onClick={linkFuncionando} class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-twitter"></i></a>

                            <a onClick={linkFuncionando} class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-google"></i></a>

                            <a onClick={linkFuncionando} class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-instagram"></i></a>

                            <a onClick={linkFuncionando} class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-linkedin-in"></i></a>

                            <a onClick={linkFuncionando} class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-github"></i></a>
                        </section>


                    </div>

                            <div class="fila">
                                <div class="col">
                                    <h2>
                                        <i class="fa-solid fa-phone"></i> Teléfono
                                    </h2>
                                    <a href="tel:11 4945 1834" class="info-telefono">11 4945 1834</a>
                                </div>
                                <div class="col">
                                    <h2>
                                        <i class="fa-solid fa-envelope"></i> Correo
                                    </h2>
                                    <a href="mailto:ejemplo.ejemplo@gmail.com" class="info-contacto">ejemplo.ejemplo@gmail.com</a>
                                </div>
                                <div class="col">
                                    <h2>
                                        <i class="fa-solid fa-globe"></i> Página Web
                                    </h2>
                                    <a href="https://www.google.com.ar" target="_blank" class="info-contacto">www.ejemplo.com</a>
                                </div>
                            </div>
                        </div>

                    </section>



                    <div class="text-center p-3">
                        © 2023 Copyright.
                    </div>
                </footer>

            </div>

        </>


    );
}

export default Footer;



