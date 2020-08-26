import React, { useState, useEffect } from "react";

import { Container } from "./styles";

interface InputProps {
  label: string;
  placeHolder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeHolder,
  value,
  onChange,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [myValue, setMyValue] = useState<string>("");

  useEffect(() => {
    if (value) setMyValue(value);
  }, [value]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setMyValue(e.target.value as string);
    if ("function" === typeof onChange) {
      onChange(e);
    }
  }

  return (
    <Container focused={focused}>
      <label htmlFor="input-id">{label}</label>
      <input
        type="text"
        name="input-id"
        id="input-id"
        value={myValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Input;
