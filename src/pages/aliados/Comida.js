import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom';
import '../../css/aliados/comida.css'
import Banner9 from '../../assets/img/aliados/bannercomida4.jpg'
import Banner10 from '../../assets/img/aliados/comidasbanner.png'
import Banner11 from '../../assets/img/aliados/bannercomida5.png'
import Banner12 from '../../assets/img/aliados/bannercomida3.png'

const Comida = () => {
  return (
    <>
    <Header/>
    <main>
                <section class="banner">
                    <ul>
                        <li><img src={Banner9}/></li>
                        <li><img src={Banner10}/></li>
                        <li><img src={Banner11}/></li>
                        <li><img src={Banner12}/></li>
                    </ul>
                </section>
                <section class="titleFood">
                      <h2>¡La mejor y más saludable comida para tu mascota!</h2>
                  </section>
                <section class="buttonsBack">
                <Link to="/aliados/accesorios" class="accesorios link" >Accesorios</Link>
                <Link to="/aliados/comida" class="comida link" >Comida</Link>
                <Link to="/aliados/juguetes" class="juguetes link" >Juguetes</Link>
                <Link to="/aliados/cuidados" class="cuidados link" >Cuidados</Link>
                </section>  
                <section class="alliedFood">
      
                    <div class="card b1">
                        <div class="contente">
                            <h2>Purina Casera</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b2">
                        <div class="contente">
                            <h2>Pasteles Caseros</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b3">
                        <div class="contente">
                            <h2>Galletas</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b4">
                        <div class="contente">
                            <h2>Cupcakes Caseros</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b5">
                        <div class="contente">
                            <h2>Comida casera para Perros</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b6">
                        <div class="contente">
                            <h2>Snacks</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b7">
                        <div class="contente">
                            <h2>Comida casera para Gatos</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b8">
                        <div class="contente">
                            <h2>Galletas de Pollo</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b9">
                        <div class="contente">
                            <h2>Premios</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b10">
                        <div class="contente">
                            <h2>Premios Naturales</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b11">
                        <div class="contente">
                            <h2>Snacks de Costilla</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>

                    <div class="card b12">
                        <div class="contente">
                            <h2>Snacks de Avena</h2>
                            <a href="#">Ver tienda</a>
                        </div>
                    </div>
                </section>
                <section class="titleSection">
                      <h1>¡Síguenos ayudando!</h1>
                      <p>¿Sabías que por cada compra que hagas en las marcas asociadas, éstas donan el 10%  de lo recaudado a nuestra fundación?</p>
                  </section>
      
    </main>

    <Footer/>
    </>
  )
}

export default Comida