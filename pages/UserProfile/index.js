import Layout from "@/Components/Layout";
import BorderBox from "@/Components/SmallComponets/BorderBox";
import React, { useState } from "react";
import styles from "@/styles/Userprofile.module.css";
import { Button, Input, message, Upload } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

const getBase64 = (img, callback) => {
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

const index = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
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
                  <Input placeholder="Enter your company name" />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className={styles.input_box}>
                  <label>Phone No.</label>
                  <Input placeholder="Enter your Phone No." />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className={styles.input_box}>
                  <label>Email</label>
                  <Input placeholder="Enter your Email" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className={styles.input_box}>
                  <label>Address</label>
                  <Input placeholder="Enter your Address" />
                </div>
              </div>
              <div className="col-4 col-md-6">
                <div className={styles.image_box}>
                  <label>Profile Picture</label>

                  <Upload
                    name="avatar"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <Button type="primary" className={styles.Save_details_btn}>Save Details</Button>
                </div>
                
              </div>
            </div>
          </div>
     
      </BorderBox>
    </Layout>
  );
};

export default index;
