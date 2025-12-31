import React, { useContext,useEffect, useState } from 'react'
import style from './Footer.module.css'
import logo from './../../assets/freshcart-logo.svg'
import { Link, NavLink, useNavigate  } from 'react-router-dom';
import { UserContext } from './../../Context/CounterContext';

export default function Footer() {
  let[StringArrow,setStringArrow]=useState(">>")
   let{userLogin,setUserLogin}=useContext(UserContext)
   let Navigate=useNavigate()
   
   function Logout(){
     localStorage.removeItem('userToken');
     setUserLogin(null);
     Navigate('/Login');
   }
  return (
    <><div className='bg-gray-200'>
    <div className='  flex flex-wrap justify-between  w-[88%] m-auto my-4'>
      <div className='w-1/2 md:w-1/2 lg:w-1/4'>
        <h2 className='font-bold text-green-800 py-3'>Quick Links</h2>
        {userLogin !==null ? <>
      <ul className=''>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className=' group-hover:text-green-600 mx-2 text-slate-900 ' to=''> <span className='font-bold text-sm '> {StringArrow}</span>Home</NavLink></li>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className='group-hover:text-green-600 mx-2 text-slate-900 ' to='Cart'> <span className='font-bold text-sm '> {StringArrow}</span>Cart</NavLink></li>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className='group-hover:text-green-600 mx-2 text-slate-900 ' to='Prodects'> <span className='font-bold text-sm '> {StringArrow}</span>Prodects</NavLink></li>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className='group-hover:text-green-600 mx-2 text-slate-900 ' to='Brands'> <span className='font-bold text-sm '> {StringArrow}</span>Brands</NavLink></li>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className='group-hover:text-green-600 mx-2 text-slate-900 ' to='Categories'> <span className='font-bold text-sm '> {StringArrow}</span>Categories</NavLink></li>
              <li onClick={Logout} className='transition-transform duration-300 hover:translate-x-2 group'><span className='group-hover:text-green-600 mx-2 text-slate-900  cursor-pointer'  ><span className='font-bold text-sm '> {StringArrow}</span>LogOut</span></li>
            </ul>
            </>:<ul className=''>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className='group-hover:text-green-600 mx-2 text-slate-900 ' to=''> <span className='font-bold text-sm '> {StringArrow}</span>Home</NavLink></li>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className='group-hover:text-green-600 mx-2 text-slate-900 ' to='Cart'> <span className='font-bold text-sm '> {StringArrow}</span>Cart</NavLink></li>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className='group-hover:text-green-600 mx-2 text-slate-900 ' to='Prodects'> <span className='font-bold text-sm '> {StringArrow}</span>Prodects</NavLink></li>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className='group-hover:text-green-600 mx-2 text-slate-900 ' to='Brands'> <span className='font-bold text-sm '> {StringArrow}</span>Brands</NavLink></li>
              <li className='transition-transform duration-300 hover:translate-x-2 group'><NavLink className='group-hover:text-green-600 mx-2 text-slate-900 ' to='Categories'> <span className='font-bold text-sm '> {StringArrow}</span>Categories</NavLink></li>
              <li onClick={Logout} className='transition-transform duration-300 hover:translate-x-2 group'><span className='group-hover:text-green-600 mx-2 text-slate-900  cursor-pointer'  ><span className='font-bold text-sm '> {StringArrow}</span>LogOut</span></li>
            </ul>}
      </div>
      <div className='w-1/2 md:w-1/2 lg:w-1/4'>
        <h2 className='font-bold text-green-900 py-3'>Further Info.</h2>
        <ul>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>About us</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Gift Certificates</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Theme Styles</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Contact us</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>About us</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Sitemap</li>
        </ul>
      </div>
      <div className='w-1/2 md:w-1/2 lg:w-1/4'>
        <h2 className='font-bold text-green-900 py-3'>Customer Service.</h2>
         <ul>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Help & FAQs</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Terms of Conditions</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Privacy Policy</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Online Returns Policy</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Online Returns Policy</li>
          <li className='pb-1 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-green-600'>Rebate Center</li>
        </ul>
      </div>
      <div className='my-3 w-1/2 md:w-1/2 lg:w-1/4'>
          <img width={110} src={logo} alt="Fresh card logo" />
          <ul>
            <li className='pb-1 pt-4 text-lg'>
            <p className='group cursor-pointer'> <i  className="fa-solid fa-location-dot p-2 mr-1 group-hover:bg-green-500 group-hover:text-white !w-[35px] border border-gray-00 rounded-full flex items-center justify-center"></i>123 Main Street, Cairo - Egypt</p>
            </li>
            <li className='pb-1  text-lg'>
            <p className='group cursor-pointer'> <i  className="fa-solid fa-phone p-2 mr-1 group-hover:bg-green-500 group-hover:text-white !w-[35px] border border-gray-00 rounded-full flex items-center justify-center"></i>Call us at (+20) 1090397496</p>
            </li>
            <li className='pb-1  text-lg'>
            <p className='group cursor-pointer'> <i  className="fa-solid fa-envelope p-2 mr-1 group-hover:bg-green-500 group-hover:text-white !w-[35px] border border-gray-00 rounded-full flex items-center justify-center"></i>aymansaadamer8 @gmail.com</p>
            </li>
            <li className='flex items-center lg:pt-0  justify-center '>
<a href="https://www.facebook.com/moona.amer.3?locale=ar_AR"target="_blank"rel="noopener noreferrer"className="inline-flex">
  <i className="fab fa-facebook mx-2 !w-[35px] h-[35px]  border border-gray-300  rounded-full  flex items-center justify-center  p-2 hover:bg-blue-600 hover:text-white">
  </i>
</a>
<a href="https://www.instagram.com/aymansaadebrahim/"target="_blank"rel="noopener noreferrer"className="inline-flex">
  <i className="fab fa-instagram mx-2 !w-[35px]  border border-gray-300  rounded-full  flex items-center justify-center  p-2 hover:bg-white hover:text-pink-600">
  </i>
</a>
                <i className='fab mx-2 fa-tiktok !w-[35px] border border-gray-300 rounded-full  hover:bg-black hover:text-white p-2'></i>
                <i className='fab mx-2 fa-youtube !w-[35px] border border-gray-300 rounded-full  hover:bg-white hover:text-red-600 p-2'></i>
                <i className='fab mx-2 fa-twitter !w-[35px] border border-gray-300 rounded-full hover:bg-white hover:text-blue-600 p-2'></i>
              </li> 
            </ul>
      </div>
    </div>
      <div className="text-center w-[80%] my-1.5 m-auto prose">
        <h3>© 2025 Your <span className='text-green-600 font-bold text-xl'>Ayman Amer </span>All rights reserved.</h3>
      </div>
      </div>
    </>
  )
}
