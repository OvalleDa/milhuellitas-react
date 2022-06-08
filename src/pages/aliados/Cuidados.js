import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom';
import '../../css/aliados/cuidados.css'
import Banner16 from '../../assets/img/aliados/bannercuidados2.png'
import Banner17 from '../../assets/img/aliados/bannercuidados5.png'
import Banner18 from '../../assets/img/aliados/bannercuidados4.png'
import Banner19 from '../../assets/img/aliados/bannercuidados3.png'

const Cuidados = () => {
  return (
    <>
    <Header/>
    <main>
    <section class="banner">
            <ul>
                <li><img src={Banner16}/></li>
                <li><img src={Banner17}/></li>
                <li><img src={Banner18}/></li>
                <li><img src={Banner19}/></li>
            </ul>
        </section>
        <section class="titleFood">
              <h2>¡Los mejores cuidados para tu mascota!</h2>
          </section>
    
          
          <section class="buttonsBack">
          <Link to="/aliados/accesorios" class="accesorios link" >Accesorios</Link>
          <Link to="/aliados/comida" class="comida link" >Comida</Link>
          <Link to="/aliados/juguetes" class="juguetes link" >Juguetes</Link>
          <Link to="/aliados/cuidados" class="cuidados link" >Cuidados</Link>
        </section>
        <section class="alliedFood">

            <div class="card d1">
                <div class="content">
                    <h2>Corta Uñas y Limas</h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d2">
                <div class="content">
                        <h2>Cepillos de Dientes</h2>
                        <a href="#">Ver tienda</a> 
                </div>
            </div>

            <div class="card d3">
                <div class="content">
                    <h2>Guantes </h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d4">
                <div class="content">
                    <h2>Jabones</h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d5">
                <div class="content">
                    <h2>Cepillos de baño</h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d6">
                <div class="content">
                    <h2>Shampoo para Perros</h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d7">
                <div class="content">
                    <h2>Hidratante de Patitas</h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d8">
                <div class="content">
                    <h2>Arena para Gato</h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d9">
                <div class="content">
                    <h2>Shampoo para Gatos</h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d10">
                <div class="content">
                    <h2>Toallitas y limpiadores</h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d11">
                <div class="content">
                    <h2>Kit de emergencia</h2>
                    <a href="#">Ver tienda</a>
                </div>
            </div>

            <div class="card d12">
                <div class="content">
                    <h2>Paseadores</h2>
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

export default Cuidados