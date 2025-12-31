import React, { useContext, useEffect, useState } from 'react'
import style from './Navbar.module.css'
import logo from './../../assets/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from './../../Context/CounterContext';
import Login from './../Login/Login';

export default function Navbar() {
// let{Counter ,userName,setCounter }=useContext(CounterContext)
let{userLogin,setUserLogin}=useContext(UserContext)
let Navigate=useNavigate()

function Logout(){
  localStorage.removeItem('userToken');
  setUserLogin(null);
  Navigate('/Login');
}
  useEffect(()=>{},[])
  return (
    <>
      <nav className='bg-gray-200 z-50 static lg:fixed top-0 right-0 left-0 '>
      <div className='container m-auto flex items-center justify-between lg:flex-row flex-col py-5'>
          <div className='flex lg:flex-row flex-col items-center'>
            <img width={110} src={logo} alt="Fresh card logo" />
            {userLogin !==null ? <>
            <ul className='flex lg:flex-row flex-col items-center'>
              <li className='px-2'><NavLink className='text-lg mx-2 text-slate-900 font-light' to=''>Home</NavLink></li>
              <li className='px-2'><NavLink className='text-lg mx-2 text-slate-900 font-light' to='Cart'>Cart</NavLink></li>
              <li className='px-2'><NavLink className='text-lg mx-2 text-slate-900 font-light' to='Prodects'>Prodects</NavLink></li>
              <li className='px-2'><NavLink className='text-lg mx-2 text-slate-900 font-light' to='Brands'>Brands</NavLink></li>
              <li className='px-2'><NavLink className='text-lg mx-2 text-slate-900 font-light' to='Categories'>Categories</NavLink></li>
            </ul>
            </>:null}
            
          </div>
          <div>
            <ul className='flex lg:flex-row flex-col items-center'>
              {userLogin ==null ?<>
              <li className='px-2'><NavLink className='text-lg mx-2 text-slate-900 font-light' to='Login'>Login</NavLink></li>
              <li className='px-2'><NavLink className='text-lg mx-2 text-slate-900 font-light' to='Register'>Register</NavLink></li>
              </>: <li onClick={Logout} className='px-2'><span className='text-lg mx-2 text-slate-900 font-light cursor-pointer'  >LogOut</span></li> }
              <li className='flex items-center lg:pt-0  justify-center '>
              <a href="https://www.facebook.com/moona.amer.3?locale=ar_AR"target="_blank"rel="noopener noreferrer"className="inline-flex">
                <i className="fab fa-facebook mx-2 !w-[35px] h-[35px]  border border-gray-300  rounded-full  flex items-center justify-center  p-2 hover:bg-blue-600 hover:text-white">
                </i>
              </a>
              <a href="https://www.instagram.com/aymansaadebrahim/"target="_blank"rel="noopener noreferrer"className="inline-flex">
                  <i className="fab fa-instagram mx-2 !w-[35px]  border border-gray-300  rounded-full  flex items-center justify-center  p-2 hover:bg-white hover:text-pink-600">
                  </i>
              </a>
                <i className='fab mx-2 fa-tiktok !w-[35px] border border-gray-00 rounded-full  hover:bg-black hover:text-white p-2'></i>
                <i className='fab mx-2 fa-youtube !w-[35px] border border-gray-00 rounded-full  hover:bg-white hover:text-red-600 p-2'></i>
                <i className='fab mx-2 fa-twitter !w-[35px] border border-gray-00 rounded-full hover:bg-white hover:text-blue-600 p-2'></i>
              </li> 
              {/* <li className='bg-green-300'>{Counter}</li> */}
            </ul>
          </div>
      </div>
      </nav>
    </>
  )
}
