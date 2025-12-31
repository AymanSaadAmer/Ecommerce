import React, { useEffect, useState } from 'react';
import style from './CategorySlider.module.css';
import Slider from "react-slick";
import axios from 'axios';

export default function CategorySlider() {
  let[Categories,setCategories]=useState([]);
var settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 3000,

  slidesToShow: 8,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1024, // lg
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768, // md
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 640, // sm
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
};

  function CategoriesSlider(){
    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    .then(({data})=>{
      setCategories(data.data)
    })
    .catch(()=>{

    })
  }
  useEffect(()=>{
    CategoriesSlider()
  },[])
  return (
    <>
    
   <div className='w-[90%] m-auto'>
    <h2 className='!text-green-800 font-medium text-xl !mt-0'>Shop Popular Categories :-</h2>
     <Slider {...settings}>
      {Categories.map((category)=><div>
          <img className='w-full h-[200px] !m-0' src={category.image} alt={category.name} />
          <h3 className='!m-2 font-light'>{category.name}</h3>
        </div>
      )}
    </Slider>
   </div>
    </>
  )
}
