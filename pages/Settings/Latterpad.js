import Layout from '@/Components/Layout'
import React,{useState} from 'react'
import { useRouter } from 'next/router'
import css from "../../styles/LatterPad.module.css"
import LaterrPadCon from '@/Components/Settings/latterPad/LaterrPadCon'

const Latterpad = () => {
  const router  =useRouter()

  return (
    <Layout title="Latterpad">
<LaterrPadCon formId={router.query.formId}/>

    </Layout>
  )
}

export default Latterpad