import React,{useEffect,useState,useRef} from 'react'
import styles from "../styles/Topbar.module.css"
import { FiSearch,FiChevronDown } from "react-icons/fi";
import { FaUserCircle} from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiLogOut,BiHelpCircle } from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/Images/pmilogo.png"





const TopBar = () => {
const[userdrop,setUserdrop]=useState(false)
const wrapperRef = useRef(null);
const ref_div = useRef(null);

// function useOutsideAlerter(ref) {
//     useEffect(() => {
//       /**
//        * Alert if clicked on outside of element
//        */
//       function handleClickOutside(event) {
//         if (ref.current && !ref.current.contains(event.target)) {
//             setUserdrop(false)
//         }
//       }
//       // Bind the event listener
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         // Unbind the event listener on clean up
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [ref]);
//   }


// useOutsideAlerter(wrapperRef);
// useOutsideAlerter(ref_div);
const dropDown_show=()=>{
    if(userdrop == false){
       
        setUserdrop(true)
    }else{
     
        setUserdrop(false)
    }
}

  return (
    <>
      <div className={styles.top_bar_con}>
        <h2>Dashboard</h2>

       
        <div className={styles.right_btn_con}>

            <span><FiSearch className={styles.icon_t}/>  </span>
            <span><IoNotificationsOutline className={styles.icon_t} /></span>
            <div className={styles.usen_info_con}>
                <span><FaUserCircle className={styles.icon_user} /></span>
                <div className={styles.dopdown_user} id="drop_down_user" ref={ref_div} onClick={()=>dropDown_show()}>

                <h5>Username </h5><FiChevronDown className={styles.icon_drop} />
               {userdrop?<div className={styles.drop_down} id="drop_down">
                    <ul>
                        <li><Link href="/UserProfile"><FaUserCircle className={styles.icons_drop} />Profile</Link></li>
                        <li><Link href=""><BiHelpCircle className={styles.icons_drop} />Help</Link></li>
                        <li><Link href=""><BiLogOut className={styles.icons_drop}/>Logout</Link></li>
                    </ul>
                </div>:null} 
                </div>
            </div>

        </div>
    </div>
    <div className={styles.mobile_topbar}>
    <div className={styles.mobile_top_bar}>
            <Image src={logo} alt="logo"/>
            <h3>Pmi Report</h3>
        </div>
        <div className={styles.right_btn_con}>

            <span><FiSearch className={styles.icon_t}/>  </span>
            <div className={styles.usen_info_con}>
                <span><FaUserCircle className={styles.icon_user} /></span>
                <div className={styles.dopdown_user} id="drop_down_user" ref={wrapperRef} onClick={()=>dropDown_show()}>

                <h5>Username </h5><FiChevronDown className={styles.icon_drop} />
               {userdrop?<div className={styles.drop_down} id="drop_down">
                    <ul>
                        <li><Link href="/UserProfile"><FaUserCircle className={styles.icons_drop} />Profile</Link></li>
                        <li><Link href=""><BiHelpCircle className={styles.icons_drop} />Help</Link></li>
                        <li><Link href=""><BiLogOut className={styles.icons_drop}/>Logout</Link></li>
                    </ul>
                </div>:null} 
                </div>
            </div>

        </div>
    </div>
    </>
  
  )
}

export default TopBar