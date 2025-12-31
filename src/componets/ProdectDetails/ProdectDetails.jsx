import React, { useEffect, useState,useContext } from 'react'
import style from './ProdectDetails.module.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';


export default function ProdectDetails() {
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

  

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };

  let {id ,category}=useParams();
  
  let [ProdectDetails,setProdectDetails]=useState(null)
  let [ProdectCategory,setProdectCategory]=useState([])

  function GetProdectDetails(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then(({data})=>{
      setProdectDetails(data.data)
    }) 
    .catch(()=>{

    })
  }
  function RelatedProdect(category){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(({data})=>{
      let AllProdect=data.data;
      let RelatedProduct=AllProdect.filter((prodect)=>prodect.category.name===category)
      console.log(RelatedProduct);
      setProdectCategory(RelatedProduct)
    }) 
    .catch(()=>{

    })
  }
    useEffect(()=>{
GetProdectDetails(id)
RelatedProdect(category)
    },[id,category])
  return (
    <>
      <div className="row w-[80%] m-auto">
        <div className='w-1/4'>
        <Slider {...settings}>
      {ProdectDetails?.images.map((src)=><img className='w-full' src={src} alt={ProdectDetails?.tittle} />
)}
    </Slider>
        </div>
        <div className='w-3/4 p-6'>
        <h1 className='text-lg font-normal text-gray-950'>{ProdectDetails?.title}</h1>
        <p className='text-gray-600 mt-4 font-light'> {ProdectDetails?.description}</p>
        <div className="flex justify-between items-center">
              <span>{ProdectDetails?.price} EGP</span>
              <span>{ProdectDetails?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
            </div>
            <button className='btn' onClick={()=>addToCart(ProdectDetails.id)}>Add to cart</button>
        </div>
      </div>

      <div className="row">
  {ProdectCategory.map((prodect) => (
    <div key={prodect.id} className="w-1/6">
      <div className="prodect py-3">
        <Link className="!no-underline text-inherit"to={`/ProdectDetails/${prodect.id}/${prodect.category.name}`}>
          
          <img className="w-[100%]" src={prodect.imageCover} alt={prodect.title} />

          <span className="block font-light text-green-600">
            {prodect.category.name}
          </span>

          <h3 className="text-lg text-gray-800 mb-4">
            {prodect.title.split(" ").slice(0, 2).join(" ")}
          </h3>

          <div className="flex justify-between items-center">
            <span>{prodect.price} EGP</span>
            <span>
              {prodect.ratingsAverage}
              <i className="fas fa-star text-yellow-400"></i>
            </span>
          </div>
                                <button className='btn' onClick={()=>addToCart(prodect.id)}>Add to cart</button>
        </Link>
      </div>
    </div>
  ))}
</div>
    </>
  )
}
