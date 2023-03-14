import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { MdDelete } from "react-icons/md";
import { DoubleRightOutlined,PlusCircleOutlined } from '@ant-design/icons';

import styles from '../../styles/ReportPage.module.css'
import React, { useContext, useEffect, useRef, useState,useImperativeHandle } from 'react';
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
var AllData=[]
const ReportTable = (props,ref) => {

var tabledaa=props.data
AllData=props.data
console.log("table data",tabledaa)
const [dataSource, setDataSource] = useState([
]);
const [tableview, setTableview] = useState(false);


  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const gradeDataC=[
    {
      ni:"11-14",
      mn:"2max",
      cr:"0.3",
      mo:"23",
      co:"56",
      fe:"12",
      pb:'58'
    }
  ]
 
  let columdata=[]
  gradeDataC[0]?Object.keys(gradeDataC[0]).map((item)=>{
    if(item==="id"||item==="key"){

    }else{
      columdata.push({
        title:item,
        dataIndex:item,
        editable: true,
      })
    }
   
  }):null
  const defaultColumns = [
    {
      title:"Sr No.",
      dataIndex:'srno',
      editable: true,
    },{
      title:"QTY",
      dataIndex:'qty',
      editable: true,
    },{
      title:"Size",
      dataIndex:'size',
      editable: true,
    },
   ...columdata,
   ,{
    title:"Remark",
    dataIndex:'remark',
    editable: true,
  },
    {
      title: 'Action',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
             <span style={{width:"100%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                                <MdDelete className={styles.icon_delete} />
                            </span>
          </Popconfirm>
        ) : null,
    },
  ];
  // useEffect(()=>{
  //   setDataSource(tabledaa)
  //   console.log("table data",tabledaa,dataSource)
  // },[tabledaa])
  
  const handleAdd = (data) => {
    console.log("data handleradd",data)
    alert("call add")
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: '32',
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };


  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  const[addeddata,setAddeddata] =useState([])

  const[objSizeQty,setObjSizeQty]=useState({
   size:"",
   qty:""
  })
 
  function getRandom(obj){
   console.log("obj",obj)
   var newobj={}
for(let i in obj){
if(obj[i].includes("-")){
var arr=obj[i].split("-")
newobj[i]= randomRange(arr[0],arr[1]) 
}else if(obj[i].includes("max") || obj[i].includes("Max")){
 if(obj[i].includes("Max")){
newobj[i]= randomRange(0,obj[i].split("-")[0] )
}else{
newobj[i]= randomRange(0,obj[i].split("-")[0])
}
}else{
 newobj[i]= randomRange(0,obj[i])
}
}
console.log("nen object",newobj)
function randomRange(min, max) {
 min=parseFloat(min)
 max=parseFloat(max)
let cal = Math.random() * (max - min) + min;
return parseFloat(cal.toFixed(2));
}
return newobj
 }

  const onSizeQtyHandler=(e)=>{
const{name,value}=e.target

setObjSizeQty({
 ...objSizeQty,
 [name]:value
})
console.log("size qty values",objSizeQty)
  }
  var count_add=1
  const AddreportItem=()=>{



    const data_get={
      key:count_add,
      srno:count_add,
      ...objSizeQty,
      ...getRandom(gradeDataC[0]),
      remark:"Ok"
     }
console.log("data data_get",data_get)
    setDataSource([...dataSource, data_get]);
    count_add++
  }


  return (
    <div>

      {/* <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button> */}
         <div className={styles.report_sizeqty}>
              {/* <div className={styles.tableView}>
               <button className={tableview?"":`${styles.active}`} onClick={()=>Table_view1()}>view1</button>
               <button className={tableview?`${styles.active}`:""} onClick={()=>Table_view()}>view2</button>
              </div> */}
              <div className="row">
                <div className="col-4">
                  <div className={styles.inputBox}>
                    <label>Quantity</label>
                    <Input placeholder="Enter Qty..." onChange={onSizeQtyHandler} value={objSizeQty.qty} name="qty" />
                  </div>
                </div>
                <div className="col-4">
                  <div className={styles.inputBox}>
                    <label>Size(Description)</label>
                    <Input placeholder="Enter Size..." onChange={onSizeQtyHandler} value={objSizeQty.size} name="size" />
                  </div>
                </div>
                <div className="col-2 d-flex">
                  <div className={styles.AddButon}>
                    <Button type="primary" onClick={AddreportItem}>
                      <PlusCircleOutlined />
                      ADD
                    </Button>
                  </div>
                </div>
              </div>
              <div className={`${styles.tableContent} reporttable`}>
             
              <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
        pagination={false} 
      />
              </div>
            </div>

      
     
    </div>
  );
};
export default ReportTable;


