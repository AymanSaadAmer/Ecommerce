import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
export default function Categories() {
    let [counter,setcounter]=useState(0);
    useEffect(()=>{},[])
  return (
    <>
      <div className="text-center w-[80%] my-1.5 m-auto">
        <h1>
            Wellcome Categories
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quidem perspiciatis eligendi totam quae quos cum molestiae placeat architecto officiis odio dicta rerum expedita porro alias eaque aperiam, est voluptas.</p>
      </div>
    </>
  )
}
