import React from 'react'

const BorderBox = (props) => {
    const {title,content}=props.ele
  return (
    <div className='Border_box'>
<h1>{title} </h1>
{content}
    </div>
  )
}

export default BorderBox