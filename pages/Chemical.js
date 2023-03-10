import Layout from "@/Components/Layout";
import React, { useState,useEffect } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Input } from "antd";
import styles from "@/styles/Chemical.module.css";
import { GetChemicalData, ChemicalSave, Update_chemical, Delete_chemical, SearchGrade_chemical } from "@/Api/Url";
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlusCircle,
  FaEdit,
} from "react-icons/fa";
import {
  HiOutlineSaveAs,
  HiOutlineSearch,
  HiArrowNarrowDown,
  HiArrowNarrowUp,
} from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import add_gif from "../public/Images/add_gif.gif";

import axios from "axios";
import BorderBox from "@/Components/SmallComponets/BorderBox";
var arrlist = {};
var table_th = [];
var table_td = [];
// var modalData;
const Chemical = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [chemicalInput, setChemicalInput] = useState({});
  const[gradeName,setGradeName]=useState('')
  const [searchKeyword, setSearchKeyword] = useState('')


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
    const data={
      gradeId:item.id,
      chemical_grade_id: item.chemical_grade
    }
    await axios
      .post(Delete_chemical, data, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
        console.log("response data c", response.data.data);
        // setAllGradeData(response.data.data)
        // console.log("AllGradeData", allGradeData[1].chemical_name)
        getAllChemicalData()
        setOpen(false);
      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
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
  const [smallbox, setSmallbox] = useState(false);

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
    var saveData = [grade, arrlist];
    const headers = {
      "Content-Type": "application/json",
      Authorization: "JWT fefege...",
    };
    var data = {
      grade_name: grade,
      chemical: arrlist,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        grade_name: grade,
        chemical: arrlist,
      },
    };
    // fetch(ChemicalSave,JSON.stringify({
    //   grade_name:grade,
    //   chemical:arrlist
    // }))
    //     .then(response => console.log(response.json(),"data"))
    //     .then(data => console.log(data));
    const data_obj = JSON.stringify({
      grade_name: grade,
      chemical_name: arrlist,
    });

    axios
      .post(ChemicalSave, data_obj, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
        console.log("response data c", response.data);
        getAllChemicalData()
      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        console.log(error, "error");
      });
  };


  const Grade_data = [
    {
      id: 1,
      grade: "304L",
      Chemical: {
        Ni: "57.00",
        Cr: "1.0*",
        Mo: "21.00",
        Fe: "19.00",
      },
    },
    {
      id: 2,
      grade: "316L",
      Chemical: {
        Ni: "57.00",
        Cr: "1.0*",
        Mo: "21.00",
        Fe: "19.00",
      },
    },
  ];

  const updateChemical = async (e) => {  
    const { name, value } = e.target;
    setChemicalInput({
      ...chemicalInput,
      [name]: value,
    });
  
  };
  const UpdateChemical =async()=>{
   
    const data={
      grade:gradeName,
      chemical_grade_id: modalData.chemical_grade,
      chemical:chemicalInput
    }
    console.log("chemicalInput", chemicalInput, data, modalData)

    await axios
      .post(Update_chemical, data, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
        console.log("response data c", response.data.data);
        // setAllGradeData(response.data.data)
        // console.log("AllGradeData", allGradeData[1].chemical_name)
        getAllChemicalData()
        setOpen(false);
      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        console.log(error, "error");
      });
  }
  const getAllChemicalData=async()=>{
    const data_obj={
      getdata:"allData"
    }
   await axios
      .get(GetChemicalData, data_obj, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
        console.log("response data c", response.data.data);
        setAllGradeData(response.data.data)
        console.log("AllGradeData", allGradeData[1].chemical_name)
      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        console.log(error, "error");
      });
  }
  useEffect(() => {
    getAllChemicalData()
  }, [])
  const SearchGradeHandler =async(e)=>{
    setSearchKeyword(e.target.value)
        
    const data={
      word:e.target.value
    }
   
    console.log("putt", e.target.value)
    
    await axios
      .get(SearchGrade_chemical, {
        params: {
          word: e.target.value
        }
      }, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
        console.log("response data c", response.data.data);
        setAllGradeData(response.data.data)
        // console.log("AllGradeData", allGradeData[1].chemical_name)
      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        console.log(error, "error");
      });
  }
  return (
    <Layout title="Chemical">
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
