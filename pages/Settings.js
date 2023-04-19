import Layout from '@/Components/Layout'
import React from 'react'
import css from "../styles/Settings.module.css"
import { Radio, Space, Tabs } from "antd";
import Profile from '@/Components/Settings/Profile';
import { useState } from "react";
import { getSession, useSession, signOut } from "next-auth/react"


const Settings = ({session}) => {
  console.log(session,"settings session")
    const changeTabPosition = (e) => {
      setTabPosition(e.target.value);
    };

    
    const tabsItem = [
      {
        key: 1,
        label: "User Profile",
        children: <Profile/>,

      },
      {
        key: 2,
        label: "Latter Pad",
        children: "latter Pad",
      },
      {
        key: 3,
        label: "Report Formate",
        children: "Report Formate",
      },
      {
        key: 4,
        label: "Help",
        children: "Help",
      },
    ];
  return (
    <>
      <Layout title="Settings">
        <div className={css.Settings_page}>

            <div className={css.Settings_bredcrum}>
         <p>Settings/UserProfile</p>
            </div>
            <h3>User Profile</h3>
          <div className={css.Settings_Tabs}>
            <Tabs tabPosition={"top"} items={tabsItem} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Settings


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