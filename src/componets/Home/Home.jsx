import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Recentprodect from './../Recentprodect/Recentprodect';
import CategorySlider from './../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';


export default function Home() {


    useEffect(()=>{},[])
  
  return (
    <>
    <MainSlider/>
    <CategorySlider/>
   <Recentprodect/>
    </>
  )
}
