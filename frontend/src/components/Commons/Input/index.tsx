import { ChangeEvent } from "react"
import './style.css'

type Input = {
  label: string
  placeholder?: string
  value?: string | number
  name: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
}

export default function Input (props: Input) {
  const { 
    label,
    placeholder = "",
    value = "",
    name,
    onChange = (e: ChangeEvent<HTMLInputElement>) => {},
    type = "text"
  } = props

  return (
    <div>
      <p className="font-xs">{label}</p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  )
}