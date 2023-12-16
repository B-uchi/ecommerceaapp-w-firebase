import React from 'react'

const MenuItem = (props) => {
  return (
    <div className='text-white cursor-pointer'>{props.title? props.title : props.icon}</div>
  )
}

export default MenuItem