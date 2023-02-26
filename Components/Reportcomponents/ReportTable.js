import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { MdDelete } from "react-icons/md";
import styles from '../../styles/ReportPage.module.css'
import React, { useContext, useEffect, useRef, useState } from 'react';
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
const ReportTable = () => {

    
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
     srno:1,
     qty:"3pc",
     size:"Circle 30mmX200mm",
     Ni: "57.00",
     Cr: "1.0*",
     Mo: "21.00",
     Mn:"34",
     Co:"23",
     Ti:"0.34",
     Fe: "19.00",
     remark:"Ok",
    },
    {
        key: '1',
       srno:2,
       qty:"3pc",
       size:"Circle 30mmX200mm",
       Ni: "57.00",
       Cr: "1.0*",
       Mo: "21.00",
       Mn:"34",
       Co:"23",
       Ti:"0.34",
       Fe: "19.00",
       remark:"Ok",
  
      },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: 'SR No.',
      dataIndex: 'srno',
      width: '7%',
      editable: true,
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      width: '5%',
      editable: true,
    },

    {
      title: 'Size',
      dataIndex: 'size',
      width: '40%',
      editable: true,
    },
    {
        title: 'Ni',
        dataIndex: 'Ni',
        editable: true,

        

      },

      {
        title: 'Cr',
        dataIndex: 'Cr',
        editable: true,
      },
      {
        title: 'Mo',
        dataIndex: 'Mo',
        editable: true,
      },
      {
        title: 'Mn',
        dataIndex: 'Mn',
        editable: true,
      },
      {
        title: 'Co',
        dataIndex: 'Co',
        editable: true,
      },
      {
        title: 'Ti',
        dataIndex: 'Ti',
        editable: true,
      },
      {
        title: 'Fe',
        dataIndex: 'Fe',
        editable: true,
      },
      {
        title: 'Remark',
        dataIndex: 'remark',
        editable: true,
      },

    {
      title: 'Action',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
             <span style={{width:"100%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                                <MdDelete
                                  className={styles.icon_delete}
                                  
                                />
                              </span>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
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
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
        pagination={false} 
      />
    </div>
  );
};
export default ReportTable;