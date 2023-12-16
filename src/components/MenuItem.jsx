import React from 'react'

const MenuItem = (props) => {
  const style = props.hasHover? 'text-white cursor-pointer hover:bg-white hover:text-black px-3 py-2 rounded-md': 'text-white cursor-pointer'
  return (
    <div className={style} >{props.title? props.title : props.icon}</div>
  )
}

export default MenuItem