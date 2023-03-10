import Layout from '@/Components/Layout'
import React,{useState} from 'react'
import { useRouter } from 'next/router'
import { LeftOutlined } from '@ant-design/icons';
import styles from "../../styles/ClientMobileTable.module.css"
import { Button, Input } from 'antd';
const ClientInfo = () => {
const router=useRouter()
const{query}=router
const { TextArea } = Input;

const data=[
  {
    id:1,
    name:"satyam Steel India",
    email:"satyam@gmail.com",
    phoneno:"997655863",
    address:"mumbai"
  },
  {
    id:2,
    name:"Excel Steel",
    email:"Excel@gmail.com",
    phoneno:"96975605679",
    address:"mumbai"
  }
  ,
  {
    id:3,
    name:"nitesh Steel",
    email:"nitesh@gmail.com",
    phoneno:"96975605679",
    address:"mumbai"
  }
  ,
  {
    id:4,
    name:"neo inpex Steel",
    email:"neoinpex@gmail.com",
    phoneno:"96975605679",
    address:"mumbai"
  }
  ,
  {
    id:5,
    name:"JH Metal",
    email:"JHMetal@gmail.com",
    phoneno:"96975605679",
    address:"mumbai"
  }
  ,
  {
    id:6,
    name:"Vj Steel & alloys",
    email:"VjSteel@gmail.com",
    phoneno:"96975605679",
    address:"mumbai"
  }
  ,
  {
    id:7,
    name:"shankesvar metal",
    email:"shankesvar@gmail.com",
    phoneno:"96975605679",
    address:"mumbai"
  }
  ,
  {
    id:8,
    name:"vikash metal & alloys",
    email:"vikash@gmail.com",
    phoneno:"96975605679",
    address:"mumbai"
  }
  ,
  {
    id:9,
    name:"mukund Steel",
    email:"mukund@gmail.com",
    phoneno:"96975605679",
    address:"mumbai"
  }
]

let newData=data.filter((x) => x.id == query.clientid);
const[clientUpdate,setClientUpdate]=useState({...newData[0]})
const UpdateClientHandler=(e)=>{
  const { name, value } = e.target;
  setClientUpdate({
    ...clientUpdate,
    [name]: value,
  });
}
const UpdateBtnhandler=()=>{
  console.log("clientUpdate",clientUpdate)
}
  return (
    <Layout title="client">

<div className={styles.ClientInfo_box}>
  <div className={styles.heading}>
  <span className={styles.arrow_left} onClick={()=>router.push("/Category")}><LeftOutlined  className={styles.icons_client} /></span>
  <h4>Client Info</h4>
  </div>

  <div className={styles.client_infobox}>
    <div className={styles.input_client}>
      <label>Name</label>
      <Input value={clientUpdate.name} name="name" placeholder="Basic usage" onChange={UpdateClientHandler} />
    </div>
    <div className={styles.input_client}  >
      <label>Email</label>
      <Input value={clientUpdate.email} name="email" onChange={UpdateClientHandler} />
    </div>
    <div className={styles.input_client} >
      <label>Phone No.</label>
      <Input value={clientUpdate.phoneno} name="phoneno" onChange={UpdateClientHandler}  />
    </div>
    <div className={styles.input_client} style={{height:"113px"}}>
      <label>Address</label>
      <TextArea className={styles.text_client} showCount name="address" value={clientUpdate.address} maxLength={100} onChange={UpdateClientHandler} />

    </div>

    <Button type='primary' className={styles.updateButton} onClick={UpdateBtnhandler}>Update</Button>
  </div>
</div>
    </Layout>
    
  )
}

export default ClientInfo