import Layout from "@/Components/Layout";
import React, { useState } from "react";
import BorderBox from "@/Components/SmallComponets/BorderBox";
import styles from "../styles/ReportPage.module.css";
import pdficon from "../public/Images/pdficon.png"
import printicon from "../public/Images/printicon.png"
import excelicon from "../public/Images/excelicon.png"
import wordicon from "../public/Images/wordicon.png"
import wapp from "../public/Images/wappicon.png"
import email from "../public/Images/email.png"
import Image from "next/image";
import {
  FileAddOutlined,
  PlusCircleOutlined,
  DownOutlined,
  FileWordOutlined,
  UserOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  SaveOutlined,
  SendOutlined
} from "@ant-design/icons";
import {
  Select,
  DatePicker,
  Input,
  Button,
  Dropdown,
  message,
  Space,
  Tooltip,
 Drawer, Radio,
} from "antd";
import ReportTable from "@/Components/Reportcomponents/ReportTable";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Reportmobilelist from "@/Components/Reportcomponents/Reportmobilelist";
const Report = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [tableview, setTableview] = useState(false);


  const [placement, setPlacement] = useState('bottom');
  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawer1 = () => {
    setOpen1(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onClose1 = () => {
    setOpen1(false);
  };
  const onChangeDrawer = (e) => {
    setPlacement(e.target.value);
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onChangedate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };


  const items = [
    {
      label: "PDF",
      key: "1",
      icon: <FilePdfOutlined />,
    },
    {
      label: "MS WORD DOC",
      key: "2",
      icon: <FileWordOutlined />,
    },
    {
      label: "Excel",
      key: "3",
      icon: <FileExcelOutlined />,
    },
    {
      label: "Print",
      key: "4",
      icon: <PrinterOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
const Table_view=()=>{
  setTableview(true)
}
const Table_view1=()=>{
  setTableview(false)
}
  return (
    <>
      <Layout title="Report">
        <div className={styles.report_con}>
          <BorderBox title={"Report Infomation"}>
            <div className="row">
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Party Name </label>
                  <Select
                    className={styles.Seletcbox}
                    showSearch
                    placeholder="Select a Party"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Agency Name</label>
                  <Input placeholder="Basic usage" />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label> PMI Location </label>
                  <Input placeholder="Basic usage" />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Date</label>
                  <DatePicker
                    onChange={onChangedate}
                    className={styles.datePicker}
                  />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>PMI Rreport No.</label>
                  <Input placeholder="Basic usage" />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Purchase Order</label>
                  <Input placeholder="Basic usage" />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Instrument Id </label>
                  <Select
                    className={styles.Seletcbox}
                    showSearch
                    placeholder="Select a Instrument Id "
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className={styles.inputBox}>
                  <label>Modal No. </label>
                  <Select
                    className={styles.Seletcbox}
                    showSearch
                    placeholder="Select a Modal No."
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </BorderBox>

          <div className={styles.reportChemical}>
            <BorderBox title={"Alloys Contnets "}>
              <div className="row grade_report">
                <div className="col-12 col-md-3">
                  <div className={styles.inputBox}>
                    <label>Specified Goods</label>
                    <Select
                      className={styles.Seletcbox}
                      showSearch
                      placeholder="Enter Grade name"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "tom",
                          label: "Tom",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <div className={styles.GradeChemical}>
                    <div className={styles.GradeBox}>
                      <h4>Grade:304L</h4>
                    </div>
                    <div className={styles.chemicalTable}>
                      <table>
                        <thead>
                          <tr>
                            <th>Ni</th>
                            <th>Mn</th>

                            <th>Cr</th>

                            <th>Mo</th>

                            <th>Co</th>

                            <th>Fe</th>
                            <th>Pb</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>11-14</td>
                            <td>2max</td>
                            <td>0.3</td>
                            <td>23</td>
                            <td>56</td>
                            <td>12</td>
                            <td>58</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </BorderBox>
            <div className={styles.report_sizeqty}>
              <div className={styles.tableView}>
               <button className={tableview?"":`${styles.active}`} onClick={()=>Table_view1()}>view1</button>
               <button className={tableview?`${styles.active}`:""} onClick={()=>Table_view()}>view2</button>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className={styles.inputBox}>
                    <label>Quantity</label>
                    <Input placeholder="Basic usage" />
                  </div>
                </div>
                <div className="col-4">
                  <div className={styles.inputBox}>
                    <label>Size(Description)</label>
                    <Input placeholder="Basic usage" />
                  </div>
                </div>
                <div className="col-2 d-flex">
                  <div className={styles.AddButon}>
                    <Button type="primary">
                      <PlusCircleOutlined />
                      ADD
                    </Button>
                  </div>
                </div>
              </div>
              <div className={`${styles.tableContent} reporttable`}>
                {/* <table>
                  <thead>
                    <tr>
                      <th>SR No.</th>
                      <th>Qty</th>
                      <th>Size(Descriptions)</th>
                      <th>Ni</th>
                      <th>Co</th>
                      <th>Mn</th>
                      <th>Mo</th>
                      <th>Cr</th>
                      <th>Ti</th>
                      <th>Fe</th>
                      <th>Remark</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1

                      </td>
                      <td>3Pc</td>
                      <td>Circle 30X200mm </td>
                      <td>0.44</td>
                      <td>34</td>
                      <td>23</td>
                      <td>12</td>
                      <td>09</td>
                      <td>37</td>
                      <td>24</td>
                      <td>Ok</td>
                      <td><div className={styles.buttons_eddit}>
                              <span>
                                <FaEdit
                                  className={styles.icon_edit}
                                
                                />
                              </span>
                              <span>
                                <MdDelete
                                  className={styles.icon_delete}
                                  
                                />
                              </span>
                            </div></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>4Pc</td>
                      <td>Circle 10X300mm </td>
                      <td>0.44</td>
                      <td>34</td>
                      <td>23</td>
                      <td>12</td>
                      <td>09</td>
                      <td>37</td>
                      <td>24</td>
                      <td>Ok</td>
                      <td>

                      <div className={styles.buttons_eddit}>
                              <span>
                                <FaEdit
                                  className={styles.icon_edit}
                                
                                />
                              </span>
                              <span>
                                <MdDelete
                                  className={styles.icon_delete}
                                  
                                />
                              </span>
                            </div>
                      </td>
                    </tr>
                  </tbody>
                </table> */}
                {
                  tableview?<ReportTable />:<Reportmobilelist/>
                
                }
                
              </div>
            </div>
            <div className={styles.ButtonSave_sent}>
              <span className={styles.save_btndrop} >
                <Dropdown.Button
                  menu={menuProps}
                  placement="bottom"
                  icon={<UserOutlined />}
                >
                  Save Report
                </Dropdown.Button>
              </span>
              <button className={styles.saveButton} onClick={showDrawer1}>Send<SendOutlined /></button>
              <button className={styles.saveButton} onClick={showDrawer}>Save <SaveOutlined /></button>
            </div>
          </div>
        </div>
        <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
      <div className={styles.drawer_button}>
        <div className="row" >
          <div className="col-6">
          <button className={styles.btndrawer}>PDF <Image src={pdficon} alt=""/></button>
          </div>
          <div className="col-6">
        <button className={styles.btndrawer}>Print <Image src={printicon} alt=""/></button>
            
            </div>
            <div className="col-6">
        <button className={styles.btndrawer}>Excel <Image src={excelicon} alt=""/></button>
            
            </div>
            <div className="col-6">
        <button className={styles.btndrawer}>MS Word <Image src={wordicon} alt=""/></button>
            
            </div>
        </div>
        

        


      </div>
      </Drawer>

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose1}
        open={open1}
        key={placement}
      >
      <div className={styles.drawer_button}>
        <div className="row" >
          <div className="col-6">
          <button className={`${styles.btndrawer} ${styles.whatsapp}`}>Whatsapp <Image src={wapp} alt=""/></button>
          </div>
          <div className="col-6">
        <button className={styles.btndrawer}>Email <Image src={email} alt=""/></button>
            
            </div>
           
        </div>
        

        


      </div>
      </Drawer>
      </Layout>
    </>
  );
};

export default Report;
