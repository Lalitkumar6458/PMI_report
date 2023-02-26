import Layout from "@/Components/Layout";
import React, { useState } from "react";
import BorderBox from "@/Components/SmallComponets/BorderBox";
import styles from "../styles/ReportPage.module.css";
import {
  FileAddOutlined,
  PlusCircleOutlined,
  DownOutlined,
  FileWordOutlined,
  UserOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  PrinterOutlined,
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
} from "antd";
import ReportTable from "@/Components/Reportcomponents/ReportTable";

import { FaEdit } from "react-icons/fa";

import { MdDelete } from "react-icons/md";
const Report = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onChangedate = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items1 = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

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
              <div className="row">
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
                <ReportTable />
              </div>
            </div>
            <div className={styles.ButtonSave_sent}>
              <span>
                <Dropdown.Button
                  menu={menuProps}
                  placement="bottom"
                  icon={<UserOutlined />}
                >
                  Save Report
                </Dropdown.Button>
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Report;
