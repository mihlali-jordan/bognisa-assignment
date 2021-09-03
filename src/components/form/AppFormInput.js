import React from 'react'

const AppFormInput = ({ type = 'text', label, value, setField }) => {
  return (
    <div style={{ margin: '10px 0px'}}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setField(e.target.value)}
      />
    </div>
  )
}

export default AppFormInput
