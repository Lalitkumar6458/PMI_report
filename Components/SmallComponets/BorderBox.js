import React from 'react'

const BorderBox = ({children,title}) => {
 
  return (
    <div className='Borbox_con'>
<div className='Border_box'>
      <h2>{title}</h2>
{children}
    </div>
    </div>
    
  )
}

export default BorderBox