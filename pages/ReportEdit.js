import Layout from '@/Components/Layout';
import React from 'react'
import { MdDelete } from "react-icons/md";
import css from "../styles/ReportPage.module.css"
import { LeftOutlined } from '@ant-design/icons';
import Router from 'next/router';
const ReportEdit = () => {
  return (
    <>
    <Layout title='ReportEdit'>
        <div className={css.reportEdit_con}>
        <div className={css.heading_report}>
            <span className={css.arrow_left}  onClick={()=>Router.push("/Report")}><LeftOutlined  className={css.icons_client} /></span>
            <div className={css.heading_text}>
              <span>Chemical Composition</span>
              <span>(Grade:316L)</span>
            </div>
            <span>  <MdDelete
                                  className={css.icon_delete}
                                  
                                /></span>
        </div>
 

        </div>
    </Layout>
    </>
  )
}

export default ReportEdit