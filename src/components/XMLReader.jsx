import React, { useState } from 'react'
import XMLParser from 'react-xml-parser';
import Input from './Input';
import propTypes from 'prop-types'

XMLReader.propTypes = {
  onXMLSubmit: propTypes.func.isRequired,
}

// Description: This component is used to handle xml file uploads
export default function XMLReader({ onXMLSubmit }) {
  const [error, setError] = useState(false)

  const handleFileUpload = (e) => {
    // get file
    const file = e.target.files[0]
    
    if (file) {
      // check if file is xml
      if (file.type !== 'text/xml') {
        setError(true)
        return
      }
      const reader = new FileReader()
      // read file as text
      reader.readAsText(file)
      reader.onload = (e) => {
        const text = e.target.result;
        const xml = new XMLParser().parseFromString(text);
        const records = xml.getElementsByTagName('record').map((record) => {
          // create object from xml
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
