import React from 'react'
import { message  } from "antd";
const MessageAlert = ({type,content}) => {
    const [messageApi, contextHolder] = message.useMessage()
    const key = 'updatable';
    messageApi.open({
        key,
        type: type,
        content:content,
      })
  
  return (
    <>
 {contextHolder}
    </>
  )
    
}

export default MessageAlert