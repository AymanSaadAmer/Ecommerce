import React, { useContext, useEffect, useState } from 'react'
import style from './Register.module.css'
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as YUP from 'yup';
import { UserContext } from './../../Context/CounterContext';
export default function Register() {
  let[apiError,setapiError]=useState('')
  let[LoadingSpinner,setLoadingSpinner]=useState(false)

  let{setUserLogin}=useContext(UserContext)

  let Navigate=useNavigate()

  let ValidationRegister =YUP.object().shape({
    name:YUP.string().min(3,'name MinLength is 3 ').max(10,'name MaxLength is 10').required('name is required'),
    email:YUP.string().email('email is invailed').required('email is required'),
    phone:YUP.string().matches(/^01[0125][0-9]{8}$/,'Phone Must be invlid egyption number').required('phone must be required'),
    password:YUP.string().required('Password must be required').matches(/^[A-Z][a-z0-9]{5,10}$/,'password must start with upperCase then 5 to 10 leeter or numbers'),
    rePassword: YUP.string().oneOf([YUP.ref('password')]).required('Password must be required')
  })

  async function handelRegister(formikValues){
    setLoadingSpinner(true)
    try{let{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formikValues)
      console.log(data);
      setLoadingSpinner(false)
      
      if(data.message === 'success'){
        localStorage.setItem('userToken',data.token )
          setUserLogin(data.token)
        Navigate('/')
      }
      else
      {
        
      }}
    catch(error){
      setapiError(error.response?.data?.message)
      setLoadingSpinner(false)
    }
      
      console.log(formikValues);
      
    
  }

  let x=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },
    validationSchema:ValidationRegister,
    onSubmit:handelRegister
  })

  return (
    <>
  <div className='prose'>
  <form onSubmit={x.handleSubmit} className="max-w-md mx-auto ">
    {apiError?<p className="text-red-500 text-sm mt-1">{apiError}</p>:null}
    <h2>Register Now</h2>
    <div className="relative z-0 w-full  mb-3 py-3 group ">
      <input type="text" name="name" onChange={x.handleChange} onBlur={x.handleBlur} value={x.values.name} id="Name" className="  form-input block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="Name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto my-1">Enter your Name : </label>
      {x.touched.name && x.errors.name ? (<p className="text-red-500 text-sm mt-1">{x.errors.name}</p>) : null}
    </div>
    <div className="relative z-0 w-full mb-3 py-3 group">
      <input type="email" name="email" onChange={x.handleChange} onBlur={x.handleBlur} value={x.values.email} id="Email" className=" form-input block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="Email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter your Email : </label>
      {x.touched.email && x.errors.email ? (<p className="text-red-500 text-sm mt-1">{x.errors.email}</p>) : null}
    </div>
    <div className="relative z-0 w-full mb-3 py-3 group ">
      <input type="tel" autoComplete="tel" name="phone" onChange={x.handleChange} onBlur={x.handleBlur} value={x.values.phone} id="phone" className="  form-input block py-2.5  px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="phone" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ">Enter your phone Number : </label>
      {x.touched.phone && x.errors.phone ? (<p className="text-red-500 text-sm mt-1">{x.errors.phone}</p>) : null}
    </div>
    <div className="relative z-0 w-full mb-3 py-3 group">
      <input type="password" autoComplete="new-password" name="password" onChange={x.handleChange} onBlur={x.handleBlur} value={x.values.password} id="Password" className=" form-input block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="Password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter your Password : </label>
      {x.touched.password && x.errors.password ? (<p className="text-red-500 text-sm mt-1">{x.errors.password}</p>) : null}
    </div>
    <div className="relative z-0 w-full mb-3 py-3 group">
      <input type="password" autoComplete="new-password" name="rePassword" onChange={x.handleChange} onBlur={x.handleBlur} value={x.values.rePassword} id="RePassword" className=" form-input block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="RePassword" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter your RePassword : </label>
      {x.touched.rePassword && x.errors.rePassword ? (<p className="text-red-500 text-sm mt-1">{x.errors.rePassword}</p>) : null}
    </div>
    <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
      {LoadingSpinner?  <i className='fa fa-spinner fa-spin'></i>:' Submit'}
    </button>
  </form>
    </div>
    </>
  )
}