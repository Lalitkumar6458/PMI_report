import Link from 'next/link';
import React from 'react'
import { RiFolderShield2Line } from "react-icons/ri";
  import {MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineCategory
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageSquareDots } from "react-icons/bi";
import { useRouter } from "next/router";

const Mobile_Tabs = () => {
  const router = useRouter()
    const menu = [
        {
          id: 1,
          name: "Home",
          link: "/",
          icon: (
            <MdOutlineSpaceDashboard className="icon_tab" />
          ),
        },
        {
          id: 2,
          name: "Chemical",
          link: "/Chemical",
          icon: (
            <CgProfile className="icon_tab" />
          ),
        },
        {
          id: 3,
          name: "Category",
          link: "/Category",
          icon: (
            <MdOutlineCategory className="icon_tab" />
          ),
        },
        {
          id: 4,
          name: "Settings",
          link: "/Settings",
          icon: (
            <MdOutlineAnalytics className="icon_tab" />
          ),
        },
  
        {
          id: 5,
          name: "More",
          link: "#",
          icon: (
            <BiMessageSquareDots className="icon_tab" />
          ),
        },
       
      ];
  return (
    <div className='mobile_tabs'
    >
        <ul>
            {menu.map((item)=>{
                return (
                    <li className={router.asPath == item.link?"active":""} key={item.id}><Link href={item.link}>{item.icon}{item.name}</Link></li>
                )
            })}
           
        </ul>
    </div>
  )
}

export default Mobile_Tabs