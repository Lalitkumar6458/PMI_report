import Layout from "@/Components/Layout";
import React, { useState,useRef } from "react";
import BorderBox from "@/Components/SmallComponets/BorderBox";
import styles from "../styles/ReportPage.module.css";
import pdficon from "../public/Images/pdficon.png"
import printicon from "../public/Images/printicon.png"
import excelicon from "../public/Images/excelicon.png"
import wordicon from "../public/Images/wordicon.png"
import wapp from "../public/Images/wappicon.png"
import email from "../public/Images/email.png"
import Image from "next/image";
import moment from 'moment';
import {
  FileAddOutlined,
  PlusCircleOutlined,
  DownOutlined,
  FileWordOutlined,
  UserOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  SaveOutlined,
  SendOutlined,
  PlusOutlined
} from "@ant-design/icons";
import {
  Select,
  DatePicker,
  Input,
  Button,
  Dropdown,
  message,
  Space,
  Tooltip,
  Divider,
 Drawer, Radio,
} from "antd";
import ReportTable from "@/Components/Reportcomponents/ReportTable";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Router from "next/router";
import Reportmobilelist from "@/Components/Reportcomponents/Reportmobilelist";
import { getSession, useSession, signOut } from "next-auth/react"

let allData=[]
var count=1
const Report = () => {
  const { data: session } = useSession()
  const[allReportdata,setAllReportData]=useState({})
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [tableview, setTableview] = useState(false);
 const [items2, setItems2] = useState([{
  value: "304X40",
  label: "304X40",
}
]);
const [modalNo, setModalNo] = useState([{
  value: "Hitachi 203X",
  label: "Hitachi 203X",
},
{
  value: "Nuton 203",
  label: "Nuton 203",
}
]);
   const [name, setName] = useState('');
   const [modalname, setModalName] = useState('');
   const[addeddata,setAddeddata] =useState([])

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
   const childRef = useRef();
   const AddreportItem=()=>{
     const data_get={
       key:count,
       srno:count,
       ...objSizeQty,
       ...getRandom(gradeDataC[0]),
       remark:"Ok"
      }
      allData.push(data_get)
      console.log("data",allData)
      childRef.current.handleAdd(data_get)
    setAddeddata(
      allData
    )
   
    count++
console.log("data added data",addeddata)
   }
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
 const[partyname,setPartyName]=useState("")

  const [placement, setPlacement] = useState('bottom');
  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawer1 = () => {
    setOpen1(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onClose1 = () => {
    setOpen1(false);
  };
  const onChangeDrawer = (e) => {
    setPlacement(e.target.value);
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
    alert("value"+value)

  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onChangedate = (date, dateString) => {
    console.log(moment,)
    console.log(date, dateString,"date");
    setDate(date)
  };

  const handleMenuClick = (e) => {


const reportAddedData=JSON.parse(localStorage.getItem("reportAddedData"))
const DataReport={
  partyname,agencyName,locationName,reportNo,poNo,date,instrumentValue,modalNovalue,Gradename,gradeDataC,reportAddedData
}
   console.log("DataReport",DataReport,reportAddedData)
 
    // message.info("Click on menu item.");
//     console.log("click", e.keyPath[0]);
//     if( e.keyPath[0]=== 1){
// Router.push("/ReportPdf")
//     }
localStorage.setItem("ReportAllDAta",JSON.stringify(DataReport))
setAllReportData({...DataReport})

console.log("alll data",allReportdata)
var url="/ReportPdf"
Router.push({pathname:url,
  query: { data: JSON.stringify(DataReport)}
},url)
  //  Router.push("/ReportPdf")
  };
 

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onModalNameChange = (event) => {
    setModalName(event.target.value);
  };
  let index = 0;
  const addItem = (e) => {
    e.preventDefault();
    setItems2([...items2,{
      value: name,
      label: name,
    } || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }
  const addmodalNo = (e) => {
    e.preventDefault();
    setModalNo([...modalNo,{
      value: modalname,
      label: modalname,
    } || `New item ${index++}`]);
    setModalName('');
    setTimeout(() => {
      inputRef1.current?.focus();
    }, 0);
  }
  const items = [
    {
      label: "PDF",
      key: "1",
      icon: <FilePdfOutlined />,
      onclick_handler:function(){
        alert("click")
      }
    },
    {
      label: "MS WORD DOC",
      key: "2",
      icon: <FileWordOutlined />,
    },
    {
      label: "Excel",
      key: "3",
      icon: <FileExcelOutlined />,
    },
    {
      label: "Print",
      key: "4",
      icon: <PrinterOutlined />,
    },
  ];

  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
const Table_view=()=>{
  setTableview(true)
}
const Table_view1=()=>{
  setTableview(false)
}
console.log("moment()",moment()._locale)

const [agencyName,setAgencyName]=useState("Pooja PMI")
const [locationName,setLocationName]=useState("Mumbai")
const [reportNo,setReportNo]=useState(201)
const [poNo,setPoNo]=useState("X4595d")
const [date,setDate]=useState()
const [specifiedGrade,setSpecifiedGrade]=useState([
{
  value:"304L",
  label:"304L"
}
])
const[modalNovalue,setModalNoValue]=useState("")
const[Gradename,setGradeName]=useState("")

const[instrumentValue,setInstrumentValue]=useState("")



const partName=[
  {
    value:"Styam Steel",
    label:"Styam Steel"
  },
  {
    value:"VJ Steel And Alloys",
    label:"VJ Steel And Alloys"
  }
]

const CreatePdf=()=>{
alert("hell"+partyname)

  // Router.push("/ReportPdf")
}

  return (
    <>
      <Layout title="Report">
        <div className={styles.report_con}>
          <BorderBox title={"Report Infomation"}>
            <div className="row">
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Party Name </label>
                  <Select
                    className={styles.Seletcbox}
                    showSearch
                    placeholder="Select a Party"
                    optionFilterProp="children"
                    onChange={(value)=>setPartyName(value)}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={partName}
                    value={partyname}
                  />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Agency Name</label>
                  <Input placeholder="" value={agencyName} onChange={(e)=>setAgencyName(e.target.value)}/>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label> PMI Location </label>
                  <Input placeholder="Basic usage" value={locationName} onChange={(e)=>setLocationName(e.target.value)} />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Date</label>
                  <DatePicker
                    onChange={onChangedate}
                    className={styles.datePicker}
                   
                    value={date}
                    format="YYYY-MM-DD"
                  />  
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>PMI Rreport No.</label>
                  <Input placeholder="Basic usage" value={reportNo}  onChange={(e)=>setReportNo(e.target.value)} />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Purchase Order</label>
                  <Input placeholder="Basic usage" value={poNo}   onChange={(e)=>setPoNo(e.target.value)} />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Instrument Id </label>
                  <Select
                    className={styles.Seletcbox}
                    showSearch
                    placeholder="Select a Instrument Id "
                    optionFilterProp="children"
                    onChange={(value)=>setInstrumentValue(value)}
                    value={instrumentValue}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    dropdownRender={(menu) => (
                      <>
                        {menu}
                        <Divider
                          style={{
                            margin: '8px 0',
                          }}
                        />
                      
                          <div >
                          <Input
                            placeholder="Please enter item"
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                          />
                          </div>
                          <div >
                          <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                            Add item
                          </Button>
                          </div>
                          
                          
                      
                      </>
                    )}
                    options={items2}
                  />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Modal No. </label>
                  <Select
                    className={styles.Seletcbox}
                    showSearch
                    placeholder="Select a Modal No."
                    optionFilterProp="children"
                    onChange={(value)=>setModalNoValue(value)}
                    onSearch={onSearch}
                    value={modalNovalue}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    dropdownRender={(menu) => (
                      <>
                        {menu}
                        <Divider
                          style={{
                            margin: '8px 0',
                          }}
                        />
                      
                          <div >
                          <Input
                            placeholder="Please enter item"
                            ref={inputRef1}
                            value={modalname}
                            onChange={onModalNameChange}
                          />
                          </div>
                          <div >
                          <Button type="text" icon={<PlusOutlined />} onClick={addmodalNo}>
                            Add item
                          </Button>
                          </div>
                          
                          
                      
                      </>
                    )}
                    options={modalNo}
                  />
                </div>
              </div>
            </div>
          </BorderBox>

          <div className={styles.reportChemical}>
            <BorderBox title={"Alloys Contnets "}>
              <div className="row grade_report">
                <div className="col-12 col-md-3">
                  <div className={styles.inputBox}>
                    <label>Specified Goods</label>
                    <Select
                      className={styles.Seletcbox}
                      showSearch
                      placeholder="Enter Grade name"
                      optionFilterProp="children"
                      onChange={(value)=>setGradeName(value)}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={specifiedGrade}
                      value={Gradename}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <div className={styles.GradeChemical}>
                    <div className={styles.GradeBox}>
                      <h4>Grade:304L</h4>
                    </div>
                    <div className={styles.chemicalTable}>
                      <table>
                        <thead>
                          <tr>
                            {
                              Object.keys(gradeDataC[0]).map((item)=>{
                                return(<th style={{textTransform:"capitalize"}}>{item}</th>)
                              })
                            }
                           
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          {
                              Object.keys(gradeDataC[0]).map((item)=>{
                                return(<td style={{textTransform:"capitalize"}}>{gradeDataC[0][item]}</td>)
                              })
                            }
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </BorderBox>
            <div className={styles.table_con_view}>
            <div className={styles.tableView}>
               <button className={tableview?"":`${styles.active}`} onClick={()=>Table_view1()}>view1</button>
               <button className={tableview?`${styles.active}`:""} onClick={()=>Table_view()}>view2</button>
              </div>
            {
                tableview?<ReportTable data={addeddata} ref={childRef} />:<Reportmobilelist/>
                
            }
            </div>
           
            <div className={styles.ButtonSave_sent}>
              <span className={styles.save_btndrop} >
                <Dropdown.Button
                  menu={menuProps}
                  placement="bottom"
                  icon={<UserOutlined />}
                >
                  Save Report
                </Dropdown.Button>
              </span>
              <button className={styles.saveButton} onClick={showDrawer1}>Send<SendOutlined /></button>
              <button className={styles.saveButton} onClick={showDrawer}>Save <SaveOutlined /></button>
            </div>
          </div>
        </div>
        <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
      <div className={styles.drawer_button}>
        <div className="row" >
          <div className="col-6">
          <button className={styles.btndrawer} onClick={()=> handleMenuClick()}>PDF <Image src={pdficon} alt=""/></button>
          </div>
          <div className="col-6">
        <button className={styles.btndrawer}>Print <Image src={printicon} alt=""/></button>
            
            </div>
            <div className="col-6">
        <button className={styles.btndrawer}>Excel <Image src={excelicon} alt=""/></button>
            
            </div>
            <div className="col-6">
        <button className={styles.btndrawer}>MS Word <Image src={wordicon} alt=""/></button>
            
            </div>
        </div>
        

        


      </div>
      </Drawer>

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose1}
        open={open1}
        key={placement}
      >
      <div className={styles.drawer_button}>
        <div className="row" >
          <div className="col-6">
          <button className={`${styles.btndrawer} ${styles.whatsapp}`}>Whatsapp <Image src={wapp} alt=""/></button>
          </div>
          <div className="col-6">
        <button className={styles.btndrawer}>Email <Image src={email} alt=""/></button>
            
            </div>
           
        </div>
        

        


      </div>
      </Drawer>
      </Layout>
    </>
  );
};

export default Report;
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
