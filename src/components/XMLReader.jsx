import React, { useState } from 'react'
import XMLParser from 'react-xml-parser';
import Input from './Input';
import propTypes from 'prop-types'

XMLReader.propTypes = {
  onXMLSubmit: propTypes.func.isRequired,
}

export default function XMLReader({ onXMLSubmit }) {
  const [error, setError] = useState(false)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    
    if (file) {
      if (file.type !== 'text/xml') {
        setError(true)
        return
      }
      const reader = new FileReader()
      
      reader.readAsText(file)
      reader.onload = (e) => {
        const text = e.target.result;
        const xml = new XMLParser().parseFromString(text);
        const records = xml.getElementsByTagName('record').map((record) => {
          const data = {}
          record.children.forEach((field) => {
            data[field.name] = field.value
          })
          return data
        })
        onXMLSubmit(records)
      };
    }
  }

  return (
    <div id='fileInputComponent'>
      <Input 
        type='file'
        id='xmlInput'
        onChange={handleFileUpload}
        pretext='Upload XML File:'
        />
      <label htmlFor='xmlInput' className='mimicButton'>
        CHOOSE FILE
      {error && <b className='mimicError'>!</b>}
      </label>
    </div>
  )
}
