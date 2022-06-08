import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom';
import '../../css/aliados/juguetes.css'
import Banner12 from '../../assets/img/aliados/bannerjuguetes1.png'
import Banner13 from '../../assets/img/aliados/bannerjuguetes2.png'
import Banner14 from '../../assets/img/aliados/bannerjuguetes3.png'
import Banner15 from '../../assets/img/aliados/bannerjuguetes4.png'

const Juguetes = () => {
  return (
    <>
    <Header></Header>
      <main>
                <section class="banner">
                    <ul>
                        <li><img src={Banner12}/></li>
                        <li><img src={Banner13}/></li>
                        <li><img src={Banner14}/></li>
                        <li><img src={Banner15}/></li>
                    </ul>
                </section>
                <section class="titleFood">
                      <h2>¡Los mejores juguetes para tus amigos peludos!</h2>
                  </section>
                  <section class="buttonsBack">
                  <Link to="/aliados/accesorios" class="accesorios link" >Accesorios</Link>
                  <Link to="/aliados/comida" class="comida link" >Comida</Link>
                  <Link to="/aliados/juguetes" class="juguetes link" >Juguetes</Link>
                  <Link to="/aliados/cuidados" class="cuidados link" >Cuidados</Link>
                </section>  


                <section class="alliedFood">
      
                  <div class="card c1">
                      <div class="content">
                          <h2>Peluches</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c2">
                      <div class="content">
                          <h2>Juguetes de goma</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c3">
                      <div class="content">
                          <h2>Salchichas de Peluche</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c4">
                      <div class="content">
                          <h2>Huesos de Peluche</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c5">
                      <div class="content">
                          <h2>Juguetes con Sonaja</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c6">
                      <div class="content">
                          <h2>Pelotas de Tenis</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c7">
                      <div class="content">
                          <h2>Plumeros</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c8">
                      <div class="content">
                          <h2>Cuerdas</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c9">
                      <div class="content">
                          <h2>Juguetes para Gatos</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c10">
                      <div class="content">
                          <h2>Rascadores</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c11">
                      <div class="content">
                          <h2>Ratones de Juguete</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>

                  <div class="card c12">
                      <div class="content">
                          <h2>Juguetes para Gato</h2>
                          <a href="#">Ver tienda</a>
                      </div>
                  </div>
              </section>


              <section class="titleSection">
                  <h1>¡Síguenos ayudando!</h1>
                  <p>¿Sabías que por cada compra que hagas en las marcas asociadas, éstas donan el 10%  de lo recaudado a nuestra fundación?</p>
              </section>
      </main>
    <Footer></Footer>
    </>
  )
}

export default Juguetes