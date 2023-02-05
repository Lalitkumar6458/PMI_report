import Layout from '@/Components/Layout'
import React,{useState} from 'react'
import styles from "@/styles/Chemical.module.css";
import { FaAngleLeft, FaAngleRight, FaPlusCircle,FaEdit} from "react-icons/fa";
import { HiOutlineSaveAs,HiOutlineSearch } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Image from 'next/image';
import add_gif from "../public/Images/add_gif.gif"
var arrlist={}
var table_th=[]
var table_td=[]

const Chemical = () => {

  const initialValues = {
    el_name:"",
    percent:""
    
  };
  const [values, setValues] = useState(initialValues);
  const [grade,setGrade]=useState('')
  const [checkempty,setCheckempty]=useState(true)

  const [gradedata, setGradedata] = useState({});


  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
   
  };
  const Gradehandler
   =(e)=>{
const{value}=e.target;
setGrade(value)
console.log(value,"grade_name")
  }

 
  const sumbit_input=()=>{
    if(values.el_name == ""||values.percent=="" || grade == "" ){
   if(values.el_name == "" && values.percent=="" && grade == ""){
    setCheckempty(true)
    alert("all empt")
   }else{
    alert("all not empty")
   }
    }else{
      setCheckempty(false)
      console.log("values",values,gradedata)
      table_th.push(values.el_name)
      table_td.push(values.percent)


  
      setGradedata({
        ...gradedata,
        [values.el_name]:values.percent
      })
      Object.assign(arrlist, {[values.el_name]: values.percent});
  
      setValues({
        el_name:"",
        percent:""
      })
  
      console.log("gradedata",arrlist)

    }
  

  }
  const saveGrade=()=>{
    var saveData=[grade,arrlist]
    console.log("data",saveData)
  }
  return <Layout title="Chemical">
    <div className={styles.Chemical_container}>
     <div className={styles.alloys_content}>
      <h2>Add Chemical</h2>
      <div className={styles.grade_chemical}>
        <div className={styles.input_field}>
          <div className={`${styles.input_div} ${styles.grade_input}`}>
            <label>Grade Name</label>
            <input type="text" placeholder='Enter Grade name...' value={grade} name="grade_name"
    onChange={Gradehandler} />
          </div>
          <div className={styles.group_input}>
          <div className={styles.input_div}>
            <label>Element Name</label>
            <input type="text" value={values.el_name} name="el_name"
    onChange={handleInputChange}   placeholder='Enter Element name...'  />
          </div>
          <div className={styles.input_div}>
            <label>Percent(%)</label>
            <input type="text" placeholder='Enter percnetage name...' value={values.percent} name="percent"
    onChange={handleInputChange}  />
          </div>
          <button className={styles.add_btn} onClick={()=>sumbit_input()}>Add <FaPlusCircle/></button>
          </div>
        </div>
        <div className={styles.table_fields} id="table_fields">

          {checkempty?<div className={styles.empty_table}>

<Image src={add_gif} alt=""/>
<h4>Add Grade Name And 
it's Chemical</h4>
          </div>:<div >
            <h5>Grade:{grade}</h5>
          <table>
            <thead>
              <tr id="chemical_row">
                {
                  table_th.map((item)=>{
                    return <th>{item}</th>
                  })
                }
               
              </tr>
            </thead>
            <tbody>
              <tr id="chemical_data">
              {
                  table_td.map((item)=>{
                    return <td>{item}</td>
                  })
                }
              </tr>
            </tbody>
          </table>
          <button className={styles.add_btn} onClick={()=>saveGrade()}>Save <HiOutlineSaveAs/></button></div>
        }
          
        </div>

      </div>
      <div className={styles.table_grades}>

      <h2>Chemical Compositions</h2>
      <div className={styles.chemical_comp}>
        <div className={styles.wrraper_box}>
        <div className={styles.search_box}>
<HiOutlineSearch className={styles.searchicon}/>
        <input type="text" placeholder='Search Grades chemical...'/>
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
            <tr>
              <td className={styles.grade_td}>Grade:316L</td>
              <td>
                <div className={styles.divChemical}>
                  <table >
                    <thead>
                      <tr>
                        <th>Ni</th>
                        <th>Cr</th>
                        <th>Mn</th>
                        <th>Mo</th>
                        <th>Co</th>
                        <th>Cu</th>
                        <th>Fe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10-14</td>
                        <td>2.00 max</td>
                        <td>23-25</td>
                        <td>20-56</td>
                        <td>10-14</td>
                        <td>10-14</td>
                        <td>10-14</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td className={styles.button_actions}>
              <button>Edit <FaEdit className={styles.icon_t}/></button>
               <button>Delete <MdDelete className={styles.icon_t}/></button>
              </td>
            </tr>

            <tr>
              <td>Grade:316L</td>
              <td>
                <div className={styles.divChemical}>
                  <table >
                    <thead>
                      <tr>
                        <th>Ni</th>
                        <th>Cr</th>
                        <th>Mn</th>
                        <th>Mo</th>
                        <th>Co</th>
                        <th>Cu</th>
                        <th>Fe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10-14</td>
                        <td>2.00 max</td>
                        <td>23-25</td>
                        <td>20-56</td>
                        <td>10-14</td>
                        <td>10-14</td>
                        <td>10-14</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td className={styles.button_actions}>
              <button>Edit <FaEdit className={styles.icon_t}/></button>
               <button>Delete <MdDelete className={styles.icon_t}/></button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      </div>
     </div>
    </div>
  </Layout>
}

export default Chemical