
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/Components/Layout";
import { FileAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import Router from "next/router";
import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/react"
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
import { Google_login_User } from "@/Api/Url";
export default function Home() {
  const { data: session,status } = useSession()
  function handleSignOut(){
    signOut()
  }
  console.log(useSession().status,"session")
  useEffect(()=>{
    async function sendLoginStatus(){
      
      if(status === "authenticated"){
        const obj ={
          username:session.user.name,
          email:session.user.email,
          img:session.user.image
        }
        console.log("obj",obj)
        await axios.post(Google_login_User,obj).then((res)=>{
console.log(res,"response")
        }).catch((e)=>{
console.log("error",e)
        })    
  }else{
  
  }
    }
    sendLoginStatus()
  },[])

  return(
    <>
    {session ? User({ session, handleSignOut }) : Guest()}
    </>

  )

}
// Guest
function Guest(){
  return (
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Guest Homepage</h3>

          <div className='flex justify-center'>
            <Link href={'/login'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</a></Link>
          </div>
      </main>
  )
}

function User({ session, handleSignOut }){
  return(
    <>
 
    <Layout title="Dashboard">
   
       <div className={styles.dashboard_con}>
          
          <div className={styles.reportButon}>
          <Button type="primary" className={styles.reportBtn} shape="round" onClick={()=>Router.push("/Report")} >
          <FileAddOutlined />   Report
             </Button>
          </div>
   
       </div>
     </Layout>
        
   
       </>
  )
}


export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  if(!session){
    return {
      redirect : {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
