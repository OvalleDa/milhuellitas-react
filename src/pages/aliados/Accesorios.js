import React from 'react'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom';
import '../../css/aliados/accesorios.css'
import Banner5 from '../../assets/img/aliados/camagatobanner.png'
import Banner6 from '../../assets/img/aliados/banneraccesorios.png'
import Banner7 from '../../assets/img/aliados/banneraccesorios2.png'
import Banner8 from '../../assets/img/aliados/banneraccesorios3.png'
import Footer from '../../components/footer/Footer'

const Accesorios = () => {
  return (
      <>
    <Header/>
    <main>

    <section class="banner">
      <ul>
          <li><img src={Banner5}/></li>
          <li><img src={Banner6}/></li>
          <li><img src={Banner7}/></li>
          <li><img src={Banner8}/></li>
      </ul>
    
  </section>



    <section class="titleFood">
        <h2>¡Los mejores accesorios para tus mascotas!</h2>
    </section>

    <section class="buttonsBack">

      <Link to="/aliados/accesorios" class="accesorios link" >Accesorios</Link>
      <Link to="/aliados/comida" class="comida link" >Comida</Link>
      <Link to="/aliados/juguetes" class="juguetes link" >Juguetes</Link>
      <Link to="/aliados/cuidados" class="cuidados link" >Cuidados</Link>
  </section>  
    


    <section class="alliedFood">

        <div class="card a1">
            <div class="contente">
                <h2>Comedores</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a2">
            <div class="contente">
                <h2>Peluches</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a3">
            <div class="contente">
                <h2>Correas</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a4">
            <div class="contente">
                <h2>Gimnasios</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a5">
            <div class="contente">
                <h2>Camas</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a6">
            <div class="contente">
                <h2>Kits</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a7">
            <div class="contente">
                <h2>Pañoletas</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a8">
            <div class="contente">
                <h2>Mochilas</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a9">
            <div class="contente">
                <h2>Retractiles</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a10">
            <div class="contente">
                <h2>Areneros</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a11">
            <div class="contente">
                <h2>Arneses</h2>
                <a href="#">Ver tienda</a>
            </div>
        </div>

        <div class="card a12">
            <div class="contente">
                <h2>Placas</h2>
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

export default Accesorios;