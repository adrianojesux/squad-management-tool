import React, { useState, useEffect } from 'react'

import { Container } from './styles'

interface InputProps {
  fieldType: 'input' | 'text_area'
  label: string
  placeHolder: string
  value?: string
  id: string
  disabled?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const Input: React.FC<InputProps> = ({
  label,
  placeHolder,
  value,
  onChange,
  fieldType,
  disabled,
}) => {
  const [focused, setFocused] = useState<boolean>(false)
  const [myValue, setMyValue] = useState<string>('')

  useEffect(() => {
    setMyValue(value || '')
  }, [value])

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setMyValue(e.target.value as string)
    if ('function' === typeof onChange) {
      onChange(e)
    }
  }

  function handleTextAreaChange(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setMyValue(e.target.value as string)
    if ('function' === typeof onChange) {
      onChange(e)
    }
  }

  return (
    <Container focused={focused}>
      <label htmlFor="input-id">{label}</label>
      {fieldType == 'input' && (
        <input
          type="text"
          name="input-id"
          id="input-id"
          value={myValue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeHolder}
          onChange={handleInputChange}
          disabled={disabled}
        />
      )}
      {fieldType == 'text_area' && (
        <textarea
          name="input-id"
          id="input-id"
          value={myValue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeHolder}
          rows={12}
          disabled={disabled}
          onChange={handleTextAreaChange}
        />
      )}
    </Container>
  )
}

export default Input
