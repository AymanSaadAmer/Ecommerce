import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext';
export default function Cart() {

    let {getCartItem ,DeleteCartItem,UpdateCartItem}=useContext(CartContext);

let[CartDetails,setCartDetails]=useState(null);
async function UpdateCart(ProdectId,count){
  if(count<1)
  DeleteCart(ProdectId);
  let response =await UpdateCartItem(ProdectId,count);
    setCartDetails(response.data);
}
async function DeleteCart(ProdectId){
  let response =await DeleteCartItem(ProdectId);
    setCartDetails(response.data);
}
  async function GetCart(){
    let response=await getCartItem();
    setCartDetails(response.data);
    console.log(response.data);
    
    
  }
    useEffect(()=>{
      GetCart()
    },[])
  return (
    <>
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
  <table className="w-[75%] mx-auto my-5 text-sm text-left rtl:text-right text-body ">
    <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Product
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          quantity
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Price
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {CartDetails?.data.products.map((prodect)=>
      <tr key={prodect.product.id} className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
        <td className="px-3 m-auto" >
          <img src={prodect.product.imageCover} className="w-16 md:w-24 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 align-middle py-4 font-semibold text-heading">
          {prodect.product.title}
        </td>
        <td className="px-6 align-middle py-4 ">
          <form className="max-w-xs mx-auto">
            <label htmlFor="counter-input-1" className="sr-only">Choose quantity:</label>
            <div className="relative flex items-center">
              <button onClick={()=>UpdateCart(prodect.product.id ,prodect.count-1)} type="button" id="decrement-button-1" data-input-counter-decrement="counter-input-1" className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                <svg className="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" /></svg>
              </button>
              <span className='px-2'>{prodect.count}</span>
              <button onClick={()=>UpdateCart(prodect.product.id ,prodect.count+1)} type="button" id="increment-button-1" data-input-counter-increment="counter-input-1" className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                <svg className="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" /></svg>
              </button>
            </div>
          </form>
        </td>
        <td className="px-6 align-middle py-4 font-semibold text-heading">
          {prodect.price*prodect.count} EGP
        </td>
        <td className="px-6 align-middle py-4">
          <span onClick={()=>DeleteCart(prodect.product.id)} className="font-medium text-fg-danger cursor-pointer">Remove</span>
        </td>
      </tr>)}
      <tr className="bg-neutral-secondary-medium font-semibold">
  <td colSpan="3" className="px-44 py-4 text-left font-bold">
    Total Price
  </td>
  <td className="px-6 py-4 text-heading">
    {CartDetails?.data?.totalCartPrice} EGP
  </td>
  <td></td>
</tr>
    </tbody>
  </table>
</div>

    </>
  )
}
