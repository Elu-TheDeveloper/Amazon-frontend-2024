import React from 'react'
import Layout from '../../components/Layout/Layout'
import CarouselEffects from '../../components/carousel/Carousel'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'

function Landing() {
  return (
    <Layout>
      <CarouselEffects/>
      <Category/>
      <Product/>
    </Layout>
  )
}

export default Landing
