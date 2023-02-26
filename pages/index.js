import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/Components/Layout";
import { FileAddOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { useState } from 'react';
import Router from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Layout title="Dashboard">

    <div className={styles.dashboard_con}>
       
       <div className={styles.reportButon}>
       <Button type="primary" className={styles.reportBtn} shape="round" onClick={()=>Router.push("/Report")} >
       <FileAddOutlined />   Report
          </Button>
       </div>

    </div>
  </Layout>;
}
