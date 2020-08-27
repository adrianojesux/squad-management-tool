import React from 'react'

import { Container, InputSelect, Row, Camp } from './styles'

const SquadPlain: React.FC = () => {
  return (
    <Container>
      <Row>
        <label htmlFor="">Formation</label>
        <InputSelect>
          <option value="Teste">Teste</option>
        </InputSelect>
      </Row>
      <Camp></Camp>
    </Container>
  )
}

export default SquadPlain
