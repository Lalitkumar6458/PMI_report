import Layout from '@/Components/Layout'
import Table from '@/Components/Table'
import React, { useState, useEffect } from 'react'
import styles from "../styles/Category.module.css"
import { Input,Tooltip,AutoComplete,message } from 'antd';
import Button from '@/Components/SmallComponets/Button'
import { UserAddOutlined } from '@ant-design/icons';
import ClientTable from '@/Components/SmallComponets/ClientTable'
import axios from 'axios'
import EditTable from '@/Components/SmallComponets/EditTable'
import {HiArrowNarrowDown,HiArrowNarrowUp } from "react-icons/hi";
import { getSession, useSession, signOut } from "next-auth/react"
import Router from 'next/router'
import { ApiEndPoint } from '@/public/ApiEndPoint';


const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };
  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Input a number'
  );
  return (
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter Phone no."
        maxLength={10}
      />
    </Tooltip>
  );
};

const initialState={
  name:"",
  email:"",
  phone:"",
  address:""
}
const Category = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const { data: session } = useSession()
  const [smallbox,setSmallbox]=useState(false)
  const [value, setValue] = useState('');
  const[clientData,setClientData]=useState([])
  const[clientInfo,setClientInfo]=useState(initialState)
  function messageAlert(type,content){
    const key = 'updatable';

 messageApi.open({
      key,
      type,
      content,
    })
  }
const AddClient=()=>{
  messageAlert('loading','Adding your Client...')
  clientInfo["phone"]=value
  clientInfo["username"]=session.user.name
  clientInfo["Useremail"]=session.user.email
  console.log("client info data",clientInfo)
  axios.post(`${ApiEndPoint}save_client_info/`, clientInfo)
      .then((response) => {
       console.log(response.data)
       messageAlert('success','Succesfully Added Client')

        GetclientData()
      })
      .catch((error) => {
        messageAlert('error',error.message)
      
        console.log(error,"error")
      })
}

const GetclientData=async()=>{

    await axios
      .get(`${ApiEndPoint}get_client_data/`, { params: { username:session.user.name,email:session.user.email } }, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {

        console.log("response data c", response.data);
         setClientData(response.data.data)

      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        console.log(error, "error");
      });


  }
  useEffect(() => {
    GetclientData()
  }, [])


const options = [
  {
    value: 'SS304L',
  },
  {
    value: 'SS316L',
  },
  {
    value: 'Inconel-600',
  },
];
const handleValueChange=(e)=>{
  setClientInfo({
    ...clientInfo,
    [e.target.name]:e.target.value
  })
}

    return (
      <Layout title="Category">
        {contextHolder}
       <div className={styles.Category_con}>
        
   <div className={smallbox?'Border_box height_down':'Border_box'}>
    <h2>Add Client</h2>
    <button className="small_height_b" onClick={()=>{smallbox?setSmallbox(false):setSmallbox(true)}}>{smallbox?<HiArrowNarrowDown/>:<HiArrowNarrowUp/>}</button>
  
    <div className={styles.input_box} style={{display:smallbox?"none":""}}>
  <div className={styles.input_div}>
    <label>Name</label>
    <Input placeholder="Enter Client Name.." name="name" value={clientInfo.name} onChange={handleValueChange} />
    
  </div>
  <div className={styles.input_div}>
    <label>Email</label>
    <Input placeholder="Enter Email.." name="email" value={clientInfo.email} onChange={handleValueChange} />
    
  </div>
  <div className={styles.input_div}>
    <label>Phone No.</label>
    <NumericInput
        style={{
         
        }}
        value={value}
        onChange={setValue}
      />
    
  </div> 
  <div className={styles.input_div}>
    <label>Address</label>
    <Input placeholder="Enter Address.."  name="address" value={clientInfo.address} onChange={handleValueChange} />
    
  </div>
  <Button content={{title:"Add",icon:<UserAddOutlined className='icon_btn' />,event:AddClient}}/>
    </div>
   </div>
       <div className={styles.Client_allData}>
        <div className={styles.search_box}>
        <AutoComplete
      style={{
        width: 200,
      border:"1px solid #081A51",
      borderRadius:"5px",
      popupClassName:"Search_input"
      }}
      options={options}
      placeholder="Search Grade Chemical.."
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
        </div>
  
        <div className={styles.client_table}>
          <div className={styles.Client_cont}>
  
                <ClientTable data={clientData} messageAlert={messageAlert}/>
          </div>
              <EditTable data={clientData} />
        </div>
       </div>
       </div>
      </Layout>
    )
  }
  


export default Category

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