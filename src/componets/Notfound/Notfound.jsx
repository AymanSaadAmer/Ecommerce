import React, { useEffect, useState } from 'react'
import style from './Notfound.module.css'
export default function Notfound() {
    let [counter,setcounter]=useState(0);
    useEffect(()=>{},[])
  return (
    <>
      <div className="text-center w-[80%] my-1.5 m-auto">
        <h1 className='text-4xl font-bold !text-green-600 !my-8'>
            Wellcome Notfound
        </h1>
        <h3 className='!mb-12'>please go to login page or register page to continue</h3>
      </div>
    </>
  )
}
