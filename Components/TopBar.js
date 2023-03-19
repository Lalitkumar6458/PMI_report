import React,{useEffect,useState,useRef} from 'react'
import styles from "../styles/Topbar.module.css"
import { FiSearch,FiChevronDown } from "react-icons/fi";
import { FaUserCircle} from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiLogOut,BiHelpCircle } from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/Images/pmilogo.png"
import { Logout_User } from '@/Api/Url';
import axios from 'axios';
import { Avatar, Space } from 'antd';
import { getSession, useSession, signOut } from "next-auth/react"
import Router from 'next/router';
import { UserOutlined } from '@ant-design/icons';


const TopBar = () => {
const[userdrop,setUserdrop]=useState(false)
const wrapperRef = useRef(null);
const ref_div = useRef(null);
const { data: session } = useSession()
var username = localStorage.getItem("username");
console.log("useSession()",useSession())



const Logouthandler =async()=>{
    var data={
username:localStorage.getItem('username'),
    }
    signOut()

}
const dropDown_show=()=>{
    setUserdrop(!userdrop); 
}

  return (
    <>
      <div className={styles.top_bar_con}>
        <h2>Dashboard</h2>

        <div className={styles.right_btn_con}>
          <span>
            <FiSearch className={styles.icon_t} />{" "}
          </span>
          <span>
            <IoNotificationsOutline className={styles.icon_t} />
          </span>
          <div className={styles.usen_info_con}>
            {
              session?.user.image?<Avatar src={<img src={session?.user.image}  unoptimized={true} width={20} height={20} alt="avatar" />}  />: <Avatar icon={<UserOutlined />} />
            }
         
            <div
              className={styles.dopdown_user}
              id="drop_down_user"
              ref={ref_div}
              onClick={() => dropDown_show()}
            >
              <h5>{session?.user.name}</h5>
              <FiChevronDown className={styles.icon_drop} />
              {userdrop ? (
                <div className={styles.drop_down} id="drop_down">
                  <ul>
                    <li>
                      <Link href="/UserProfile">
                        <FaUserCircle className={styles.icons_drop} />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <BiHelpCircle className={styles.icons_drop} />
                        Help
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={() => Logouthandler()}>
                        <BiLogOut className={styles.icons_drop} />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile_topbar}>
        <div className={styles.mobile_top_bar}>
          <Image src={logo} alt="logo" />
          <h3>Pmi Report</h3>
        </div>
        <div className={styles.right_btn_con}>
          <span>
            <FiSearch className={styles.icon_t} />{" "}
          </span>
          <div className={styles.usen_info_con}>
          {
              session?.user.image?<Avatar src={<img src={session?.user.image}  unoptimized={true} width={20} height={20} alt="avatar" />}  />: <Avatar icon={<UserOutlined />} />
            }
         
            <div
              className={styles.dopdown_user}
              id="drop_down_user"
              ref={wrapperRef}
              onClick={() => dropDown_show()}
            >
              <h5>{session?.user.name}</h5>  
              <FiChevronDown className={styles.icon_drop} />
              {userdrop ? (
                <div className={styles.drop_down} id="drop_down">
                  <ul>
                    <li>
                      <Link href="/UserProfile">
                        <FaUserCircle className={styles.icons_drop} />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <BiHelpCircle className={styles.icons_drop} />
                        Help
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={() => Logouthandler()}>
                        <BiLogOut className={styles.icons_drop} />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar