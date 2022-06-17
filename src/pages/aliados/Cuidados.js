import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductList from '../../components/productList/ProductList'
import AffiliateWrapper from '../../components/affiliateWrapper/AffiliateWrapper'
import products from '../../constants/products'
import Carousel from '../../components/carousel/Carousel'

const Cuidados = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel images={[]} />
        <AffiliateWrapper title="¡Los mejores accesorios para tus mascotas!">
          <ProductList list={products.health.data} />
        </AffiliateWrapper>
      </main>
      <Footer />
    </>
  )
}

export default Cuidados
