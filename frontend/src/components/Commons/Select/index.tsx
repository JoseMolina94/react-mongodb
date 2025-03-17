import { ChangeEvent } from "react"

import './style.css'

interface SelectProps {
  value: any
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  name: string
  noLabel?: boolean
  label?: string
  options: any[]
  valueProp?: string
  labelProp?: string
  required?: boolean
  placeholder?: string
}

export default function Select(props: SelectProps) {
  const {
    value,
    onChange = (event: ChangeEvent<HTMLSelectElement>) => {},
    name,
    noLabel = false,
    label = '',
    options = [],
    valueProp = 'value',
    labelProp = 'label',
    required = false,
    placeholder = 'Seleccione una opción'
  } = props

  return (
    <div>
      {
        !noLabel &&
        <p className="font-xs">
          {label}
        </p>
      }

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="select"
      >
        <option value="">{placeholder}</option>
        {options.map((option: any, index: number) => (
          <option key={`option-item-${index}`} value={option[valueProp]}>
            {option[labelProp]}
          </option>
        ))}
      </select>
    </div>
  )
}