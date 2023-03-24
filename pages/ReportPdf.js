import React from 'react'
import MyDocument from '@/Components/ReportPdf/ReportPdfFormat'
import { PDFViewer,PDFDownloadLink } from '@react-pdf/renderer';
const ReportPdf = () => {
  const styles = {
    container: {
      width: '100%',
      height: '100%',
     
    },
    viewer: {
      width: '100%',
      height: '100%',
      '@media max-width: 420px': {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
  };
  return (
    <>
     <div style={styles.container}>
    <PDFViewer style={styles.viewer}>
      <MyDocument />
    </PDFViewer>
    {/* <PDFDownloadLink document={<MyDocument/>}>
    Gerando seu exame...
    </PDFDownloadLink> */}
  </div>
   {/* <PDFViewer style={{width:"100%",height:"100vh"}}>
   {/* <PDFDownloadLink document={
   
   <PDFViewer style={{width:"100%",height:"100vh"}}>

     <MyDocument/>
   </PDFViewer>
   
   } fileName="exame-covid.pdf">
   Gerando seu exame...
    </PDFDownloadLink> */}
    {/* <MyDocument />
  </PDFViewer> */} 
    </>
  )
}

export default ReportPdf