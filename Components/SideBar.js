import React ,{useState} from 'react'
import styles from "@/styles/Sidebar.module.css";
import { FaAngleLeft } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCategory } from "react-icons/md";
import Image from 'next/image';
import logo from "../public/Images/pmilogo.png"
import Link from 'next/link';


const SideBar = () => {
    const[sidebar,setSidebar]=useState(false)
    function handler_side_bar(){
        if(sidebar==false){
            setSidebar(true)
            $(".container_main").css("grid-template-columns","5% auto")
        }else{
            $(".container_main").css("grid-template-columns","17% auto")
            setSidebar(false)
        }
     
 
    }
  return (
    <div className={styles.side_bar_main}>
        
    <div className={styles.close_sidebar} onClick={()=>handler_side_bar()}>
        <FaAngleLeft className={styles.icon_left}/>
    </div>
    <div className={styles.logo_name}>
        <Image src={logo} alt="logo"/>
        <h2>PMI Report</h2>
    </div>
    <div className={styles.side_all_links}>
        <label>Menu</label>
<ul>
    <li><Link href="/"><RxDashboard/>Dashboard</Link></li>
    <li><Link href="/Chemical">Chemical</Link></li>
    <li><Link href="/Category"><MdOutlineCategory/>Category</Link></li>
    <li><Link href="/History">History</Link></li>
    <li><Link href="/About">About</Link></li>
</ul>
<label>General</label>
<ul>
    <li><Link href="/">File & Folders</Link></li>
    <li><Link href="/Chemical">Settings</Link></li>
    </ul>
    </div>
    </div>
  )
}

export default SideBar