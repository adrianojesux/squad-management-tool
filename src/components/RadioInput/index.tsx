import React from 'react'

import { Container } from './styles'

interface Field {
  title: string
  value: string
  checked?: boolean
}

interface RadioInputProps {
  fields: Array<Field>
  name: string
  title: string
  onChange?: (value: Field) => void
}

const RadioInput: React.FC<RadioInputProps> = ({
  fields,
  title,
  name,
  onChange,
}) => {
  function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    const value = fields.find(f => (f.value = e.target.value))
    if ('function' === typeof onChange && value) onChange(value)
  }

  return (
    <Container>
      <span>{title}</span>
      <div onChange={onChangeValue} className="content-input">
        {fields &&
          fields.length > 0 &&
          fields.map((field: Field, index: number) => (
            <label htmlFor={name + String(index)} key={field.value}>
              <input
                type="radio"
                value={field.value}
                name={name}
                id={name + String(index)}
                checked={field.checked}
              />
              <span>{field.title}</span>
              <div className="check" />
            </label>
          ))}
      </div>
    </Container>
  )
}

export default RadioInput
