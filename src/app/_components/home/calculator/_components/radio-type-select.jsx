import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { FaCar } from 'react-icons/fa'
import { PiOfficeChair } from 'react-icons/pi'
import { LiaHourglassStartSolid } from 'react-icons/lia'

const RadioTypeSelect = (props) => {
  const [checked, setChecked] = useState()

  useEffect(() => {
    setChecked(props.checked)
  }, [props.checked])

  const handleInputChange = (value) => {
    setChecked(value)
    props.setChecked(value)
  }

  const renderIcon = (value) => {
    switch (value) {
      case 'fahrdienst':
        return <FaCar />
      case 'transport':
        return <PiOfficeChair />
      case 'reise':
        return <LiaHourglassStartSolid />
      default:
        return null
    }
  }

  const listInputTypes = props.list.map((item, idx) => (
    <Form.Check
      key={`${props.type}-${idx}`}
      className="col-6 text-dark"
      type={props.type}
    >
      <Form.Check.Input
        className="text-dark"
        name={props.type === 'radio' ? 'type' : 'type[]'}
        checked={checked === item.label}
        onChange={() => handleInputChange(item.label)}
        type={props.type}
        isValid
      />
      <Form.Check.Label className="text-dark d-inline-flex align-items-center gap-2 ms-3">
        {renderIcon(item.value)}
        <span className="ml-2 text-dark">{item.label}</span>
      </Form.Check.Label>
    </Form.Check>
  ))

  return <Form.Group className="row gy-2">{listInputTypes}</Form.Group>
}

export default RadioTypeSelect
