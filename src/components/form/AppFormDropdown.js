import React from 'react'

const AppFormDropdown = ({ label, setField, value, options }) => {
  return (
    <div style={{ margin: '10px 0px'}}>
      <label>{label}</label>
      <select value={value} onChange={(e) => setField(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default AppFormDropdown
