import React, { useEffect, useState } from 'react'
import style from './MainSlider.module.css'
import imageRigthTop from'../../assets/slider-image-1.jpeg';
import imageRigthBottom from'../../assets/slider-image-2.jpeg';
import imageLeft1 from'../../assets/slider-image-3.jpeg';
import imageLeft2 from'../../assets/grocery-banner-2.jpeg';
import imageLeft3 from '../../assets/5.webp';
import Slider from "react-slick";

export default function MainSlider() {
   var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false
  };
  return (
    <>
      <div className="row w-[92%] m-auto">
      <div className='w-3/4' >
      <Slider {...settings}>
          <img className='w-full h-[400px]' src={imageLeft1} alt="" />
          <img className='w-full h-[400px]' src={imageLeft2} alt="" />
          <img className='w-full h-[400px]' src={imageLeft3} alt="" />

      </Slider>
      </div>
      <div className='w-1/4'>
      <img className='w-full h-[200px] m-0' src={imageRigthTop} alt="" />
      <img className='w-full h-[200px] m-0' src={imageRigthBottom} alt="" />
      </div>
    </div>
    </>
  )
}
