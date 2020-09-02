import React from 'react'

import { Container, TitleList, ListItem } from './styles'
interface SquadInfo {
  squad_name: string
  age_midle: number
}
interface HighListProps {
  squads_info?: SquadInfo[]
}

const HighList: React.FC<HighListProps> = ({ squads_info }) => {
  return (
    <div>
      <TitleList>Highest avg age</TitleList>
      <Container>
        {squads_info &&
          squads_info.map(info => (
            <ListItem>
              <h4>{info.squad_name}</h4>
              <span>{info.age_midle.toFixed(1)}</span>
            </ListItem>
          ))}
      </Container>
    </div>
  )
}

export default HighList
