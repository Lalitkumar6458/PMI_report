import React,{useState} from 'react'
import MyDocument from '@/Components/ReportPdf/ReportPdfFormat'
// import { Image } from "antd";
import {PDFViewer,BlobProvider , PDFDownloadLink } from '@react-pdf/renderer';
import { DownloadOutlined } from '@ant-design/icons';
import css from "../styles/ReportPage.module.css"
import formate1 from "../public/Images/ReportFormate/formate1.jpg"
import formate2 from "../public/Images/ReportFormate/formate2.jpg";
import formate3 from "../public/Images/ReportFormate/formate3.jpg";
import Image from 'next/image';
import { Button, Modal } from "antd";
import Layout from '@/Components/Layout';

const ReportPdf = () => {
const [imagename, setImagename] = useState(formate1);
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleOk = () => {
   setIsModalOpen(false);
 };
 const handleCancel = () => {
   setIsModalOpen(false);
 };
         var data=JSON.parse(localStorage.getItem("ReportAllDAta"))

        var date=data.date.split("T")[0].replaceAll("-","_")
        var gradeName=data.Gradename
        const[formateNo,setFormateNo]=useState(1)
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
  const FormateSelect=(id)=>{
    setFormateNo(id)
    if(id===2){
      setImagename(formate2)
    }else if(id === 3){
      setImagename(formate3)
    }else{
      setImagename(formate1);
    }
   setIsModalOpen(true);


  }
  return (
    <>
      <Layout title={"Report-Pdf"}>
        <div style={styles.container}>
          <div className="DownloadButton">
            <div className={css.format_row}>
              <div className="row">
                <div className="col-6 col-md-4">
                  <div
                    className={css.formate_box}
                    style={{
                      border: formateNo === 1 ? "4px solid #081A51" : null,
                    }}
                    onClick={() => FormateSelect(1)}
                  >
                    <span>1</span>
                    <Image
                      src={formate1}
                      alt="formate"
                      className={css.imageFormate}
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div
                    className={css.formate_box}
                    style={{
                      border: formateNo === 2 ? "4px solid #081A51" : null,
                    }}
                    onClick={() => FormateSelect(2)}
                  >
                    <span>2</span>
                    <Image
                      src={formate2}
                      alt="formate"
                      className={css.imageFormate}
                    />
                  </div>
                </div>

                <div className="col-6 col-md-4 ">
                  <div
                    className={`${css.formate_box} ${css.formate_three} `}
                    style={{
                      border: formateNo === 3 ? "4px solid #081A51" : null,
                    }}
                    onClick={() => FormateSelect(3)}
                  >
                    <span>3</span>
                    <Image
                      src={formate3}
                      alt="formate"
                      className={css.imageFormate}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <BlobProvider
                document={<MyDocument formateNo={formateNo} />}
                style={styles.viewer}
                fileName="my-document.pdf"
              >
                {({ url, loading, error }) =>
                  loading ? (
                    "Loading document..."
                  ) : error ? (
                    "Error loading document :("
                  ) : (
                    <a href={url} className="btnBox" target="_blank">
                      Download PDF <DownloadOutlined />{" "}
                    </a>
                  )
                }
              </BlobProvider>
            </div>
          </div>
        </div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Image src={imagename} alt="formate" className={css.imageFormate} />
        </Modal>
      </Layout>
    </>
  );
}

export default ReportPdf