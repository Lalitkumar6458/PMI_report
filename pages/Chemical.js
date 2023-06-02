import Layout from "@/Components/Layout";
import React, { useState,useEffect } from "react";
import { Button, Modal, Input,message  } from "antd";
import styles from "@/styles/Chemical.module.css";
import Router from "next/router";
import { ApiEndPoint } from "@/public/ApiEndPoint";
import {

  FaPlusCircle,
  FaEdit,
} from "react-icons/fa";
import {
  HiOutlineSaveAs,
  HiOutlineSearch,

} from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import add_gif from "../public/Images/add_gif.gif";

import axios from "axios";
import BorderBox from "@/Components/SmallComponets/BorderBox";
import { useSession,getSession} from "next-auth/react"
import MessageAlert from "@/Components/SmallComponets/MessageAlert";
var arrlist = {};
var table_th = [];
var table_td = [];
// var modalData;

const Chemical = () => {
  const [messageApi, contextHolder] = message.useMessage()
    const {session ,status,data} = useSession()
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [chemicalInput, setChemicalInput] = useState({});
  const[gradeName,setGradeName]=useState('')
  const [searchKeyword, setSearchKeyword] = useState('')
  function messageAlert(type,content){
    const key = 'updatable';
   
    console.warn("session",userInfo)
 messageApi.open({
      key,
      type,
      content,
    })
  }
  const userInfo=data.user
console.log(userInfo,"session status")
  const showModal = (data) => {
    console.log("data", data);
    setModalData({ ...data });
    setChemicalInput({ ...data.chemical_name });
    setGradeName(data.Grade)
    setOpen(true);
    console.log("modalData 345", modalData);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const Deletegrade = async(item) => {
    messageAlert('loading','Deleting Grade...')
console.log("userInfo", userInfo,item);
    const data = {
      gradeId: item.id,
      user_info: item.user_info,
      chemical_grade_id: item.chemical_grade_id,
      username: userInfo.name,
      email: userInfo.email,
    };
    await axios
      .post(`${ApiEndPoint}delete_chemical/`, data, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
        console.log("response data c", response.data.data);
        messageAlert('success','Succesfully Deleted Grade')

        // setAllGradeData(response.data.data)
        // console.log("AllGradeData", allGradeData[1].chemical_name)
        getAllChemicalData()
        setOpen(false);
      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        messageAlert('error',error.message)

        console.log(error, "error");
      });
  };
  
  const initialValues = {
    el_name: "",
    percent: "",
  };
  const [values, setValues] = useState(initialValues);
  const [grade, setGrade] = useState("");
  const [checkempty, setCheckempty] = useState(true);

  const [gradedata, setGradedata] = useState({});
  const [allGradeData, setAllGradeData]=useState([])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const Gradehandler = (e) => {
    const { value } = e.target;
    setGrade(value);
  };

  const sumbit_input = () => {
    if (values.el_name == "" || values.percent == "" || grade == "") {
      if (values.el_name == "" && values.percent == "" && grade == "") {
        setCheckempty(true);
        alert("all empt");
      } else {
        alert("all not empty");
      }
    } else {
      setCheckempty(false);
      console.log("values", values, gradedata);
      table_th.push(values.el_name);
      table_td.push(values.percent);

      setGradedata({
        ...gradedata,
        [values.el_name]: values.percent,
      });
      Object.assign(arrlist, { [values.el_name]: values.percent });

      setValues({
        el_name: "",
        percent: "",
      });
    }
  };

  const saveGrade = () => {
    const key = 'updatable';
    messageAlert('loading','Loading...')
  
    const data_obj = JSON.stringify({
      grade_name: grade,
      chemical_name: arrlist,
      username:userInfo.name,
      email: userInfo.email
    });

    axios
      .post(`${ApiEndPoint}chemical_page_add/`, data_obj, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
        console.log("response data c", response.data);
    messageAlert('success','Succesfully Saved Grade Chemical')
        getAllChemicalData()
      })
      .catch((error) => {
      
        console.log(error, "error");
        messageAlert('error',error.message)
        // messageApi.open({
        //   key,
        //   type: 'error',
        //   content: error.message,
        //   duration: 2,
        // });
      });
  };
  const updateChemical = async (e) => {  
    const { name, value } = e.target;
    setChemicalInput({
      ...chemicalInput,
      [name]: value,
    });
  
  };
  const UpdateChemical =async()=>{
    messageAlert('loading','Loading...')
    const data = {
      grade: gradeName,
      chemical_grade_id: modalData.chemical_grade_id,
      chemical: chemicalInput,
      username: userInfo.name,
      email: userInfo.email,
    };
    console.log("chemicalInput", chemicalInput, data, modalData)

    await axios
      .post(`${ApiEndPoint}update_chemical/`, data, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
    messageAlert('success','Succesfully Update Grade Chemical')
        
        getAllChemicalData()
        setOpen(false);
      })
      .catch((error) => {
      
        console.log(error, "error");
        messageAlert('error',error.message)

      });
  }
  const getAllChemicalData=async()=>{
    messageAlert('loading','Geting grade chemical Data...')

    const data_obj = {
      getdata: "allData",
      username: userInfo.name,
      email:  userInfo.email
    };
   await axios.get(`${ApiEndPoint}get_grade_chemical_data/`,{params:data_obj}, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,

      })
      .then((response) => {
        console.log("response data c", response.data.data);
        setAllGradeData(response.data.data)
        messageAlert('success','Succesfully Get all Grade Chemical data')

        console.log("AllGradeData", allGradeData[1].chemical_name)
      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        console.log(error, "error");
    messageAlert('error',error.message)

      });
  }
  useEffect(() => {
    getAllChemicalData()
  }, [])
  const SearchGradeHandler =async(e)=>{
    messageAlert('loading','Searching grade...')

    setSearchKeyword(e.target.value)
        
    
   
   
    
    await axios
      .get(
        `${ApiEndPoint}search_grade/`,
        {
          params: {
            word: e.target.value,
            username: userInfo.name,
            email:  userInfo.email
          },
        },
        {
          "Content-Type": "application/json",
          Connection: "Keep-Alive",
          Authorization: `Bearer test`,
        }
      )
      .then((response) => {
        console.log("response data c", response.data.data);
        messageAlert('success','Succesfully Get Search result')

        setAllGradeData(response.data.data);
   
      })
      .catch((error) => {
        
        console.log(error, "error");
    messageAlert('error',error.message)

      });
  }
  // if(status !== "authenticated" ){
  //   Router.replace('/login')
  //   }
  console.log("useSession lalit ",useSession())
  return (
    <Layout title="Chemical">
 {contextHolder}
      <div className={styles.Chemical_container}>
        <div className={styles.alloys_content}>
          <BorderBox title={"Add Chemical"}>
          <div
            className={
             `${styles.grade_chemical} row`
            }
          >
            <div className={`${styles.input_field} col-12 col-md-6 drop_box`}>
              <div className={`${styles.input_div} ${styles.grade_input} `}>
                <label>Grade Name</label>
                <input
                  type="text"
                  placeholder="Enter Grade name..."
                  value={grade}
                  name="grade_name"
                  onChange={Gradehandler}
                />
              </div>
              <div className={styles.group_input}>
                <div className={styles.input_div}>
                  <label>Element Name</label>
                  <input
                    type="text"
                    value={values.el_name}
                    name="el_name"
                    onChange={handleInputChange}
                    placeholder="Enter Element name..."
                  />
                </div>
                <div className={styles.input_div}>
                  <label>Percent(%)</label>
                  <input
                    type="text"
                    placeholder="Enter percnetage name..."
                    value={values.percent}
                    name="percent"
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className={styles.add_btn}
                  onClick={() => sumbit_input()}
                >
                  Add <FaPlusCircle />
                </button>
              </div>
            </div>
            <div
              className={`${styles.table_fields} col-12 col-md-6 drop_box`}
              id="table_fields"
            >
              {checkempty ? (
                <div className={styles.empty_table}>
                  <Image src={add_gif} alt="" />
                  <h4>Add Grade Name And it's Chemical</h4>
                </div>
              ) : (
                <div>
                  <h5>Grade:{grade}</h5>
                  <table>
                    <thead>
                      <tr id="chemical_row">
                        {table_th.map((item) => {
                          return <th>{item}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="chemical_data">
                        {table_td.map((item) => {
                          return <td>{item}</td>;
                        })}
                      </tr>
                    </tbody>
                  </table>
                  <button
                    className={styles.add_btn}
                    onClick={() => saveGrade()}
                  >
                    Save <HiOutlineSaveAs />
                  </button>
                </div>
              )}
            </div>
          </div>
          </BorderBox>
          <BorderBox title={"Chemical Compositions"}>
          <div className={styles.table_grades}>
            <div className={styles.chemical_comp}>
              <div className={styles.wrraper_box}>
                <div className={styles.search_box}>
                  <HiOutlineSearch className={styles.searchicon} />
                  <input type="text" placeholder="Search Grades chemical..." value={searchKeyword} onChange={SearchGradeHandler} />
                </div>
              </div>

              <table className={styles.main_grade}>
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Chemical</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allGradeData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className={styles.grade_td}>Grade:{item.Grade}</td>
                        <td>
                          <div className={styles.divChemical}>
                            <table>
                              <thead>
                                <tr>
                                  {Object.keys(item.chemical_name).map(
                                    (each, index) => {
                                      return <th key={index}>{each}</th>;
                                    }
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  {Object.keys(item.chemical_name).map(
                                    (each, index) => {
                                      return (
                                        <td key={index}>
                                          {item.chemical_name[each]}
                                        </td>
                                      );
                                    }
                                  )}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                        <td className={styles.button_actions}>
                          <button onClick={() => showModal(item)}>
                            Edit <FaEdit className={styles.icon_t} />
                          </button>
                          <button onClick={() => Deletegrade(item)}>
                            Delete <MdDelete className={styles.icon_t} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <table className={styles.mobile_table_c}>
                <tbody>
                  {allGradeData.map((item) => {
                    console.log("item",item)
                    return (
                      <tr>
                        <td className={styles.td_mobile}>
                          <div className={styles.divChemical}>
                            <h3>Grade:{item.Grade}</h3>
                            <table>
                              <thead>
                                <tr>
                                  {Object.keys(item.chemical_name).map(
                                    (each, index) => {
                                      return <th key={index}>{each}</th>;
                                    }
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  {Object.keys(item.chemical_name).map(
                                    (each, index) => {
                                      return (
                                        <td key={index}>
                                          {item.chemical_name[each]}
                                        </td>
                                      );
                                    }
                                  )}
                                </tr>
                              </tbody>
                            </table>
                            <div className={styles.buttons_eddit}>
                              <span>
                                <FaEdit
                                  className={styles.icon_edit}
                                  onClick={() => showModal(item)}
                                />
                              </span>
                              <span>
                                <MdDelete
                                  className={styles.icon_delete}
                                  onClick={() => Deletegrade(item)}
                                />
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
            </BorderBox>
          
        </div>
      </div>
      <Modal
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Ok"
        bodyStyle={{
          height: "auto",
          width: "295px",
          paddingBottom: "15px",
        }}
        width="295px"
        cancelText="Cencel"
      >
        <div className={styles.chemical_update}>
          <div className={styles.chemical_hed}>
            <h2>Chemical Update </h2>
            <h3>(Grade:{modalData ? modalData.Grade : ""})</h3>
          </div>
          <div className={styles.input_box}>
            <div className={styles.grade_box}>
              <label>Grade:</label>
              <Input
                placeholder="grade name"
                value={gradeName}
                onChange={(e)=>setGradeName(e.target.value)}
              />
            </div>

            {chemicalInput
              ? Object.keys(chemicalInput).map((item) => {
                  console.log(item, "data");
                  return (
                    <div className={styles.grade_box}>
                      <label>{item}:</label>
                      <Input
                        placeholder="grade name"
                        name={item}
                        value={chemicalInput[item]}
                        onChange={updateChemical}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
          <div className={styles.button_group}>
            <Button className={styles.Cancel_btn} onClick={hideModal}>
              Cencel
            </Button>

            <Button className={styles.Update_btn} onClick={UpdateChemical}>
              Update
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Chemical;

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