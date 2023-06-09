import React, { useState } from 'react'
import css from "../../styles/Settings.module.css"
import { IoLogOutOutline,IoClose } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { HiCheck } from "react-icons/hi2";
import { getSession, useSession, signOut } from "next-auth/react"
const Profile = () => {
    const { data: session } = useSession()
    const[UpdateValue,setUpdatevalue]=useState({
        name:"Lalit kumar",
        email:"lalitkumar@gmail.com",
        password:"******er85349",
        phone:"+91 98775635834",
        company:"SAL Info Tech"
    })

    const[EditData,setEditData]=useState([
        {
            id:1,
            name:"name",
            value:UpdateValue.name,
            inputStatus:true


        },
        {
            id:2,
            name:"email",
            value:UpdateValue.email,
            inputStatus:true
        },
        {
            id:3,
            name:"password",
            value:UpdateValue.password,
            inputStatus:true
        },
        {
            id:4,
            name:"phone",
            value:UpdateValue.phone,
            inputStatus:true
            

        },
        {
            id:5,
            name:"company",
            value:UpdateValue.company,
            inputStatus:true
        }
    ])

    function changeValueObj(name,value){
        let newData=[]
        EditData.map((item)=>{
            if(item.name == name){
                newData.push(
                    {
                        id:item.id,
                        name:item.name,
                        value:item.value,
                        inputStatus:value
                    }
                )
              
            }else{
                newData.push(item)
            }
        
          
        })
setEditData(newData)
    }
    
    const EditInputHandler=(name)=>{
changeValueObj(name,false)
    }


    const CancelHandler=(name)=>{
        changeValueObj(name,true)

    }
    const UpdateHandler=(name)=>{
changeValueObj(name,true)
    }
    const OnchageInput=(e)=>{
        const {name,value}=e.target
   
        setUpdatevalue({
            ...UpdateValue,
            [name]:value
        })


    }
  return (
   <>
   <div className={css.ProfileCon}>
    <div className={css.profileCamera}>
        <div className={css.imageUplode}>
            <div className={css.avtarBox}  style={{textTransform:"uppercase"}}>{
session.user.name.split(" ")[0][0]+session.user.name.split(" ")[1][0]
            }
            
            </div>
           
           <div className={css.emailName} >
            <h4 style={{textTransform:"capitalize"}}>{session.user.name}</h4>
            <p>{session.user.email}</p>
        </div>
        </div>
       
        <div className={css.logout}>
    <button>Logout <IoLogOutOutline/></button>
        </div>
    </div>

    <div className={css.Editsection}>
      <div className={css.EditHeading}>
        <h2>Profile Details</h2>
        <div className={css.lineheading}>

        </div>
        <div className={css.logout}>
    <button>Logout <IoLogOutOutline/></button>
        </div>
        <div className={css.EditBox}>


            {
                EditData.map((item)=>{
                    return(
                        <div className={css.EditRow} key={item.id}>
                            <div className={`${css.inputlabel} d-flex  flex-column flex-sm-row`}>
                            <label>{item.name}</label>
                            <input type='text' value={UpdateValue[item.name]} onChange={OnchageInput} name={item.name} disabled={item.inputStatus} />
                                </div>
                      
                        <div className={css.EditButton}>
                          
                           {
                            item.inputStatus? <BiEdit className={css.Editicon} onClick={()=>EditInputHandler(item.name)}/>:(
                                <div className={css.UpdateBtn}>
                                <IoClose onClick={()=>CancelHandler(item.name)} className={css.CancelIcon}/>
                                <HiCheck  onClick={()=>UpdateHandler(item.name)} className={css.Updateicon}/>
                            </div>
                            )
                           } 
                        </div>
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

export default Profile