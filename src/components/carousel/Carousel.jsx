import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from'./images/data.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import classes from '../carousel/carousel_module.module.css';
function CarouselEffects() {
  return (
    <div>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicator={false}
      showThumbs={false}
      >
        
        {
        img.map ((imageItemLink,index)=>{
            return <img key={index} src={imageItemLink}/>
        })
        
        
        }
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffects;
