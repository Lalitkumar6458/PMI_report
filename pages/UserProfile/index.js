import Layout from "@/Components/Layout";
import BorderBox from "@/Components/SmallComponets/BorderBox";
import React, { useState,useEffect } from "react";
import styles from "@/styles/Userprofile.module.css";
import { Button, Input, message, Upload } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { UserInfoSave, getUserDataUrl } from "@/Api/Url";
import axios from "axios";


const getBase64 = (img, callback) => {
  console.log("image",img)
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const beforeUploadlogo = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
var initialValues={
  name:"",
  email:"",
  phone:"",
  address:"",
  profileImg:"",
  logoImg:""

}
const index = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [imageUrllogo, setImagelogo] = useState();
  const [editUserInfo, setEditUserInfo] =useState(false);
  const [userDetails, setUserDetails] = useState(initialValues)


  const Changehanlder=(e)=>{
    const {name,value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value

    })
  }

  const getUserData = async()=>{


    await axios
      .get(getUserDataUrl,{params:{username:'admin'}}, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
        let userData = response.data.data[0]
        setImageUrl(userData.user_img)
        setImagelogo(userData.logo_img)
       
        setUserDetails({
          name: userData.user_name,
          email: userData.user_email,
          phone: userData.phone_no,
          address: userData.address

        })

        console.log("response data c", response.data.data);

      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        console.log(error, "error");
      });


  }
  useEffect(()=>{
    getUserData()
  },[])

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
      console.log("url", url)
     
    });
    setUserDetails({
      ...userDetails,
      profileImg: info.file.originFileObj
    })
    // if (info.file.status === "uploading") {
    //   setLoading(true);
    //   return;
    // }
    // if (info.file.status === "done") {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, (url) => {
    //     setLoading(false);
    //     setImageUrl(url);
    //   });
    // }
  };
  const handleChangelogo = (info) => {

    console.log(info, "info", info.file.originFileObj)
    setUserDetails({
      ...userDetails,
      logoImg: info.file.originFileObj
    })
       getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
         setImagelogo(url);
        console.log("url",url)
      });
    // if (info.file.status === "uploading") {
    //   setLoading(true);
    //   return;
    // }
    // if (info.file.status === "done") {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, (url) => {
    //     setLoading(false);
    //     setImageUrl(url);
    //   });
    // }
  };
  const userDetailsSave=async()=>{
    const form =new FormData()
    console.log("userDetails", userDetails)
    form.append("name", userDetails.name)
    form.append("email", userDetails.email)
    form.append("phone",userDetails.phone)
    form.append("address",userDetails.address)
    form.append("profileImg",userDetails.profileImg)
    form.append("logoImg", userDetails.logoImg)
    // setEditUserInfo(true)

    

    await axios
      .post(UserInfoSave, form, {
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        Authorization: `Bearer test`,
      })
      .then((response) => {
        console.log("response data c", response.data);
      })
      .catch((error) => {
        // dispatch({
        //   type: ERROR_FINDING_USER
        // })
        console.log(error, "error");
      });

  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
 
  return (
    <Layout title={"UserProfile"}>
      <BorderBox title={"My Profile"}>
        <div className={styles.yor_details_page}>
          <h3 className="text-center" style={{fontSize:"2rem"}}>Your Details</h3>
          <div className={styles.userForm_con}>
            <div className="row col_gap_5">
              <div className="col-12 col-md-6">
                <div className={styles.input_box}>
                  <label>Name</label>
                  <Input placeholder="Enter your company name" disabled={editUserInfo} value={userDetails.name} name="name" onChange={Changehanlder} />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className={styles.input_box}>
                  <label>Phone No.</label>
                  <Input placeholder="Enter your Phone No." disabled={editUserInfo} value={userDetails.phone} name="phone" onChange={Changehanlder} />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className={styles.input_box}>
                  <label>Email</label>
                  <Input placeholder="Enter your Email" disabled={editUserInfo} value={userDetails.email} name="email" onChange={Changehanlder} />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className={styles.input_box}>
                  <label>Address</label>
                  <Input placeholder="Enter your Address" disabled={editUserInfo} value={userDetails.address} name="address" onChange={Changehanlder} />
                </div>
              </div>
              <div className="col-4 col-md-6">
                <div className={styles.image_box}>
                  <label>Profile Picture</label>

                  <Upload
                    name="profilePic"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                          width: "100%",
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </div>
                </div>
                <div className="col-8 col-md-6 logo_upload">
                  <div className={styles.image_box}>
                    <label>Company Logo</label>

                    <Upload
                      name="companyLogo"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                    beforeUpload={beforeUploadlogo}
                      onChange={handleChangelogo}
                    >
                    {imageUrllogo ? (
                        <img
                        src={imageUrllogo}
                          alt="avatar"
                          style={{
                            width: "100%",
                          }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <Button type="primary" className={styles.Save_details_btn} onClick={()=>userDetailsSave()}>Save Details</Button>
                </div>
                
              </div>
            </div>
          </div>
     
      </BorderBox>
    </Layout>
  );
};

export default index;
