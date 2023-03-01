import React from 'react'
import css from "../../styles/ReportPage.module.css"
import { DoubleRightOutlined} from '@ant-design/icons';
import Router from 'next/router';
const Reportmobilelist = () => {
    const Data=[
        {
            id:1,
            srno:1,
            Size:"30MMX204MM Circle",
            qty:"3pc",
            remark:"Ok"

        },
        {
            id:2,
            srno:2,
            Size:"50MMX404MM Circle",
            qty:"6pc",
            remark:"Ok"
            
        }
    ]
    const report_grade_edit=()=>{
        Router.push("/ReportEdit")
    }
  return (
    <div className={css.ReportMobileTable}>

        <div className={css.table_head}>
            <span className={css.sr_no} >SR No.</span>
            <span className={css.size_h} >Size(Description)</span>
            <span className={css.remark}>Remark</span>
            <span className={css.btn_right}></span>
        </div>
        <div className={css.tableBody}>

            {
                Data.map((item)=>{
                    return(
                        <div className={css.tableRow} key={item.id} onClick={()=>report_grade_edit()}>
                        <span className={css.sr_no_text}>{item.srno}</span>
                        <div className={css.sizeBox}>
                            <span className={css.qty_class}>Qty: {item.qty}</span>
                            <span className={css.size}>{item.Size}</span>
                        </div>
                        <span  className={css.remark_ok}>{item.remark}</span>
                    <span className={css.btn_right}><DoubleRightOutlined className={css.icons_client} /></span>
            
                       </div>
                    )
                })
            }
         
        </div>
    </div>
  )
}

export default Reportmobilelist