import React from 'react'
import styles from "../../styles/ClientMobileTable.module.css"
import { DoubleRightOutlined} from '@ant-design/icons';
import {FaUserCircle} from "react-icons/fa";
import Link from 'next/link';
import Router from 'next/router';
const EditTable = (props) => {
       console.log("data category",props.data)
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

  const CLientInfoHandler=(id)=>{


    Router.push("/Client/"+id)
  }
  return (
    <div>
      <div className={styles.EditTable_con}>

        <div className={styles.table_box}>
          <div className={styles.table_data}>
            {props.data.map((item)=>{
              return(
               
                 <div className={styles.row_data} key={item.user_info_id
                 } onClick={()=>CLientInfoHandler(item.user_info_id)}>
                <div className={styles.content}>
                  <span><FaUserCircle className={styles.icon_user}/></span>
                  <div className={styles.name_email}>
                  <span>{item.client_name}</span>
                  <span>{item.client_email}</span>
                  </div>
                </div>
                <span><DoubleRightOutlined className={styles.icons_client} /></span>
              </div>
      
               
              )

            })}
          
          </div>
        </div>

      </div>
    </div>
  )
}

export default EditTable