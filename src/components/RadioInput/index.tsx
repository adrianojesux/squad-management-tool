import React from "react";

import { Container } from "./styles";

const RadioInput: React.FC = () => {
  return (
    <Container>
      <span>Type teams</span>
      <label htmlFor="campo-radio1">
        Opção
        <span className="checkmark"></span>
        <input type="radio" value="0" name="campo-radio" id="campo-radio1" />
      </label>
      <label htmlFor="campo-radio1">
        Opção
        <span className="checkmark"></span>
        <input type="radio" value="0" name="campo-radio" id="campo-radio1" />
      </label>
    </Container>
  );
};

export default RadioInput;
