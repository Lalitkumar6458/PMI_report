import Layout from '@/Components/Layout'
import Table from '@/Components/Table'
import React,{useState} from 'react'
import styles from "../styles/Category.module.css"
import BorderBox from '@/Components/SmallComponets/BorderBox'
import { Input,Tooltip,AutoComplete  } from 'antd';
import Button from '@/Components/SmallComponets/Button'
import { UserAddOutlined } from '@ant-design/icons';
import ClientTable from '@/Components/SmallComponets/ClientTable'
import { saveClient } from '@/Api/Url'
import axios from 'axios'
import EditTable from '@/Components/SmallComponets/EditTable'
import {HiArrowNarrowDown,HiArrowNarrowUp } from "react-icons/hi";




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


const Category = () => {
  const [smallbox,setSmallbox]=useState(false)
  const [value, setValue] = useState('');
const AddClient=()=>{
const data={
  name:"lalit kumar",
  email:"lalit@gmail.com",
  phoneno:"9326874950",
  Address:"mumbai"
}
axios.post(saveClient,data)
      .then((response) => {
       console.log(response.json())
      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        console.log(error,"error")

      })
}


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

  return (
    <Layout title="Category">
     <div className={styles.Category_con}>
      
 <div className={smallbox?'Border_box height_down':'Border_box'}>
  <h2>Add Client</h2>
  <button className="small_height_b" onClick={()=>{smallbox?setSmallbox(false):setSmallbox(true)}}>{smallbox?<HiArrowNarrowDown/>:<HiArrowNarrowUp/>}</button>

  <div className={styles.input_box} style={{display:smallbox?"none":""}}>
<div className={styles.input_div}>
  <label>Name</label>
  <Input placeholder="Enter Client Name.." />
  
</div>
<div className={styles.input_div}>
  <label>Email</label>
  <Input placeholder="Enter Email.." />
  
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
  <Input placeholder="Enter Address.." />
  
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

<ClientTable/>
        </div>
<EditTable/>
      </div>
     </div>
     </div>
    </Layout>
  )
}

export default Category