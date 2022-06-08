import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/aliados/aliados.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner1 from '../../assets/img/aliados/banner-aliados1.png'
import Bannergif from '../../assets/img/aliados/banner-aliados1.gif'
import Banner3 from '../../assets/img/aliados/banner-aliados3.png'
import Banner4 from '../../assets/img/aliados/banner-aliados4.gif'
import Acce1 from '../../assets/img/aliados/accesorios.png'
import Acce2 from '../../assets/img/aliados/comida.png'
import Acce3 from '../../assets/img/aliados/juguetes.png'
import Acce4 from '../../assets/img/aliados/cuidados.png'
import Huellita from '../../assets/img/aliados/huellita.png'
import Aliados1 from "../../assets/img/aliados/1.png"
import Aliados2 from "../../assets/img/aliados/2.png"
import Aliados3 from "../../assets/img/aliados/3.png"
import Aliados4 from "../../assets/img/aliados/4.png"
import Aliados5 from "../../assets/img/aliados/aliados2.png"
import Aliados6 from "../../assets/img/aliados/aliados4 copy.png"
import Aliados7 from "../../assets/img/aliados/aliados7.png"
import Aliados8 from "../../assets/img/aliados/1.png"


const Aliados = () => {
  return (
    <div>
        <Header></Header>
        <div className="main">
        <section class="fondo">
    
            <section class="banner">
              <ul>
                <li><img src={Banner1}/></li>
                <li><img src={Bannergif}/></li>
                <li><img src={Banner3}/></li>
                <li><img src={Banner4}/></li>
            </ul>
            </section>

            <section class="titleAllies">
              <h2>En la fundacion Mil Huellitas sabemos lo importante que es ayudar.</h2>
              <h2>¡Todos los productos que verás son de pequeños grandes emprendimientos!</h2>
            </section>

            <section class="cardsProducts">
      
              <div class="cardAccessories">
                <div class="card">
                  <div class="imgBx">
                    <img src={Acce1}/>
                  </div>
                  <div class="contentBx">
                    <h2>Accesorios</h2>
                    <Link to="/aliados/accesorios"></Link>
                  </div>
                </div>
              </div>
      
              <div class="cardFood">
                <div class="card">
                  <div class="imgBx">
                    <img src={Acce2}/>
                  </div>
                  <div class="contentBx">
                    <h2>Comida</h2>
                    <a href="comida.html">Mirar productos</a>
                  </div>
                </div>
              </div>
      
              <div class="cardToys">
                <div class="card">
                  <div class="imgBx">
                    <img src={Acce3}/>
                  </div>
                  <div class="contentBx">
                    <h2>Juguetes</h2>
                    <a href="juguetes.html">Mirar productos</a>
                  </div>
                </div>
              </div>
      
              <div class="cardCare">
                <div class="card">
                  <div class="imgBx">
                    <img src={Acce4}/>
                  </div>
                  <div class="contentBx">
                    <h2>Cuidados</h2>
                    <a href="cuidados.html"><p>Mirar productos</p></a>
                  </div>
                </div>
              </div>
            </section>
          </section>
 
      
            <section class="title-Allied-Brands"> 
              <img src={Huellita} class="huellita"/>
              <h1 class="marcas">Nuestras marcas</h1>
              <img src={Huellita} class="huellita2"/>
            </section>
      
            
            <section class="alliedBrands">
      
              <div class="ar">
                <div class="aliados">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img src={Aliados1}/>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="">@PetWalk</a>
                            </h3>
                            <p>Paseamos a tus mascotas, dedicanto tiempo y amor.</p>
                        </div>
                    </div>
                </div>  
                <div class="prueba">        
                  <div class="button bn1">
                  <a href="#"><h4>Más información</h4></a>
                </div></div>
              </div>
      
              <div class="ar2">
                <div class="aliados">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img src={Aliados2}/>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="">@PetFood</a>
                            </h3>
                            <p>Tenemos los mejores productos de comida para tus mascotas.</p>
                        </div>
                    </div>
                </div> 
                <div class="prueba">        
                  <div class="button bn2">
                  <a href="#"><h4>Más información</h4></a>
                </div></div>
              </div>  
      
              <div class="ar3">
                <div class="aliados">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img src={Aliados3}/>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="">@Mascoti</a>
                            </h3>
                            <p>Accesorios y mucho más para tus mascotas</p>
                        </div>
                    </div>
                </div> 
                <div class="prueba">        
                  <div class="button bn3">
                  <a href="#"><h4>Más información</h4></a>
                </div></div>
              </div>  
      
      
              <div class="ar4">
                <div class="aliados">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img src={Aliados4}/>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="">@Guardde</a>
                            </h3>
                            <p>Guarderia canina que te ayuda 24/7 siempre que nos necesites</p>
                        </div>
                    </div>
                </div> 
                <div class="prueba">        
                  <div class="button bn4">
                  <a href="#"><h4>Más información</h4></a>
                </div></div>
              </div> 
      
              <div class="ar5">
                <div class="aliados">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img src={Aliados5}/>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="">@VetZoo</a>
                            </h3>
                            <p>Porque tu mascota merece los mejores cuidados veterinarios</p>
                        </div>
                    </div>
                </div> 
                <div class="prueba">        
                  <div class="button b5">
                  <a href="#"><h4>Más información</h4></a>
                </div></div>
              </div> 
      
              <div class="ar6">
                <div class="aliados">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img src={Aliados6}/>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="">@ToysPet</a>
                            </h3>
                            <p>Los mejores jueguetes para perros y gatos</p>
                        </div>
                    </div>
                </div> 
                <div class="prueba">        
                  <div class="button bn6">
                  <a href="#"><h4>Más información</h4></a>
                </div></div>
              </div> 
      
              <div class="ar7">
                <div class="aliados">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img src={Aliados7}/>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="">@HousePet</a>
                            </h3>
                            <p>Accesorios, camas y mucho más en House Pet</p>
                        </div>
                    </div>
                </div> 
                <div class="prueba">        
                  <div class="button bn7">
                  <a href="#"><h4>Más información</h4></a>
                </div></div>
      
              </div> 
      
              <div class="ar8">
                <div class="aliados">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img src={Aliados8}/>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="">@ComSal</a>
                            </h3>
                            <p>Tu mascota merece la mejor comida saludable</p>
                        </div>
                    </div>
                </div> 
                <div class="prueba">        
                  <div class="button bn8">
                  <a href="#"><h4>Más información</h4></a>
                </div></div>
              </div> 
            </section>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Aliados;