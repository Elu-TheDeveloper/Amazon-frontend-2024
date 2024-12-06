import React from 'react'
import Header from '../Header/Header'
import { Carousel } from 'react-responsive-carousel'
import Footer from "../../components/Footer/Footer"

function Layout({children}) {
  return (
    <div>
      <Header/>
      <Carousel/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
