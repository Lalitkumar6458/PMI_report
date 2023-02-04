import React from 'react'
import styles from "../styles/Topbar.module.css"
import { FiSearch,FiChevronDown } from "react-icons/fi";
import { FaUserCircle} from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiLogOut,BiHelpCircle } from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';

const TopBar = () => {


    
  return (
    <div className={styles.top_bar_con}>
        <h2>Dashboard</h2>
        <div className={styles.right_btn_con}>

            <span><FiSearch className={styles.icon_t}/>  </span>
            <span><IoNotificationsOutline className={styles.icon_t} /></span>
            <div className={styles.usen_info_con}>
                <span><FaUserCircle className={styles.icon_user} /></span>
                <div className={styles.dopdown_user}>

                <h5>Username </h5><FiChevronDown className={styles.icon_drop} />
                <div className={styles.drop_down}>
                    <ul>
                        <li><Link href=""><FaUserCircle />Profile</Link></li>
                        <li><Link href=""><BiHelpCircle />Help</Link></li>
                        <li><Link href=""><BiLogOut/>Logout</Link></li>
                    </ul>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TopBar