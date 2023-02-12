import React from 'react'

const Button = (props) => {
    var {title,icon,event}=props.content
  return (
    <button className='Button_g' onClick={event} >{title}{icon}</button>
  )
}

export default Button