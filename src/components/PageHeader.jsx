import React from 'react'

const PageHeader = ({title}) => {
  return (
    <div className=' container mx-auto  p-3'>
        <h1 className='font-bold text-2xl text-center text-white bg-[rgba(0,0,0,0.7)] px-3 py-2 rounded-md'>{title.toUpperCase()}</h1>
    </div>
  )
}

export default PageHeader