import React from 'react'
import MyDocument from '@/Components/ReportPdf/ReportPdfFormat'
import {PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { DownloadOutlined } from '@ant-design/icons';

const ReportPdf = () => {

         var data=JSON.parse(localStorage.getItem("ReportAllDAta"))

        var date=data.date.split("T")[0].replaceAll("-","_")
        var gradeName=data.Gradename
  const styles = {
    container: {
      width: '100%',
      height: '100vh',
     
    },
    viewer: {
      width: '100%',
      height: '100%',
      '@media max-width: 420px': {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    downloadbtn:{
      fontSize:"20px",
      background:"#081A51",
      color:"#fff",
      textDecoration:"none",
      padding:"10px",
      borderRadius:"5px"
   
    }
  };
  return (
    <>
     <div style={styles.container}>
    {/* <PDFViewer style={styles.viewer}>
      <MyDocument />
    </PDFViewer> */}
      <div className="DownloadButton">
    <PDFDownloadLink document={<MyDocument/>} style={styles.downloadbtn} fileName={gradeName+"_"+data.partyname+"_"+date}>
      <div className='btnBox'>

    <span>Pdf Download</span>  <DownloadOutlined />
      </div>
    </PDFDownloadLink>
    </div>

  </div>

    </>
  )
}

export default ReportPdf