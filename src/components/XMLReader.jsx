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
  const [file, setFile] = useState(null)

  const handleFileUpload = (e) => {
    // get file
    const selectedFile = e.target.files[0]
    
    if (selectedFile) {
      // check if file is xml
      if (selectedFile.type !== 'text/xml') {
        setError(true)
        return
      }
      const reader = new FileReader()
      // read the contents of the file as text
      reader.readAsText(selectedFile)
      reader.onload = (e) => {
        const text = e.target.result
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
      }

      setFile(selectedFile)
    }
  };

  return (
    <div id='fileInputComponent'>
      <div>
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
        <p>NAME: {file ? file.name : "/"}</p>
        <p>SIZE: {file ? file.size : "0"}B</p>
        <p>TYPE: {file ? file.type : "/"}</p>
    </div>
  )
}
