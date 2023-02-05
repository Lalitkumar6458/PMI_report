import '@/styles/globals.css'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import Router from 'next/router'
import loader from "../public/Images/loader_gif.gif"

export default function App({ Component, pageProps }) {


  const[loading,setLoading]=useState(true)
  Router.events.on('routeChangeStart',(url)=>{

    setLoading(true)

   
  })
  Router.events.on('routeChangeComplete',(url)=>{
  
    setLoading(false)

  })
useEffect(()=>{
  setLoading(false)
},[])
  return <>
  {loading?<div className='loader'>
    <Image src={loader} alt=""/>
  </div>:<Component {...pageProps} />
  
}
  
  </>
  
}
