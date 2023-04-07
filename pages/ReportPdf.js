import React from 'react'
import MyDocument from '@/Components/ReportPdf/ReportPdfFormat'
import {PDFViewer,BlobProvider , PDFDownloadLink } from '@react-pdf/renderer';
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
  
      <div className="DownloadButton">




        
      <div className=''>
      <BlobProvider document={<MyDocument/>} style={styles.viewer} fileName="my-document.pdf">
      {({ url, loading, error }) => (
        loading ? 'Loading document...' :
        error ? 'Error loading document :(' :
        <a href={url} className="btnBox" target="_blank">Download PDF <DownloadOutlined /> </a>
      )}
    </BlobProvider>
 
      </div>

    </div>

  </div>

    </>
  )
}

export default ReportPdf