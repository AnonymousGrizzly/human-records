import React from 'react'
import propTypes from 'prop-types'

Input.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  id: propTypes.string,
  className: propTypes.string,
  pretext: propTypes.string,
  errors: propTypes.any,
  errorText: propTypes.string,
  register: propTypes.object
}

// Description: This component is used to handle input fields
export default function Input({
  type, 
  placeholder, 
  value, 
  onChange, 
  id, 
  className, 
  pretext, 
  errors, 
  errorText,
  register
}) {
  return (
    <>
        {pretext && <b>{pretext}</b>}
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            id={id}
            className={className}
            {...register}
        />
        {errors && <span>{errorText}</span>}
    </>
  )
}
