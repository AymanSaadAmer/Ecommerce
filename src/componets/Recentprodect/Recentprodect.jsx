import React, { useContext, useEffect, useState } from 'react'
import style from './Recentprodect.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { ClimbingBoxLoader } from 'react-spinners';
import useProdects from '../../Hooks/useProdects';
import { CartContext } from '../../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Recentprodect() {
  let {addProdectToCart}=useContext(CartContext)
  async function addToCart(prodectId){
  let response= await addProdectToCart(prodectId);
  if (response.data.status ==='success'){
    console.log("added");
    toast.success('product added successfully to your cart',{
      duration:2000,
      position:'top-right'
    })
  }
  else{
    console.log("error");
      toast.error('product not added to your cart')

  }
  }

let {data =[] ,isError,error,isLoading,isFetching}=useProdects()

if(isLoading){
    return<div className='py-8 w-full flex justify-center'>
      <ClimbingBoxLoader color='green'/>
    </div>
  }

  if(isError){
    return <div className='py-8 w-full flex justify-center'>
      <h3>{error.message}</h3>
    </div>
  }

  return (
    <>
    
      <div className="row w-[92%] m-auto !pt-0 ">
        <div className='w-[100%] mb-0'>
              <h2 className='!text-green-800 font-medium text-xl !mt-0'>Shop current products :-</h2>
    </div>
        {data.map((prodect)=> 
          <div key={prodect.id} className='w-1/2 md:w-1/4 lg:w-1/6 '>
           
          <div className="prodect pb-5 px-3">
            <Link className="!no-underline text-inherit " to={`/ProdectDetails/${prodect.id}/${prodect.category.name}`}>
             <img src={prodect?.imageCover} alt={prodect?.title}  className='w-full'/>

            <span className='block font-light text-green-600'>{prodect.category.name}</span>
            <h3 className='text-lg  text-gray-800 text-normal mb-4'>{prodect.title.split(' ').slice(0,2).join(' ')}</h3>
            <div className="flex justify-between items-center">
              <span>{prodect.price} EGP</span>
              <span>{prodect.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
            </div>
            </Link>
              <button className='btn' onClick={()=>addToCart(prodect.id)}>Add to cart</button>
          </div>
        </div>
        )}
        
      </div>
      
    </>
  )
}
