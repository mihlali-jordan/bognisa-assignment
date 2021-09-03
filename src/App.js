import React from 'react'

// Component
import AppFormInput from './components/form/AppFormInput'
import AppFormDropdown from './components/form/AppFormDropdown'

// Data
import { LEGAL_TYPE_OPTIONS } from './data/index'

/**
 *
 * @Banking details
 * Select a bank (select)
 * Enter a bank code (input -number)
 * Account number (input - number)
 * Account name (input)
 * Account type (select)
 */

/**
 *
 * @Personal details
 * Legal form (select)
 * First name
 * Last name
 * Middle name
 * Date of birth
 * External id (input)
 * Mobile number (input)
 * Gender Select (select)
 */

const App = () => {
  // Personal details state
  const [legalForm, setLegalForm] = React.useState(LEGAL_TYPE_OPTIONS[0].value)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [middleName, setMiddleName] = React.useState('')
  const [dob, setDob] = React.useState('')
  const [externalId, setExternalId] = React.useState('')
  const [mobileNumber, setMobileNumber] = React.useState('')
  const [gender, setGender] = React.useState('')

  // Banking details
  const [bank, setBank] = React.useState('')
  const [bankCode, setBankCode] = React.useState('')
  const [accNum, setAccNum] = React.useState('')
  const [accName, setAccName] = React.useState('')
  const [accType, setAccType] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `First Name: ${firstName} \n Middle Name: ${middleName} \n Legal Form: ${legalForm} \n Date of birth: ${dob} \n Account Number: ${hideAccNum(
        accNum
      )} \n`
    )
  }

  const hideAccNum = (accNum) => {
    let accNumArr = accNum.split('')
    let middleIndex = Math.floor(accNumArr.length / 2) - 1

    let indicesToReplace = [
      middleIndex,
      middleIndex - 1,
      middleIndex + 1,
      middleIndex + 2,
    ]

    for (let i in indicesToReplace) {
      accNumArr[indicesToReplace[i]] = '*'
    }

    return accNumArr.join('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Personal Details</h2>
        <hr />
        <AppFormDropdown
          label="Legal Form"
          setField={setLegalForm}
          value={legalForm}
          options={LEGAL_TYPE_OPTIONS}
        />
        <AppFormInput
          label="First Name"
          value={firstName}
          setField={setFirstName}
        />
        <AppFormInput
          label="Date of Birth"
          value={dob}
          setField={setDob}
          type="date"
        />

        <AppFormInput
          label="Middle Name"
          value={middleName}
          setField={setMiddleName}
        />
        <h2>Banking Details</h2>
        <hr />
        <AppFormInput
          label="Account Number"
          value={accNum}
          setField={setAccNum}
        />
        <button type="submit" style={{ display: 'block' }}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
