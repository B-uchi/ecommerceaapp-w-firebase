import React from 'react'

const FormInput = (props) => {
  return (
    <div className='mb-3'>
        <input required={props.required}  className='py-2 w-[100%] bg-transparent input' type={props.type} placeholder={props.placeholder} value={props.value} onChange={e => props.onChange(e.target.value)}/>
    </div>
  )
}

export default FormInput 