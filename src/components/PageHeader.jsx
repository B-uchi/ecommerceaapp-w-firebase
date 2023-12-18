import React from 'react'

const PageHeader = ({title}) => {
  return (
    <div className='flex p-3'>
        <h1 className='font-bold mx-auto mt-6 text-2xl text-black px-3 py-2'>{title.toUpperCase()}</h1>
    </div>
  )
}

export default PageHeader