import React from 'react'
import Layout from '@/Components/Layout'
import { getSession, useSession, signOut } from "next-auth/react"


const index = () => {
  return (
    <Layout title="Client">
    <div>Client</div>
    </Layout>
  )
}

export default index
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