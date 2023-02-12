import '@/styles/globals.css'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import Router from 'next/router'
import loader from "../public/Images/loader_gif.gif"
import 'bootstrap/dist/css/bootstrap.css'
import 'smart-webcomponents-react/source/styles/smart.default.css';
import Loader from '@/Components/SmallComponets/Loader'
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
    <Loader/>
  </div>:<Component {...pageProps} />
  
}
  
  </>
  
}
