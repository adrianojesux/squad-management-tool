import React from 'react'
import { MdAdd } from 'react-icons/md'

import {
  Container,
  InputSelect,
  Row,
  Camp,
  PlayerItemContainer,
} from './styles'

const SquadPlain: React.FC = () => {
  return (
    <Container>
      <Row>
        <label htmlFor="">Formation</label>
        <InputSelect>
          <option value="Teste">Teste</option>
        </InputSelect>
      </Row>
      <Camp>
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
      </Camp>
    </Container>
  )
}

const PlayerItem = () => {
  return (
    <PlayerItemContainer>
      <MdAdd size={40} color="#fff" />
    </PlayerItemContainer>
  )
}

export default SquadPlain
