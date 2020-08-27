import React, { useState, useEffect } from 'react'

import { Container } from './styles'

interface InputTagProps {
  label: string
  placeHolder: string
  value?: string[]
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const InputTags: React.FC<InputTagProps> = ({
  label,
  placeHolder,
  value,
  onChange,
}) => {
  const [focused, setFocused] = useState<boolean>(false)
  const [myValue, setMyValue] = useState<string[]>([])

  useEffect(() => {
    if (value) setMyValue(value)
  }, [value])

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    // setMyValue(e.target.value as string)
    // if ('function' === typeof onChange) {
    //   onChange(e)
    // }
  }

  return (
    <Container focused={focused}>
      <label htmlFor="input-id">{label}</label>
      <textarea
        name="input-id"
        id="input-id"
        disabled
        value={myValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeHolder}
        rows={5}
        onChange={handleInputChange}
      />
    </Container>
  )
}

export default InputTags
