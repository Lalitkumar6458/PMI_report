import React,{useState} from 'react'
import MyDocument from '@/Components/ReportPdf/ReportPdfFormat'
// import { Image } from "antd";
import {PDFViewer,BlobProvider , PDFDownloadLink } from '@react-pdf/renderer';
import { DownloadOutlined,EyeOutlined } from '@ant-design/icons';
import css from "../styles/ReportPage.module.css"
import formate1 from "../public/Images/ReportFormate/formate1.jpg"
import formate2 from "../public/Images/ReportFormate/formate2.jpg";
import formate3 from "../public/Images/ReportFormate/formate3.jpg";
import Image from 'next/image';
import { Button, Modal,Checkbox  } from "antd";
import Layout from '@/Components/Layout';

const ReportPdf = () => {
const [imagename, setImagename] = useState(formate1);
 const [isModalOpen, setIsModalOpen] = useState(false);
 var currentDate = new Date();
 var formattedDate = currentDate.toISOString().slice(0, 10);
 const reportSetData=JSON.parse(localStorage.getItem('CreatedData'))
 console.log("formattedDate",formattedDate,reportSetData,'reportSetData')
 const dateNew=reportSetData.date== ''?formattedDate.replaceAll("-","_"):reportSetData.date.replaceAll("-","_")
 const[filename,setFileName]=useState(reportSetData.partyname.replaceAll(" ","_")+"_"+reportSetData.Gradename+"_"+dateNew )
const[withLatter,setWithLatterPad]=useState(false)
 const handleOk = () => {
   setIsModalOpen(false);
 };
 const handleCancel = () => {
   setIsModalOpen(false);
 };
 const onChangeHandler = (e) => {
  setWithLatterPad(e.target.checked)
};
         var data=JSON.parse(localStorage.getItem("ReportAllDAta"))

        var date=data.date.split("T")[0].replaceAll("-","_")||formattedDate
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
  const DOwnloadPdf=()=>{
    if(filename){

    }else{

      alert("Enter File name")
      return false
    }
  }
  return (
    <>
      <Layout title={"Report-Pdf"}>
        <div style={styles.container}>
          <div className="DownloadButton">
            <div className={css.format_row}>
              <div className={`${css.pdfInfo} row`}>
                <div className='col-12 col-md-7'>
                <div className={css.FileName}>
                <label>File Name</label>
                <input type='text' className='w-100' value={filename} onChange={(e)=>setFileName(e.target.value)} placeholder='Enter File Name...'/>
              </div>
                </div>
                <div className='col-12 col-md-5 d-flex align-items-center justify-content-center mb-3'>
                <Checkbox checked={withLatter} onChange={onChangeHandler}>With LatterPad</Checkbox>;
                </div>

              </div>
              
              <div className="row">
                <div className="col-6 col-md-4">
                  <div
                    className={css.formate_box}
                    style={{
                      border: formateNo === 1 ? "4px solid #081A51" : null,
                    }}
                    onClick={() => FormateSelect(1)}
                  >
                    <span className={css.FormateNum}>1</span>
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
                    <span className={css.FormateNum}>2</span>
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
                    <span className={css.FormateNum}>3</span>
                    <Image
                      src={formate3}
                      alt="formate"
                      className={css.imageFormate}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 d-flex align-items-center g-5">
              <BlobProvider
                document={<MyDocument formateNo={formateNo} latterPad={withLatter}  />}
                style={styles.viewer}
                filename="example.pdf"
              >
                {({ url, loading, error }) =>
                  loading ? (
                    "Loading document..."
                  ) : error ? (
                    "Error loading document :("
                  ) : (

                    <>

                    {/* <iframe src={url} title="Example PDF" filename="exmple.pdf" width="100%" height="500px"></iframe> */}

                    <a href={url}  className="btnBox mx-3" target="_blank">
                      View PDF<EyeOutlined />{" "}
                    </a>
                    </>
                  )
                }
              </BlobProvider>

              <PDFDownloadLink onClick={()=>DOwnloadPdf()} className="btnBox" document={<MyDocument formateNo={formateNo} />} fileName={filename}>
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <>Download PDF <DownloadOutlined /></>)}
      </PDFDownloadLink>
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