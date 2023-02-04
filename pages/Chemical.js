import Layout from '@/Components/Layout'
import React from 'react'
import styles from "@/styles/Chemical.module.css";
import { FaAngleLeft, FaAngleRight, FaPlusCircle} from "react-icons/fa";
const Chemical = () => {
  return <Layout title="Chemical">
    <div className={styles.Chemical_container}>
     <div className={styles.alloys_content}>
      <h2>Add Chemical</h2>
      <div className={styles.grade_chemical}>
        <div className={styles.input_field}>
          <div className={styles.input_div}>
            <label>Grade Name</label>
            <input type="text" placeholder='Enter Grade name...' />
          </div>
          <div className={styles.group_input}>
          <div className={styles.input_div}>
            <label>Element Name</label>
            <input type="text"  placeholder='Enter Element name...' />
          </div>
          <div className={styles.input_div}>
            <label>Percent(%)</label>
            <input type="text" placeholder='Enter percnetage name...' />
          </div>
          <button className={styles.add_btn}>Add <FaPlusCircle/></button>
          </div>
        </div>
        <div className={styles.table_fields}>
          
        </div>

      </div>
      <div className={styles.table_grades}>

      </div>
     </div>
    </div>
  </Layout>
}

export default Chemical