import React,{useState } from 'react'
import css from "../../styles/ReportPage.module.css"
import { DoubleRightOutlined,PlusCircleOutlined } from '@ant-design/icons';
import Router from 'next/router';
import {
  
    Input,
    Button,
   
  } from "antd";
const Reportmobilelist = () => {
    const [tableview, setTableview] = useState(false)
    const[addedData,setAddedData]=useState([])
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
    const report_grade_edit=(data)=>{
        console.log("report_grade_edit",data)
        // Router.push("/ReportEdit")
    }
    const[addeddata,setAddeddata] =useState([])
    const[countadd,setCountAdd] =useState(1)


    const[objSizeQty,setObjSizeQty]=useState({
     size:"",
     qty:""
    })
    const gradeDataC=[
     {
       ni:"11-14",
       mn:"2max",
       cr:"0.3",
       mo:"23",
       co:"56",
       fe:"12",
       pb:'58'
     }
   ]
  
    function getRandom(obj){
     console.log("obj",obj)
     var newobj={}
  for(let i in obj){
  if(obj[i].includes("-")){
  var arr=obj[i].split("-")
  newobj[i]= randomRange(arr[0],arr[1]) 
  }else if(obj[i].includes("max") || obj[i].includes("Max")){
   if(obj[i].includes("Max")){
  newobj[i]= randomRange(0,obj[i].split("-")[0] )
  }else{
  newobj[i]= randomRange(0,obj[i].split("-")[0])
  }
  }else{
   newobj[i]= randomRange(0,obj[i])
  }
  }
  console.log("nen object",newobj)
  function randomRange(min, max) {
   min=parseFloat(min)
   max=parseFloat(max)
  let cal = Math.random() * (max - min) + min;
  return parseFloat(cal.toFixed(2));
  }
  return newobj
   }
  
    const onSizeQtyHandler=(e)=>{
  const{name,value}=e.target
  
  setObjSizeQty({
   ...objSizeQty,
   [name]:value
  })
  console.log("size qty values",objSizeQty)
    }
   
    const AddreportItem=()=>{

       
      const data_get={
        key:countadd,
        srno:countadd,
        ...objSizeQty,
        ...getRandom(gradeDataC[0]),
        remark:"Ok"
       }
       setAddeddata([
        ...addeddata,
        data_get
    ])
  
    
    setCountAdd(countadd+1)
   
  console.log("data added data",addeddata)
    }
    
  return (
    <>
    <div className={css.report_sizeqty}>
              {/* <div className={css.tableView}>
               <button className={tableview?"":`${css.active}`} onClick={()=>Table_view1()}>view1</button>
               <button className={tableview?`${css.active}`:""} onClick={()=>Table_view()}>view2</button>
              </div> */}
              <div className="row">
                <div className="col-4">
                  <div className={css.inputBox}>
                    <label>Quantity</label>
                    <Input placeholder="Enter Qty..." onChange={onSizeQtyHandler} value={objSizeQty.qty} name="qty" />
                  </div>
                </div>
                <div className="col-4">
                  <div className={css.inputBox}>
                    <label>Size(Description)</label>
                    <Input placeholder="Enter Size..." onChange={onSizeQtyHandler} value={objSizeQty.size} name="size" />
                  </div>
                </div>
                <div className="col-2 d-flex">
                  <div className={css.AddButon}>
                    <Button type="primary" onClick={AddreportItem}>
                      <PlusCircleOutlined />
                      ADD
                    </Button>
                  </div>
                </div>
              </div>
              <div className={`${css.tableContent} reporttable`}>
             
              <div className={css.ReportMobileTable}>

<div className={css.table_head}>
    <span className={css.sr_no} >SR No.</span>
    <span className={css.size_h} >Size(Description)</span>
    <span className={css.remark}>Remark</span>
    <span className={css.btn_right}></span>
</div>
<div className={css.tableBody}>

    {
        addeddata.map((item)=>{
            return(
                <div className={css.tableRow} key={item.id} onClick={()=>report_grade_edit(item)}>
                <span className={css.sr_no_text}>{item.srno}</span>
                <div className={css.sizeBox}>
                    <span className={css.qty_class}>Qty: {item.qty}</span>
                    <span className={css.size}>{item.size}</span>
                </div>
                <span  className={css.remark_ok}>{item.remark}</span>
            <span className={css.btn_right}><DoubleRightOutlined className={css.icons_client} /></span>
    
               </div>
            )
        })
    }
 
</div>
</div>
              </div>
            </div>

    
    </>
   
  )
}

export default Reportmobilelist