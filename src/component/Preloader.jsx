"use client"
import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Preloader = () => {
    

    useGSAP(()=>{
        
    })
  return (
    <div 
    className={` h-screen w-screen inset-0 fixed z-50 text-white bg-black overflow-hidden `}>
        Preloader
    </div>
  )
}

export default Preloader