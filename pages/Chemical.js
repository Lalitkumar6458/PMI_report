import Layout from "@/Components/Layout";
import React, { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Input } from "antd";
import styles from "@/styles/Chemical.module.css";
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
import { ChemicalSave } from "@/Api/Url";
import axios from "axios";
var arrlist = {};
var table_th = [];
var table_td = [];
// var modalData;
const Chemical = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [chemicalInput, setChemicalInput] = useState({});
  const[gradeName,setGradeName]=useState('')

  const showModal = (data) => {
    console.log("data", data);
    setModalData({ ...data });
    setChemicalInput({ ...data.Chemical });
    setGradeName(data.grade)
    setOpen(true);
    console.log("modalData 345", modalData);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const Deletegrade = (item_id) => {
    alert("delete id" + item_id);
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

  const updateChemical = (e) => {  
    const { name, value } = e.target;
    setChemicalInput({
      ...chemicalInput,
      [name]: value,
    });
  };
  const UpdateChemical =()=>{
   
    const data={
      grade:gradeName,
      chemical:chemicalInput
    }
    console.log("chemicalInput",chemicalInput,data)
  }
  return (
    <Layout title="Chemical">
      <div className={styles.Chemical_container}>
        <div className={styles.alloys_content}>
          <h2>Add Chemical</h2>
          <button
            className={styles.small_height_b}
            onClick={() => {
              smallbox ? setSmallbox(false) : setSmallbox(true);
            }}
          >
            {smallbox ? <HiArrowNarrowUp /> : <HiArrowNarrowDown />}
          </button>
          <div
            className={
              smallbox
                ? `${styles.grade_chemical} row`
                : `${styles.grade_chemical} row height_set`
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
          <div className={styles.table_grades}>
            <h2>Chemical Compositions</h2>
            <div className={styles.chemical_comp}>
              <div className={styles.wrraper_box}>
                <div className={styles.search_box}>
                  <HiOutlineSearch className={styles.searchicon} />
                  <input type="text" placeholder="Search Grades chemical..." />
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
                  {Grade_data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className={styles.grade_td}>Grade:{item.grade}</td>
                        <td>
                          <div className={styles.divChemical}>
                            <table>
                              <thead>
                                <tr>
                                  {Object.keys(item.Chemical).map(
                                    (each, index) => {
                                      return <th key={index}>{each}</th>;
                                    }
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  {Object.keys(item.Chemical).map(
                                    (each, index) => {
                                      return (
                                        <td key={index}>
                                          {item.Chemical[each]}
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
                          <button onClick={() => Deletegrade(item.id)}>
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
                  {Grade_data.map((item) => {
                    return (
                      <tr>
                        <td className={styles.td_mobile}>
                          <div className={styles.divChemical}>
                            <h3>Grade:{item.grade}</h3>
                            <table>
                              <thead>
                                <tr>
                                  {Object.keys(item.Chemical).map(
                                    (each, index) => {
                                      return <th key={index}>{each}</th>;
                                    }
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  {Object.keys(item.Chemical).map(
                                    (each, index) => {
                                      return (
                                        <td key={index}>
                                          {item.Chemical[each]}
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
                                  onClick={() => Deletegrade(item.id)}
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
            <h3>(Grade:{modalData ? modalData.grade : ""})</h3>
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
