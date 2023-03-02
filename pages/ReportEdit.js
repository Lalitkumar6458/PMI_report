import Layout from "@/Components/Layout";
import React from "react";
import { MdDelete } from "react-icons/md";
import css from "../styles/ReportPage.module.css";
import { LeftOutlined } from "@ant-design/icons";
import Router from "next/router";
import { Button, Input } from 'antd';
const ReportEdit = () => {
  const { TextArea } = Input;
  return (
    <>
      <Layout title="ReportEdit">
        <div className={css.reportEdit_con}>
          <div className={css.heading_report}>
            <span
              className={css.arrow_left}
              onClick={() => Router.push("/Report")}
            >
              <LeftOutlined className={css.icons_client} />
            </span>
            <div className={css.heading_text}>
              <span>Chemical Composition</span>
              <span>(Grade:316L)</span>
            </div>
            <span>
              {" "}
              <MdDelete className={css.icon_delete} />
            </span>
          </div>

          <div className={`${css.inputRow} row`} >
            <div className="col-4">
            <div className={css.inputBox}>
                  <label>Sr No. </label>
                  <Input placeholder="Basic usage" />
                </div>
            </div>
            <div className="col-7">
            <div className={css.inputBox}>
                  <label>Quantity</label>
                  <Input placeholder="Basic usage" />
                </div>
            </div>
            <div className="col-12">
            <div className={css.inputBox}>
                  <label>Size(descriptions)</label>
                  <TextArea rows={4} style={{border:"1px solid"}} />
                </div>
            
            </div>
            <div className="col-6">
            <div className={css.inputBox}>
                  <label>Heat No.</label>
                  <Input placeholder="Basic usage" />
                </div>
            </div>
            <div className="col-5">
            <div className={css.inputBox}>
                  <label>Remark</label>
                  <Input placeholder="Basic usage" />
                </div>
            </div>


          </div>
          <div className={css.gradeChemicaltable}>
            <table>
              <thead>
                <tr>
                  <th>Alloy Element</th>
                  <th>Actual observations</th>
                  <th>Specification range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MN(%)</td>
                  <td> <Input placeholder="Basic usage" value={1.52} className={css.Input_field} /></td>
                  <td>2.00Max</td>
                </tr>
                <tr>
                  <td>NI</td>
                  <td> <Input placeholder="Basic usage" value={10.81} className={css.Input_field} /></td>
                  <td>10-14</td>
                </tr>
                <tr>
                  <td>Cr</td>
                  <td> <Input placeholder="Basic usage" value={16.44} className={css.Input_field} /></td>
                  <td>16-18</td>
                </tr>
                <tr>
                  <td>Mo</td>
                  <td> <Input placeholder="Basic usage" value={2.07} className={css.Input_field} /></td>
                  <td>2-3</td>
                </tr>
                <tr>
                  <td>Cu</td>
                  <td> <Input placeholder="Basic usage" value={"-"} className={css.Input_field} /></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Fe</td>
                  <td> <Input placeholder="Basic usage" value={"BAL"} className={css.Input_field} /></td>
                  <td>BAL</td>
                </tr>
              </tbody>
            </table>

            <Button className={css.Update_chemical}>
              Update
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ReportEdit;
